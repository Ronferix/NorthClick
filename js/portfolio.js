/* ─────────────────────────────────────────────
   PORTFOLIO — data lives in data/projects.json
   Edit that file directly or via /admin
   ───────────────────────────────────────────── */

(async function () {
  const grid = document.querySelector('.portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  let allProjects = [];
  let currentFilter = 'all';

  try {
    const res = await fetch('data/projects.json');
    const data = await res.json();
    allProjects = data.projects || [];
  } catch (e) {
    console.error('NorthClick: could not load projects.json', e);
    return;
  }

  function getLang() {
    return localStorage.getItem('nc-lang') || 'en';
  }

  /* Free screenshot service — no API key needed */
  function autoThumb(url) {
    return `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=450`;
  }

  function buildCard(p) {
    const lang  = getLang();
    const desc  = lang === 'es' && p.descEs  ? p.descEs  : p.desc;
    const tags  = lang === 'es' && p.tagsEs  ? p.tagsEs  : p.tags;

    const src = p.thumb ? p.thumb : (p.liveUrl ? autoThumb(p.liveUrl) : null);

    const thumbInner = src
      ? `<img src="${src}" alt="${p.title}" loading="lazy"
             style="width:100%;height:100%;object-fit:cover;display:block;">`
      : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#1E3A5F,#2563EB);
             display:flex;align-items:center;justify-content:center;">
           <i class="bi bi-image" style="font-size:2rem;color:rgba(255,255,255,0.2);"></i>
         </div>`;

    const tagsHTML = tags.map((t, i) =>
      `<span class="badge${i > 0 ? ' badge-gold' : ''}">${t}</span>`
    ).join('');

    const viewLabel    = lang === 'es' ? 'Ver en vivo'  : 'View live';
    const projectLabel = lang === 'es' ? 'Ver proyecto' : 'View project';

    const overlayBtn = p.liveUrl
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-card__overlay-btn">
           <i class="bi bi-box-arrow-up-right"></i> ${viewLabel}
         </a>` : '';

    const footerLink = p.liveUrl
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-card__link">
           ${projectLabel} <i class="bi bi-arrow-right"></i>
         </a>` : '';

    const demoBadge = p.demo
      ? `<span class="demo-badge">${lang === 'es' ? 'Proyecto demo' : 'Demo project'}</span>`
      : '';

    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.id = p.id;
    card.dataset.category = p.category;
    card.innerHTML = `
      ${demoBadge}
      <div class="project-card__thumb">
        ${thumbInner}
        <div class="project-card__overlay">${overlayBtn}</div>
      </div>
      <div class="project-card__body">
        <div class="project-card__tags">${tagsHTML}</div>
        <h3>${p.title}</h3>
        <p>${desc}</p>
        <div class="project-card__footer">
          <span class="project-card__year">${p.year}</span>
          ${footerLink}
        </div>
      </div>`;
    return card;
  }

  function render(filter) {
    currentFilter = filter;
    grid.innerHTML = '';

    const list = filter === 'all'
      ? allProjects
      : allProjects.filter(p => p.category === filter);

    if (list.length === 0) {
      const lang = getLang();
      grid.innerHTML = `<p style="color:var(--text-3);font-size:0.9rem;padding:48px 0;grid-column:1/-1;">${
        lang === 'es' ? 'Próximamente proyectos en esta categoría.' : 'Projects in this category coming soon.'
      }</p>`;
      return;
    }

    list.forEach((p, i) => {
      const card = buildCard(p);
      card.style.cssText = `opacity:0;transform:translateY(20px);transition:opacity 0.4s ease ${i * 80}ms,transform 0.4s ease ${i * 80}ms`;
      grid.appendChild(card);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }));
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  document.addEventListener('nc:langchange', () => render(currentFilter));

  render('all');
})();
