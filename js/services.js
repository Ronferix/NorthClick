/* ================================================
   NORTHCLICK — Services page dynamic renderer
   Reads data/services.json and builds tabs + tables.
   Responds to nc:langchange for bilingual switching.
   ================================================ */

(function () {
  let data = null;
  let lang = localStorage.getItem('nc-lang') || 'en';

  /* ── Fetch JSON ── */
  async function loadData() {
    const res = await fetch('data/services.json');
    if (!res.ok) throw new Error('Could not load services.json');
    data = await res.json();
  }

  /* ── Helpers ── */
  function t(key) {
    return (window.TRANSLATIONS && TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || '';
  }

  function pick(en, es) {
    return lang === 'es' ? es : en;
  }

  /* ── Render tab buttons ── */
  function renderTabs() {
    const el = document.getElementById('cat-tabs');
    if (!el || !data) return;

    el.innerHTML = data.tabs.map((tab, i) =>
      `<button class="cat-tab${i === 0 ? ' active' : ''}" data-tab="${tab.id}" role="tab">
        ${pick(tab.label, tab.labelEs)}
      </button>`
    ).join('');

    el.querySelectorAll('.cat-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        el.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.cat-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById('panel-' + btn.dataset.tab);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* ── Render panels ── */
  function renderPanels() {
    const el = document.getElementById('cat-panels');
    if (!el || !data) return;

    const thService  = t('cat.th.service')  || 'Service';
    const thIncludes = t('cat.th.includes') || 'Includes';
    const thPrice    = t('cat.th.price')    || 'Price (USD)';
    const thTime     = t('cat.th.time')     || 'Est. Time';

    el.innerHTML = data.tabs.map((tab, i) => {
      const intro = pick(tab.intro, tab.introEs);
      const rows  = tab.rows.map(row => `
        <tr>
          <td>${pick(row.name, row.nameEs)}</td>
          <td>${pick(row.includes, row.includesEs)}</td>
          <td>${row.price}</td>
          <td>${pick(row.time, row.timeEs)}</td>
        </tr>`).join('');

      return `
        <div class="cat-panel${i === 0 ? ' active' : ''} reveal" id="panel-${tab.id}">
          <p class="svc-table-intro">${intro}</p>
          <div class="svc-table-wrap">
            <table class="svc-table">
              <thead>
                <tr>
                  <th>${thService}</th>
                  <th>${thIncludes}</th>
                  <th>${thPrice}</th>
                  <th>${thTime}</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>`;
    }).join('');
  }

  /* ── Render hourly note ── */
  function renderHourly() {
    const el = document.getElementById('services-hourly');
    if (!el) return;
    const label = lang === 'es' ? 'Tarifa por hora: $40/hr' : 'Hourly rate: $40/hr';
    const desc  = lang === 'es'
      ? 'disponible para trabajos que no encajan en un alcance definido.'
      : "available for work that doesn't fit a defined scope.";
    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;padding:14px 20px;background:var(--surface);border-radius:var(--radius);border-left:3px solid var(--ice);">
        <i class="bi bi-clock" style="color:var(--ice);font-size:1rem;flex-shrink:0;"></i>
        <p style="margin:0;font-size:0.85rem;"><strong>${label}</strong> — ${desc}</p>
      </div>`;
  }

  /* ── Full render ── */
  function render() {
    renderTabs();
    renderPanels();
    renderHourly();
  }

  /* ── Init ── */
  async function init() {
    try {
      await loadData();
      render();
    } catch (err) {
      console.error('[services.js]', err);
      const el = document.getElementById('cat-panels');
      if (el) el.innerHTML = '<p style="color:var(--muted);padding:24px;">Could not load services data.</p>';
    }

    document.addEventListener('nc:langchange', e => {
      lang = e.detail.lang;
      render();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
