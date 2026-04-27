/**
 * Vercel serverless function — GitHub OAuth handler for Decap CMS
 * Client Secret lives ONLY in Vercel environment variables, never in frontend code.
 *
 * Required env vars in Vercel dashboard:
 *   OAUTH_CLIENT_ID      — GitHub OAuth App Client ID
 *   OAUTH_CLIENT_SECRET  — GitHub OAuth App Client Secret
 */
export default async function handler(req, res) {
  const { code } = req.query;

  /* Step 1 — no code yet: redirect browser to GitHub login */
  if (!code) {
    const params = new URLSearchParams({
      client_id: process.env.OAUTH_CLIENT_ID,
      scope: 'repo,user',
    });
    return res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
  }

  /* Step 2 — GitHub redirected back with a code: exchange it for a token */
  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id:     process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code,
      }),
    });

    const { access_token, error } = await tokenRes.json();

    if (error || !access_token) {
      return postMessage(res, 'error', { error: error || 'auth_failed' });
    }

    return postMessage(res, 'success', { token: access_token, provider: 'github' });

  } catch (err) {
    return postMessage(res, 'error', { error: 'server_error' });
  }
}

/**
 * Sends an HTML page that posts a message to the CMS window and closes itself.
 * Using JSON.stringify prevents any XSS from the data payload.
 */
function postMessage(res, status, data) {
  const msg = `authorization:github:${status}:${JSON.stringify(data)}`;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html><html><body><script>
    (function () {
      function relay(e) {
        window.opener.postMessage(${JSON.stringify(msg)}, e.origin);
        window.close();
      }
      window.addEventListener('message', relay, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  <\/script></body></html>`);
}
