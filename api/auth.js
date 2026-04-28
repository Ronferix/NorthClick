export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    const params = new URLSearchParams({
      client_id: process.env.OAUTH_CLIENT_ID,
      scope: 'repo,user',
    });
    return res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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

  } catch {
    return postMessage(res, 'error', { error: 'server_error' });
  }
}

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
