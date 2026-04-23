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

  function buildCard(p) {
    const lang = getLang();
    const desc = lang === 'es' && p.descEs ? p.descEs : p.desc;
    const tags = lang === 'es' && p.tagsEs ? p.tagsEs : p.tags;

    const thumbInner = p.thumb
      ? `<img src="${p.thumb}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;">`
      : `<div style="width:100%;height:100%;background:${p.thumbGradient};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;">
           <i class="bi ${p.thumbIcon}" style="font-size:2.8rem;color:rgba(255,255,255,0.25);"></i>
           <span style="font-size:0.72rem;font-weight:700;color:rgba(255,255,255,0.3);letter-spacing:0.12em;text-transform:uppercase;">${tags[0] || ''}</span>
         </div>`;

    const tagsHTML = tags.map((t, i) =>
      `<span class="badge${i > 0 ? ' badge-gold' : ''}">${t}</span>`
    ).join('');

    const viewLabel = lang === 'es' ? 'Ver en vivo' : 'View live';
    const projectLabel = lang === 'es' ? 'Ver proyecto' : 'View project';

    const overlayBtn = p.liveUrl
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-card__overlay-btn">
           <i class="bi bi-box-arrow-up-right"></i> ${viewLabel}
         </a>`
      : '';

    const footerLink = p.liveUrl
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-card__link">
           ${projectLabel} <i class="bi bi-arrow-right"></i>
         </a>`
      : '';

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
      grid.innerHTML = `<p style="color:var(--text-3);font-size:0.9rem;padding:48px 0;grid-column:1/-1;">${lang === 'es' ? 'Próximamente proyectos en esta categoría.' : 'Projects in this category coming soon.'}</p>`;
      return;
    }

    list.forEach((p, i) => {
      const card = buildCard(p);
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`;
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

  /* Re-render when language switches so desc + tags update */
  document.addEventListener('nc:langchange', () => render(currentFilter));

  render('all');
})();
