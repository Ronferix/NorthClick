/* ================================================
   NORTHCLICK — i18n (English primary / Spanish toggle)
   ================================================ */

const TRANSLATIONS = {
  en: {
    /* ── NAV ── */
    'nav.home':     'Home',
    'nav.services': 'Services',
    'nav.work':     'Our Work',
    'nav.contact':  'Contact',
    'nav.cta':      'Start a project',

    /* ── HOME HERO ── */
    'home.hero.tag':  'Professional web design',
    'home.hero.h1':   'Boost your business<br>in the <em>digital</em> world',
    'home.hero.sub':  'We build websites that connect your brand with real customers. More than a site — an operations center working for you 24/7.',
    'home.hero.btn1': '<i class="bi bi-grid-3x3-gap-fill"></i>&nbsp; View services',
    'home.hero.btn2': 'Our work &nbsp;<i class="bi bi-arrow-right"></i>',
    'home.card1.title': 'Online presence',
    'home.card1.desc':  'Your brand available to any customer, at any time, from anywhere in the world.',
    'home.card2.title': 'Client–business relationship',
    'home.card2.desc':  'Forms, directories and contact channels that build trust from the first click.',
    'home.card3.title': 'Real growth',
    'home.card3.desc':  'An optimized site turns visits into clients and clients into brand advocates.',

    /* ── HOME MISSION ── */
    'home.mission.label': 'What we do',
    'home.mission.h2':    'We turn your business into a <span style="color:var(--blue)">digital experience</span>',
    'home.mission.p1':    'At NorthClick we believe every business, regardless of size, deserves a digital presence that matches its ambitions. A website is not just a showcase — it\'s the meeting point between your brand and the people who need it.',
    'home.mission.p2':    'We design every site with your customers in mind: what they need to know, how they want to reach you, and what motivates them to choose you. The result is a digital environment that speaks for your business even when you can\'t.',
    'home.mission.f1.title': 'Custom design',
    'home.mission.f1.desc':  'Every project is unique. We tailor the design to your brand identity and business goals.',
    'home.mission.f2.title': '100% responsive',
    'home.mission.f2.desc':  'Your site will look perfect on any device: desktop, tablet, or mobile.',
    'home.mission.f3.title': 'Optimized for results',
    'home.mission.f3.desc':  'Page speed, basic SEO and structure designed to convert visitors into customers.',

    /* ── HOME SERVICES PREVIEW ── */
    'home.svc.label': 'What we offer',
    'home.svc.h2':    'Solutions for every <span>stage</span> of your business',
    'home.svc.sub':   'From your first online presence to a full e-commerce platform, we have the right plan for you.',
    'home.svc.link':  'See details <i class="bi bi-arrow-right"></i>',
    'home.svc.soon':  'Coming soon',
    'home.svc1.title': 'Digital Presence',
    'home.svc1.desc':  'Your first step online. A professional landing page that presents your business, services and how to contact you — ready to go from day one.',
    'home.svc2.title': 'Professional Site',
    'home.svc2.desc':  'A multi-page site that tells your brand\'s full story. Services, gallery, blog and a robust contact system with an interactive location map.',
    'home.svc3.title': 'E-commerce',
    'home.svc3.desc':  'Take your business to the next level with a complete online store: product catalog, shopping cart and integrated payment gateway.',
    'home.svc.allBtn': 'View all plans & pricing <i class="bi bi-arrow-right"></i>',

    /* ── HOME WHY ── */
    'home.why.label': 'Why your digital presence matters',
    'home.why.h2':    'Why does your business <span style="color:var(--blue)">need</span> a website?',
    'home.why.sub':   'In a world where every search starts on Google, not being online is like not existing to your potential customers.',
    'home.why1.title': 'Your business open 24/7',
    'home.why1.desc':  'A website works for you around the clock. Customers anywhere can learn about your business, browse your services and reach out — even while you sleep.',
    'home.why2.title': 'Credibility & professional trust',
    'home.why2.desc':  '75% of consumers judge a business\'s credibility by its website. A polished digital presence signals professionalism before the first real interaction.',
    'home.why3.title': 'Direct contact, no middlemen',
    'home.why3.desc':  'Contact forms, interactive maps, phone numbers and social media — all in one place. Your client finds you and reaches out without friction.',
    'home.why4.title': 'Your best marketing tool',
    'home.why4.desc':  'Unlike social media, your website is yours. You control the message, the design and the experience — no algorithms, no paid reach required.',

    /* ── HOME WORK TEASER ── */
    'workTeaser.eyebrow': 'See what we build',
    'workTeaser.h2':      'Every project tells a story.<br>Come read ours.',
    'workTeaser.body':    'We\'re a young studio with a clear goal: build websites that actually work for the businesses behind them. Take a look at what we\'ve been crafting — and imagine what we could create together.',
    'workTeaser.cta':     'Explore our work &nbsp;→',
    'workTeaser.b1':      'Custom design, no templates',
    'workTeaser.b2':      'Fast delivery, real results',
    'workTeaser.b3':      'Close collaboration, always',
    'workTeaser.b4':      'Transparent process, no surprises',

    /* ── HOME CTA ── */
    'home.cta.h2':   'Ready to take the next step?',
    'home.cta.sub':  'Tell us about your business and we\'ll help you find the perfect digital solution for your needs and budget.',
    'home.cta.btn1': '<i class="bi bi-chat-dots-fill"></i>&nbsp; Talk to us',
    'home.cta.btn2': 'View pricing &nbsp;<i class="bi bi-arrow-right"></i>',

    /* ── SERVICES PAGE ── */
    'cat.hero.label': 'Services & pricing',
    'cat.hero.h1':    'Our Services',
    'cat.hero.sub':   'Clear plans, no fine print. Pick the one that fits, or tell us your idea and we\'ll build it together.',
    'cat.breadcrumb': 'Services',
    'cat.tabs.static':   'Static Websites',
    'cat.tabs.redesign': 'Redesign & Updates',
    'cat.tabs.seo':      'SEO & Performance',
    'cat.tabs.addons':   'Add-ons & Extras',
    'cat.th.service':  'Service',
    'cat.th.includes': 'Includes',
    'cat.th.price':    'Price (USD)',
    'cat.th.time':     'Est. Time',

    /* ── SERVICES TABLE CONTENT ── */
    'cat.static.intro': 'Brand-new websites built from scratch.',

    'cat.s1.name': 'Landing page',        'cat.s1.inc': '1-page, hero + sections + contact form',                         'cat.s1.price': '$300 – $600',    'cat.s1.time': '3 – 5 days',
    'cat.s2.name': 'Brochure site',       'cat.s2.inc': '3–5 pages, responsive, nav, contact',                             'cat.s2.price': '$500 – $1,000',  'cat.s2.time': '1 – 2 weeks',
    'cat.s3.name': 'Portfolio site',      'cat.s3.inc': '5–8 pages, gallery, about, contact',                              'cat.s3.price': '$600 – $1,200',  'cat.s3.time': '1 – 2 weeks',
    'cat.s4.name': 'Restaurant / Local',  'cat.s4.inc': 'Menu, hours, map, reservations link',                             'cat.s4.price': '$500 – $900',    'cat.s4.time': '1 – 2 weeks',
    'cat.s5.name': 'Blog setup',          'cat.s5.inc': 'Static blog, 5–10 posts, basic SEO',                              'cat.s5.price': '$400 – $800',    'cat.s5.time': '1 week',

    'cat.redesign.intro': 'Updates and improvements for existing websites.',
    'cat.r1.name': 'Visual redesign',     'cat.r1.inc': 'New styles / layout, same content',                               'cat.r1.price': '$300 – $700',    'cat.r1.time': '3 – 7 days',
    'cat.r2.name': 'Responsive fix',      'cat.r2.inc': 'Mobile-friendly update for existing site',                        'cat.r2.price': '$150 – $350',    'cat.r2.time': '1 – 3 days',
    'cat.r3.name': 'Content update',      'cat.r3.inc': 'Text / image changes, page additions',                            'cat.r3.price': '$80 – $200',     'cat.r3.time': '1 – 2 days',
    'cat.r4.name': 'Bug fixes',           'cat.r4.inc': 'Layout issues, broken links, JS errors',                          'cat.r4.price': '$50 – $150',     'cat.r4.time': 'Hours',

    'cat.seo.intro': 'Improve your site\'s visibility and speed.',
    'cat.e1.name': 'Basic SEO setup',     'cat.e1.inc': 'Meta tags, sitemap, robots.txt, alt text',                        'cat.e1.price': '$150 – $300',    'cat.e1.time': '1 – 2 days',
    'cat.e2.name': 'Speed optimization',  'cat.e2.inc': 'Image compress, caching, code cleanup',                           'cat.e2.price': '$150 – $350',    'cat.e2.time': '1 – 3 days',
    'cat.e3.name': 'SEO audit',           'cat.e3.inc': 'Report of issues + recommendations',                              'cat.e3.price': '$100 – $200',    'cat.e3.time': '1 – 2 days',

    'cat.addons.intro': 'Enhance any plan with these extras.',
    'cat.a1.name': 'Multilingual (i18n)',  'cat.a1.inc': '2–3 languages, content switching',                               'cat.a1.price': '$200 – $400',    'cat.a1.time': '2 – 4 days',
    'cat.a2.name': 'Contact form',         'cat.a2.inc': 'Functional form with email integration',                         'cat.a2.price': '$80 – $180',     'cat.a2.time': '1 day',
    'cat.a3.name': 'Google Analytics',     'cat.a3.inc': 'GA4 setup + basic event tracking',                               'cat.a3.price': '$60 – $120',     'cat.a3.time': 'Hours',
    'cat.a4.name': 'Map integration',      'cat.a4.inc': 'Embed interactive map (Leaflet / GMaps)',                        'cat.a4.price': '$60 – $120',     'cat.a4.time': 'Hours',
    'cat.a5.name': 'WhatsApp button',      'cat.a5.inc': 'Floating button with custom message',                            'cat.a5.price': '$30 – $60',      'cat.a5.time': 'Hours',
    'cat.a6.name': 'Social media icons',   'cat.a6.inc': 'Linked icons in header / footer',                                'cat.a6.price': '$30 – $60',      'cat.a6.time': 'Hours',
    'cat.a7.name': 'Accessibility (WCAG)', 'cat.a7.inc': 'WCAG 2.1 AA compliance audit + fixes',                          'cat.a7.price': 'Quote on req.',  'cat.a7.time': 'Varies',

    /* ── PRICING NOTES ── */
    'cat.notes.label': 'Important',
    'cat.notes.h2':    'Notes on Pricing',
    'cat.notes.n1':    '<strong>Lower range</strong> — client provides a design file (Figma, XD, or template). Design time is significantly reduced.',
    'cat.notes.n2':    '<strong>Upper range</strong> — design created from scratch (unique graphics, animations, or full branding).',
    'cat.notes.n3':    'Hourly rate of <strong>$40/hr</strong> available for work that doesn\'t fit a defined scope.',
    'cat.notes.n4':    'All sites are built mobile-responsive and cross-browser compatible unless otherwise agreed.',
    'cat.notes.n5':    'Prices do <strong>not</strong> include copywriting, photography, or stock image licensing.',
    'cat.notes.n6':    'Web accessibility (WCAG 2.1 AA) available as an add-on — ask for a quote.',

    /* ── TERMS OF SERVICE ── */
    'cat.tos.label': 'Legal',
    'cat.tos.h2':    'Terms of Service',
    'cat.tos.th.term':   'Term',
    'cat.tos.th.detail': 'Detail',
    'cat.tos.payment':     'Payment',
    'cat.tos.payment.d':   '50% upfront to start, 50% on delivery. Accepted via bank transfer, PayPal, or Stripe.',
    'cat.tos.late':        'Late payment',
    'cat.tos.late.d':      'If the final balance is not settled within 7 business days of delivery, a 5% weekly fee applies to the outstanding amount.',
    'cat.tos.revisions':   'Revisions',
    'cat.tos.revisions.d': 'Up to 2 rounds of revisions included. One round = one consolidated list of changes delivered in a single message. Additional rounds billed at $40/hr.',
    'cat.tos.scope':       'Scope',
    'cat.tos.scope.d':     'Any features not listed above are considered separate projects with their own quote.',
    'cat.tos.timeline':    'Timeline',
    'cat.tos.timeline.d':  'Estimates assume prompt feedback (within 48 hrs). Delays on the client\'s side may extend delivery.',
    'cat.tos.ownership':   'Ownership',
    'cat.tos.ownership.d': 'Full rights transferred to client upon final payment.',
    'cat.tos.hosting':     'Hosting',
    'cat.tos.hosting.d':   'Not included. Client is responsible for domain and hosting.',
    'cat.tos.maintenance': 'Maintenance',
    'cat.tos.maintenance.d': 'Available at $40/hr or as a monthly retainer — ask for details.',
    'cat.tos.methods':     'Payment methods',
    'cat.tos.methods.d':   'Bank transfer (ACH/wire), PayPal, Stripe (credit/debit card).',

    /* ── OUR WORK ── */
    'work.hero.label': 'Portfolio',
    'work.hero.h1':    'Our Work',
    'work.hero.sub':   'Every project tells a story. See them live — real pages for real businesses that took the digital leap.',
    'work.breadcrumb': 'Our Work',
    'work.filter.all':        'All',
    'work.filter.landing':    'Landing Page',
    'work.filter.profesional':'Professional Site',
    'work.filter.ecommerce':  'E-commerce',
    'work.cta.empty.h3':   'Your project could be here',
    'work.cta.empty.p':    'We\'re constantly growing. Every new project is a story we\'re proud to share.',
    'work.cta.empty.btn':  'Start my project',
    'work.process.label':  'How we work',
    'work.process.h2':     'From concept to <span style="color:var(--blue)">launch</span>',
    'work.process.sub':    'A clear, transparent process so you always know where we stand.',
    'work.step1.title': 'Initial consultation',
    'work.step1.desc':  'You tell us about your business, goals and vision. We define the project scope together.',
    'work.step2.title': 'Design & proposal',
    'work.step2.desc':  'We prepare a visual and technical proposal. We review together until the design reflects your brand exactly.',
    'work.step3.title': 'Development',
    'work.step3.desc':  'We build the site with periodic updates. You see progress in real time and can weigh in at every stage.',
    'work.step4.title': 'Launch',
    'work.step4.desc':  'Final review, cross-device testing and publish. Your site is live and ready for the world.',
    'work.cta.h2':   'Does your business deserve a site like this?',
    'work.cta.sub':  'Let\'s make it happen. Tell us your idea and we\'ll build your digital presence together.',
    'work.cta.btn1': '<i class="bi bi-chat-dots-fill"></i>&nbsp; Start a conversation',
    'work.cta.btn2': 'View pricing &nbsp;<i class="bi bi-arrow-right"></i>',

    /* ── CONTACT ── */
    'contact.hero.label': 'Let\'s talk',
    'contact.hero.h1':    'Start your project',
    'contact.hero.sub':   'Tell us about your business and what you need. We\'ll get back to you in under 24 hours with a free, no-commitment consultation.',
    'contact.breadcrumb': 'Contact',
    'contact.info.label': 'How to find us',
    'contact.info.h2':    'We\'re ready<br>to listen',
    'contact.info.p':     'Whether you have everything figured out or you\'re just exploring the idea, a 15-minute conversation can be the starting point of something great.',
    'contact.info.email': 'Email',
    'contact.info.wa':    'WhatsApp',
    'contact.info.hours': 'Response time',
    'contact.info.hours.v': 'Less than 24 business hours',
    'contact.info.loc':   'Location',
    'contact.info.loc.v': 'Mexico — we serve clients nationwide',
    'contact.social.label': 'Follow us',
    'contact.form.h3':    'Send us a message',
    'contact.form.sub':   'All fields are required unless noted otherwise.',
    'contact.form.name':  'Full name',
    'contact.form.email': 'Email address',
    'contact.form.phone': 'Phone',
    'contact.form.phone.opt': '(optional)',
    'contact.form.plan':  'Plan of interest',
    'contact.form.plan.placeholder': 'Select a plan',
    'contact.form.plan.o1': 'Digital Presence — from $300 USD',
    'contact.form.plan.o2': 'Brochure / Professional Site — from $500 USD',
    'contact.form.plan.o3': 'E-commerce / Full Site — from $600 USD',
    'contact.form.plan.o4': 'Redesign or update — from $80 USD',
    'contact.form.plan.o5': 'SEO / Performance — from $100 USD',
    'contact.form.plan.o6': 'Custom project — let\'s talk',
    'contact.form.plan.o7': 'Not sure yet',
    'contact.form.biz':   'What does your business do?',
    'contact.form.biz.ph':'e.g. Italian restaurant in Mexico City',
    'contact.form.msg':   'Tell us about your project',
    'contact.form.msg.ph':'What do you need? Do you have a deadline? Do you already have a logo or images? Any detail helps us prepare a more precise proposal.',
    'contact.form.btn':   '<i class="bi bi-send-fill"></i>&nbsp; Send message',
    'contact.form.privacy':'By submitting this form you agree to allow us to contact you to respond to your inquiry.',
    'contact.success.h3': 'Message sent!',
    'contact.success.p':  'Thanks for reaching out. We\'ll reply within 24 business hours with the next steps for your project.',
    'contact.success.btn':'Back to home',
    'contact.faq.label': 'FAQ',
    'contact.faq.h2':    'What people ask us <span style="color:var(--blue)">most</span>',
    'contact.faq.q1': 'How long does my site take to be ready?',
    'contact.faq.a1': 'It depends on the plan. A landing page takes roughly 3–5 business days; a brochure site 1–2 weeks; and an e-commerce project around 3 weeks. Timelines begin once we have all your materials (texts, logo, images).',
    'contact.faq.q2': 'Do I need a logo or images before we start?',
    'contact.faq.a2': 'Not necessarily. We can guide you toward free professional image resources (like Unsplash or Pexels) and work with whatever you have. If you need a logo designed, we can quote that separately.',
    'contact.faq.q3': 'Who handles hosting and the domain?',
    'contact.faq.a3': 'Domain and hosting costs are not included in the plans (they vary by provider and domain name). We\'ll help you choose the best option for your budget and walk you through setup at no extra charge.',
    'contact.faq.q4': 'Can I update my site\'s content later?',
    'contact.faq.a4': 'Yes. We deliver the full source code and, on request, can set up a CMS so you can update text and images without touching code. We also offer monthly maintenance plans.',
    'contact.faq.q5': 'What are the payment terms?',
    'contact.faq.a5': '50% upfront to start, 50% on delivery. We accept bank transfer, PayPal, and Stripe.',

    /* ── FOOTER ── */
    'footer.tagline':    'We craft professional digital presences that drive real businesses. Your online success is our mission.',
    'footer.nav.label':  'Navigation',
    'footer.svc.label':  'Services',
    'footer.svc.1': 'Digital Presence',
    'footer.svc.2': 'Professional Site',
    'footer.svc.3': 'E-commerce',
    'footer.svc.4': 'Custom Project',
    'footer.contact.label': 'Contact',
    'footer.copyright':  '&copy; 2025 NorthClick. All rights reserved.',
  },

  es: {
    /* ── NAV ── */
    'nav.home':     'Inicio',
    'nav.services': 'Servicios',
    'nav.work':     'Nuestro Trabajo',
    'nav.contact':  'Contacto',
    'nav.cta':      'Iniciar proyecto',

    /* ── HOME HERO ── */
    'home.hero.tag':  'Diseño web profesional',
    'home.hero.h1':   'Impulsa tu negocio<br>en el mundo <em>digital</em>',
    'home.hero.sub':  'Creamos páginas web que conectan tu marca con clientes reales. Más que un sitio — un centro de operaciones que trabaja por ti las 24 horas.',
    'home.hero.btn1': '<i class="bi bi-grid-3x3-gap-fill"></i>&nbsp; Ver servicios',
    'home.hero.btn2': 'Nuestro trabajo &nbsp;<i class="bi bi-arrow-right"></i>',
    'home.card1.title': 'Presencia en línea',
    'home.card1.desc':  'Tu marca disponible para cualquier cliente, en cualquier momento y desde cualquier lugar.',
    'home.card2.title': 'Relación cliente-negocio',
    'home.card2.desc':  'Formularios, directorios y canales de contacto que generan confianza desde el primer clic.',
    'home.card3.title': 'Crecimiento real',
    'home.card3.desc':  'Un sitio optimizado convierte visitas en clientes y clientes en promotores de tu marca.',

    /* ── HOME MISSION ── */
    'home.mission.label': '¿Qué hacemos?',
    'home.mission.h2':    'Convertimos tu negocio en una <span style="color:var(--blue)">experiencia digital</span>',
    'home.mission.p1':    'En NorthClick creemos que toda empresa, sin importar su tamaño, merece una presencia digital a la altura de sus aspiraciones. Una página web no es solo un escaparate — es el punto de encuentro entre tu marca y las personas que la necesitan.',
    'home.mission.p2':    'Diseñamos cada sitio pensando en tus clientes: qué necesitan saber, cómo quieren comunicarse contigo y qué los motiva a elegirte. El resultado es un entorno digital que habla por tu negocio incluso cuando tú no puedes.',
    'home.mission.f1.title': 'Diseño a medida',
    'home.mission.f1.desc':  'Cada proyecto es único. Adaptamos el diseño a la identidad y objetivos de tu negocio.',
    'home.mission.f2.title': '100% responsivo',
    'home.mission.f2.desc':  'Tu sitio se verá perfecto en cualquier dispositivo: computadora, tablet o celular.',
    'home.mission.f3.title': 'Optimizado para resultados',
    'home.mission.f3.desc':  'Velocidad de carga, SEO básico y estructura pensada para convertir visitas en clientes.',

    /* ── HOME SERVICES PREVIEW ── */
    'home.svc.label': 'Lo que ofrecemos',
    'home.svc.h2':    'Soluciones para cada <span>etapa</span> de tu negocio',
    'home.svc.sub':   'Desde tu primera presencia en línea hasta una plataforma de ventas completa, tenemos el plan para ti.',
    'home.svc.link':  'Ver detalles <i class="bi bi-arrow-right"></i>',
    'home.svc.soon':  'Próximamente',
    'home.svc1.title': 'Presencia Digital',
    'home.svc1.desc':  'Tu primer paso en el mundo online. Una landing page profesional que presenta tu negocio, tus servicios y cómo contactarte — lista para funcionar desde el día uno.',
    'home.svc2.title': 'Sitio Profesional',
    'home.svc2.desc':  'Un sitio multipágina que cuenta la historia completa de tu marca. Servicios, galería, blog y un sistema de contacto robusto con mapa interactivo de tu ubicación.',
    'home.svc3.title': 'E-commerce',
    'home.svc3.desc':  'Lleva tu negocio al siguiente nivel con una tienda en línea completa: catálogo de productos, carrito de compras y pasarela de pagos integrada.',
    'home.svc.allBtn': 'Ver todos los planes y precios <i class="bi bi-arrow-right"></i>',

    /* ── HOME WHY ── */
    'home.why.label': 'Por qué importa tu presencia digital',
    'home.why.h2':    '¿Por qué tu negocio <span style="color:var(--blue)">necesita</span> una página web?',
    'home.why.sub':   'En un mundo donde la primera búsqueda ocurre en Google, no estar en línea es como no existir para tus clientes potenciales.',
    'home.why1.title': 'Tu negocio abierto las 24 horas',
    'home.why1.desc':  'Una página web trabaja por ti en todo momento. Clientes de cualquier parte pueden conocer tu negocio, revisar tus servicios y ponerse en contacto — incluso cuando duermes.',
    'home.why2.title': 'Credibilidad y confianza profesional',
    'home.why2.desc':  'El 75% de los consumidores juzga la credibilidad de un negocio por su sitio web. Una presencia digital cuidada transmite seriedad y genera confianza antes del primer contacto real.',
    'home.why3.title': 'Contacto directo sin intermediarios',
    'home.why3.desc':  'Formularios de contacto, mapas interactivos, números de teléfono y redes sociales en un solo lugar. Tu cliente te encuentra y se comunica contigo sin fricciones.',
    'home.why4.title': 'Tu mejor herramienta de marketing',
    'home.why4.desc':  'A diferencia de las redes sociales, tu sitio web es tuyo. Controlas el mensaje, el diseño y la experiencia — sin depender de algoritmos ni pagar por alcance.',

    /* ── HOME WORK TEASER ── */
    'workTeaser.eyebrow': 'Mira lo que construimos',
    'workTeaser.h2':      'Cada proyecto cuenta una historia.<br>Ven a leer la nuestra.',
    'workTeaser.body':    'Somos un estudio joven con un objetivo claro: crear sitios web que realmente funcionen para los negocios que hay detrás. Échale un vistazo a lo que hemos estado desarrollando — e imagina lo que podríamos crear juntos.',
    'workTeaser.cta':     'Explorar nuestro trabajo &nbsp;→',
    'workTeaser.b1':      'Diseño personalizado, sin plantillas',
    'workTeaser.b2':      'Entregas rápidas, resultados reales',
    'workTeaser.b3':      'Colaboración cercana, siempre',
    'workTeaser.b4':      'Proceso transparente, sin sorpresas',

    /* ── HOME CTA ── */
    'home.cta.h2':   '¿Listo para dar el siguiente paso?',
    'home.cta.sub':  'Cuéntanos sobre tu negocio y te ayudamos a encontrar la solución digital perfecta para tus necesidades y presupuesto.',
    'home.cta.btn1': '<i class="bi bi-chat-dots-fill"></i>&nbsp; Hablar con nosotros',
    'home.cta.btn2': 'Ver precios &nbsp;<i class="bi bi-arrow-right"></i>',

    /* ── SERVICES PAGE ── */
    'cat.hero.label': 'Servicios y precios',
    'cat.hero.h1':    'Nuestros Servicios',
    'cat.hero.sub':   'Planes claros, sin letra pequeña. Elige el que mejor se adapte a tus necesidades o cuéntanos tu idea y lo construimos juntos.',
    'cat.breadcrumb': 'Servicios',
    'cat.tabs.static':   'Sitios Web',
    'cat.tabs.redesign': 'Rediseño y Actualizaciones',
    'cat.tabs.seo':      'SEO y Rendimiento',
    'cat.tabs.addons':   'Extras y Complementos',
    'cat.th.service':  'Servicio',
    'cat.th.includes': 'Incluye',
    'cat.th.price':    'Precio (USD)',
    'cat.th.time':     'Tiempo',

    'cat.static.intro': 'Sitios web construidos desde cero.',
    'cat.s1.name': 'Landing page',           'cat.s1.inc': '1 página, hero + secciones + formulario de contacto',               'cat.s1.price': '$300 – $600',    'cat.s1.time': '3 – 5 días',
    'cat.s2.name': 'Sitio brochure',          'cat.s2.inc': '3–5 páginas, responsivo, nav, contacto',                           'cat.s2.price': '$500 – $1,000',  'cat.s2.time': '1 – 2 semanas',
    'cat.s3.name': 'Sitio portafolio',        'cat.s3.inc': '5–8 páginas, galería, about, contacto',                            'cat.s3.price': '$600 – $1,200',  'cat.s3.time': '1 – 2 semanas',
    'cat.s4.name': 'Restaurante / Local',     'cat.s4.inc': 'Menú, horarios, mapa, link de reservaciones',                      'cat.s4.price': '$500 – $900',    'cat.s4.time': '1 – 2 semanas',
    'cat.s5.name': 'Blog',                    'cat.s5.inc': 'Blog estático, 5–10 posts, SEO básico',                            'cat.s5.price': '$400 – $800',    'cat.s5.time': '1 semana',

    'cat.redesign.intro': 'Mejoras para sitios web existentes.',
    'cat.r1.name': 'Rediseño visual',         'cat.r1.inc': 'Nuevos estilos / layout, mismo contenido',                        'cat.r1.price': '$300 – $700',    'cat.r1.time': '3 – 7 días',
    'cat.r2.name': 'Corrección responsiva',   'cat.r2.inc': 'Actualización mobile-friendly para sitio existente',               'cat.r2.price': '$150 – $350',    'cat.r2.time': '1 – 3 días',
    'cat.r3.name': 'Actualización de contenido','cat.r3.inc': 'Cambios de texto / imagen, adición de páginas',                 'cat.r3.price': '$80 – $200',     'cat.r3.time': '1 – 2 días',
    'cat.r4.name': 'Corrección de errores',   'cat.r4.inc': 'Problemas de layout, links rotos, errores JS',                    'cat.r4.price': '$50 – $150',     'cat.r4.time': 'Horas',

    'cat.seo.intro': 'Mejora la visibilidad y velocidad de tu sitio.',
    'cat.e1.name': 'SEO básico',              'cat.e1.inc': 'Meta tags, sitemap, robots.txt, alt text',                        'cat.e1.price': '$150 – $300',    'cat.e1.time': '1 – 2 días',
    'cat.e2.name': 'Optimización de velocidad','cat.e2.inc': 'Compresión de imágenes, caché, limpieza de código',               'cat.e2.price': '$150 – $350',    'cat.e2.time': '1 – 3 días',
    'cat.e3.name': 'Auditoría SEO',           'cat.e3.inc': 'Reporte de problemas + recomendaciones',                          'cat.e3.price': '$100 – $200',    'cat.e3.time': '1 – 2 días',

    'cat.addons.intro': 'Complementa cualquier plan con estas opciones.',
    'cat.a1.name': 'Multiidioma (i18n)',      'cat.a1.inc': '2–3 idiomas, cambio de contenido',                                'cat.a1.price': '$200 – $400',    'cat.a1.time': '2 – 4 días',
    'cat.a2.name': 'Formulario de contacto',  'cat.a2.inc': 'Formulario funcional con integración de email',                   'cat.a2.price': '$80 – $180',     'cat.a2.time': '1 día',
    'cat.a3.name': 'Google Analytics',        'cat.a3.inc': 'Configuración GA4 + seguimiento básico de eventos',               'cat.a3.price': '$60 – $120',     'cat.a3.time': 'Horas',
    'cat.a4.name': 'Integración de mapa',     'cat.a4.inc': 'Mapa interactivo (Leaflet / GMaps)',                               'cat.a4.price': '$60 – $120',     'cat.a4.time': 'Horas',
    'cat.a5.name': 'Botón de WhatsApp',       'cat.a5.inc': 'Botón flotante con mensaje personalizado',                        'cat.a5.price': '$30 – $60',      'cat.a5.time': 'Horas',
    'cat.a6.name': 'Iconos de redes sociales','cat.a6.inc': 'Iconos con enlace en header / footer',                            'cat.a6.price': '$30 – $60',      'cat.a6.time': 'Horas',
    'cat.a7.name': 'Accesibilidad (WCAG)',    'cat.a7.inc': 'Auditoría + correcciones WCAG 2.1 AA',                            'cat.a7.price': 'Cotizar',        'cat.a7.time': 'Variable',

    'cat.notes.label': 'Importante',
    'cat.notes.h2':    'Notas sobre Precios',
    'cat.notes.n1':    '<strong>Rango inferior</strong> — el cliente proporciona un archivo de diseño (Figma, XD o plantilla). El tiempo de diseño se reduce significativamente.',
    'cat.notes.n2':    '<strong>Rango superior</strong> — diseño creado desde cero (gráficos únicos, animaciones o branding completo).',
    'cat.notes.n3':    'Tarifa por hora de <strong>$40/hr</strong> disponible para trabajos que no encajan en un alcance definido.',
    'cat.notes.n4':    'Todos los sitios se construyen responsivos y compatibles con múltiples navegadores, salvo acuerdo contrario.',
    'cat.notes.n5':    'Los precios <strong>no</strong> incluyen redacción, fotografía ni licencias de imágenes de stock.',
    'cat.notes.n6':    'Accesibilidad web (WCAG 2.1 AA) disponible como complemento — solicitar cotización.',

    'cat.tos.label': 'Legal',
    'cat.tos.h2':    'Términos de Servicio',
    'cat.tos.th.term':   'Término',
    'cat.tos.th.detail': 'Detalle',
    'cat.tos.payment':     'Pago',
    'cat.tos.payment.d':   '50% por adelantado al iniciar, 50% a la entrega. Se acepta transferencia bancaria, PayPal o Stripe.',
    'cat.tos.late':        'Pago tardío',
    'cat.tos.late.d':      'Si el saldo final no se liquida en 7 días hábiles tras la entrega, se aplica un cargo del 5% semanal sobre el monto pendiente.',
    'cat.tos.revisions':   'Revisiones',
    'cat.tos.revisions.d': 'Se incluyen hasta 2 rondas de revisiones. Una ronda = una lista consolidada de cambios entregada en un solo mensaje. Rondas adicionales se cobran a $40/hr.',
    'cat.tos.scope':       'Alcance',
    'cat.tos.scope.d':     'Cualquier función no listada anteriormente se considera un proyecto separado con su propia cotización.',
    'cat.tos.timeline':    'Tiempos',
    'cat.tos.timeline.d':  'Los estimados asumen retroalimentación oportuna (dentro de 48 hrs). Retrasos del lado del cliente pueden extender la entrega.',
    'cat.tos.ownership':   'Propiedad',
    'cat.tos.ownership.d': 'Todos los derechos se transfieren al cliente al recibir el pago final.',
    'cat.tos.hosting':     'Hosting',
    'cat.tos.hosting.d':   'No incluido. El cliente es responsable del dominio y el hosting.',
    'cat.tos.maintenance': 'Mantenimiento',
    'cat.tos.maintenance.d': 'Disponible a $40/hr o como retención mensual — consultar detalles.',
    'cat.tos.methods':     'Métodos de pago',
    'cat.tos.methods.d':   'Transferencia bancaria, PayPal, Stripe (tarjeta de crédito/débito).',

    /* ── OUR WORK ── */
    'work.hero.label': 'Portafolio',
    'work.hero.h1':    'Nuestro Trabajo',
    'work.hero.sub':   'Cada proyecto cuenta una historia. Aquí puedes verlos en vivo — páginas reales para negocios reales.',
    'work.breadcrumb': 'Nuestro Trabajo',
    'work.filter.all':        'Todos',
    'work.filter.landing':    'Landing Page',
    'work.filter.profesional':'Sitio Profesional',
    'work.filter.ecommerce':  'E-commerce',
    'work.cta.empty.h3':   'Tu proyecto podría estar aquí',
    'work.cta.empty.p':    'Estamos en constante crecimiento. Cada proyecto nuevo es una historia que nos enorgullece compartir.',
    'work.cta.empty.btn':  'Empezar mi proyecto',
    'work.process.label':  '¿Cómo trabajamos?',
    'work.process.h2':     'Del concepto al <span style="color:var(--blue)">lanzamiento</span>',
    'work.process.sub':    'Un proceso claro y transparente para que siempre sepas en qué punto estamos.',
    'work.step1.title': 'Consulta inicial',
    'work.step1.desc':  'Nos cuentas sobre tu negocio, tus objetivos y tu visión. Definimos juntos el alcance del proyecto.',
    'work.step2.title': 'Diseño y propuesta',
    'work.step2.desc':  'Preparamos una propuesta visual y técnica. Revisamos juntos hasta que el diseño refleje exactamente tu marca.',
    'work.step3.title': 'Desarrollo',
    'work.step3.desc':  'Construimos el sitio con actualizaciones periódicas. Tú ves el avance en tiempo real y puedes opinar en cada etapa.',
    'work.step4.title': 'Lanzamiento',
    'work.step4.desc':  'Revisión final, pruebas en todos los dispositivos y publicación. Tu sitio está en línea y listo para el mundo.',
    'work.cta.h2':   '¿Tu negocio merece un sitio así?',
    'work.cta.sub':  'Hagámoslo realidad. Cuéntanos tu idea y construimos juntos tu presencia digital.',
    'work.cta.btn1': '<i class="bi bi-chat-dots-fill"></i>&nbsp; Iniciar conversación',
    'work.cta.btn2': 'Ver precios &nbsp;<i class="bi bi-arrow-right"></i>',

    /* ── CONTACT ── */
    'contact.hero.label': 'Hablemos',
    'contact.hero.h1':    'Inicia tu proyecto',
    'contact.hero.sub':   'Cuéntanos sobre tu negocio y lo que necesitas. Te respondemos en menos de 24 horas con una consulta gratuita y sin compromiso.',
    'contact.breadcrumb': 'Contacto',
    'contact.info.label': '¿Cómo encontrarnos?',
    'contact.info.h2':    'Estamos listos<br>para escucharte',
    'contact.info.p':     'Ya sea que tengas todo claro o que apenas estés explorando la idea, una conversación de 15 minutos puede ser el punto de partida de algo grande.',
    'contact.info.email': 'Correo electrónico',
    'contact.info.wa':    'WhatsApp',
    'contact.info.hours': 'Tiempo de respuesta',
    'contact.info.hours.v': 'Menos de 24 horas hábiles',
    'contact.info.loc':   'Ubicación',
    'contact.info.loc.v': 'México — atendemos clientes en toda la república',
    'contact.social.label': 'Síguenos',
    'contact.form.h3':    'Envíanos un mensaje',
    'contact.form.sub':   'Todos los campos son obligatorios a menos que se indique lo contrario.',
    'contact.form.name':  'Nombre completo',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Teléfono',
    'contact.form.phone.opt': '(opcional)',
    'contact.form.plan':  'Plan de interés',
    'contact.form.plan.placeholder': 'Selecciona un plan',
    'contact.form.plan.o1': 'Presencia Digital — desde $300 USD',
    'contact.form.plan.o2': 'Brochure / Sitio Profesional — desde $500 USD',
    'contact.form.plan.o3': 'E-commerce / Sitio Completo — desde $600 USD',
    'contact.form.plan.o4': 'Rediseño o actualización — desde $80 USD',
    'contact.form.plan.o5': 'SEO / Rendimiento — desde $100 USD',
    'contact.form.plan.o6': 'Proyecto personalizado — hablemos',
    'contact.form.plan.o7': 'Aún no lo sé',
    'contact.form.biz':   '¿A qué se dedica tu negocio?',
    'contact.form.biz.ph':'Ej: Restaurante de comida italiana en CDMX',
    'contact.form.msg':   'Cuéntanos sobre tu proyecto',
    'contact.form.msg.ph':'¿Qué necesitas? ¿Tienes una fecha límite? ¿Ya tienes logo o imágenes? Cualquier detalle nos ayuda a preparar una propuesta más precisa.',
    'contact.form.btn':   '<i class="bi bi-send-fill"></i>&nbsp; Enviar mensaje',
    'contact.form.privacy':'Al enviar este formulario aceptas que nos comuniquemos contigo para responder tu consulta.',
    'contact.success.h3': '¡Mensaje enviado!',
    'contact.success.p':  'Gracias por contactarnos. Te responderemos en menos de 24 horas hábiles con los próximos pasos para tu proyecto.',
    'contact.success.btn':'Volver al inicio',
    'contact.faq.label': 'Preguntas frecuentes',
    'contact.faq.h2':    'Lo que más nos <span style="color:var(--blue)">preguntan</span>',
    'contact.faq.q1': '¿Cuánto tiempo tarda mi sitio en estar listo?',
    'contact.faq.a1': 'Depende del plan. Una landing page tarda aproximadamente 3–5 días hábiles; un sitio brochure 1–2 semanas; y un e-commerce alrededor de 3 semanas. Los plazos comienzan una vez que tenemos todos tus materiales (textos, logo, imágenes).',
    'contact.faq.q2': '¿Necesito tener un logo o imágenes para empezar?',
    'contact.faq.a2': 'No es indispensable. Podemos orientarte sobre recursos de imágenes profesionales gratuitas (como Unsplash o Pexels) y trabajar con lo que tengas disponible. Si necesitas diseño de logotipo, lo cotizamos por separado.',
    'contact.faq.q3': '¿Quién se encarga del hosting y el dominio?',
    'contact.faq.a3': 'El costo del dominio y hosting no está incluido en los planes. Te ayudamos a elegir la mejor opción según tu presupuesto y te acompañamos en el proceso de configuración sin costo adicional.',
    'contact.faq.q4': '¿Puedo actualizar el contenido de mi sitio después?',
    'contact.faq.a4': 'Sí. Te entregamos el código fuente completo y, si lo solicitas, podemos configurar un CMS para que actualices textos e imágenes sin necesidad de tocar código. También ofrecemos planes de mantenimiento mensual.',
    'contact.faq.q5': '¿Cuáles son las formas de pago?',
    'contact.faq.a5': '50% al inicio y 50% a la entrega. Aceptamos transferencia bancaria, PayPal y Stripe.',

    /* ── FOOTER ── */
    'footer.tagline':    'Creamos presencias digitales profesionales que impulsan negocios reales. Tu éxito en línea es nuestra misión.',
    'footer.nav.label':  'Navegación',
    'footer.svc.label':  'Servicios',
    'footer.svc.1': 'Presencia Digital',
    'footer.svc.2': 'Sitio Profesional',
    'footer.svc.3': 'E-commerce',
    'footer.svc.4': 'Proyecto a Medida',
    'footer.contact.label': 'Contacto',
    'footer.copyright':  '&copy; 2025 NorthClick. Todos los derechos reservados.',
  }
};

/* ── Language engine ── */
(function () {
  const DEFAULT_LANG = 'en';
  let currentLang = localStorage.getItem('nc-lang') || DEFAULT_LANG;

  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    /* sync toggle buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
    currentLang = lang;
    localStorage.setItem('nc-lang', lang);
    document.dispatchEvent(new CustomEvent('nc:langchange', { detail: { lang } }));
  }

  function init() {
    /* inject toggle into every nav */
    document.querySelectorAll('.nav__inner').forEach(navInner => {
      if (navInner.querySelector('.lang-toggle')) return;
      const toggle = document.createElement('div');
      toggle.className = 'lang-toggle';
      toggle.innerHTML = `
        <button class="lang-btn${currentLang === 'en' ? ' active' : ''}" data-lang="en">EN</button>
        <span class="lang-sep">|</span>
        <button class="lang-btn${currentLang === 'es' ? ' active' : ''}" data-lang="es">ES</button>
      `;
      /* insert before hamburger or CTA */
      const hamburger = navInner.querySelector('.nav__hamburger');
      navInner.insertBefore(toggle, hamburger || null);
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    applyLang(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
