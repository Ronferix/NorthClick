/* ─────────────────────────────────────────────
   PORTFOLIO — data lives in data/projects.json
   Edit that file directly or via /admin
   ───────────────────────────────────────────── */

(async function () {
  const grid = document.querySelector('.portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  const PER_PAGE = 6;
  let allProjects  = [];
  let currentFilter = 'all';
  let currentPage   = 1;

  /* Inject pagination container after the grid */
  const paginationEl = document.createElement('div');
  paginationEl.className = 'pagination';
  grid.parentNode.insertBefore(paginationEl, grid.nextSibling);

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

  function autoThumb(url) {
    return `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=450`;
  }

  function buildCard(p) {
    const lang  = getLang();
    const desc  = lang === 'es' && p.descEs  ? p.descEs  : p.desc;
    const tags  = lang === 'es' && p.tagsEs  ? p.tagsEs  : p.tags;
    const src   = p.thumb ? p.thumb : (p.liveUrl ? autoThumb(p.liveUrl) : null);

    const gradient = p.thumbGradient || 'linear-gradient(135deg,#1E3A5F,#2563EB)';
    const icon     = p.thumbIcon    || 'bi-image';
    const thumbInner = src
      ? `<img src="${src}" alt="${p.title}" loading="lazy"
             style="width:100%;height:100%;object-fit:cover;display:block;">`
      : `<div style="width:100%;height:100%;background:${gradient};
             display:flex;align-items:center;justify-content:center;">
           <i class="bi ${icon}" style="font-size:2rem;color:rgba(255,255,255,0.35);"></i>
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

  function pageButtons(current, total) {
    if (total <= 1) return '';
    const pages = [];

    const addPage = (n) => pages.push(`<button class="pagination__page${n === current ? ' active' : ''}" data-page="${n}">${n}</button>`);
    const addEllipsis = () => pages.push(`<span class="pagination__ellipsis">…</span>`);

    if (total <= 7) {
      for (let i = 1; i <= total; i++) addPage(i);
    } else {
      addPage(1);
      if (current > 3) addEllipsis();
      for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) addPage(i);
      if (current < total - 2) addEllipsis();
      addPage(total);
    }

    return pages.join('');
  }

  function renderPagination(list) {
    const lang  = getLang();
    const total = Math.ceil(list.length / PER_PAGE);
    const from  = list.length === 0 ? 0 : (currentPage - 1) * PER_PAGE + 1;
    const to    = Math.min(currentPage * PER_PAGE, list.length);

    const info = lang === 'es'
      ? `Mostrando ${from}–${to} de ${list.length} proyectos`
      : `Showing ${from}–${to} of ${list.length} projects`;

    paginationEl.innerHTML = total <= 1 ? '' : `
      <p class="pagination__info">${info}</p>
      <div class="pagination__controls">
        <button class="pagination__prev" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>
          <i class="bi bi-chevron-left"></i>
        </button>
        ${pageButtons(currentPage, total)}
        <button class="pagination__next" data-page="${currentPage + 1}" ${currentPage === total ? 'disabled' : ''}>
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>`;

    paginationEl.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page);
        renderGrid(list);
        window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
      });
    });
  }

  function renderGrid(list) {
    grid.innerHTML = '';

    if (list.length === 0) {
      const lang = getLang();
      grid.innerHTML = `<p style="color:var(--text-3);font-size:0.9rem;padding:48px 0;grid-column:1/-1;">${
        lang === 'es' ? 'Próximamente proyectos en esta categoría.' : 'Projects in this category coming soon.'
      }</p>`;
      paginationEl.innerHTML = '';
      return;
    }

    const page = list.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
    page.forEach((p, i) => {
      const card = buildCard(p);
      card.style.cssText = `opacity:0;transform:translateY(20px);transition:opacity 0.4s ease ${i * 80}ms,transform 0.4s ease ${i * 80}ms`;
      grid.appendChild(card);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }));
    });

    renderPagination(list);
  }

  function render(filter) {
    currentFilter = filter;
    currentPage   = 1;

    const list = filter === 'all'
      ? allProjects
      : allProjects.filter(p => p.category === filter);

    renderGrid(list);
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
