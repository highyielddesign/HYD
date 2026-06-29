/* ==========================================================================
   High Yield Design — Engineering Consultancy Website
   JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ===== Data ===== */
  const services = [
    { icon: 'fa-cube', title: '3D CAD Modeling', desc: 'Precise parametric 3D models for components and assemblies using industry-leading CAD platforms.' },
    { icon: 'fa-gear', title: 'Mechanical Product Design', desc: 'End-to-end product development from concept sketches to production-ready designs.' },
    { icon: 'fa-industry', title: 'Machine Design', desc: 'Custom machinery design tailored to your production requirements and constraints.' },
    { icon: 'fa-gears', title: 'Industrial Equipment Design', desc: 'Robust equipment design for demanding industrial environments and applications.' },
    { icon: 'fa-robot', title: 'Automation Design', desc: 'Automated systems and mechanisms that improve efficiency and reduce manual labor.' },
    { icon: 'fa-layer-group', title: 'Sheet Metal Design', desc: 'Optimized sheet metal parts with proper bend allowances and flat pattern development.' },
    { icon: 'fa-toolbox', title: 'Jig & Fixture Design', desc: 'Custom jigs and fixtures that ensure precision and repeatability in manufacturing.' },
    { icon: 'fa-rotate', title: 'Reverse Engineering', desc: 'Recreate 3D models and drawings from existing physical parts using scanning and measurement.' },
    { icon: 'fa-puzzle-piece', title: 'Assembly Design', desc: 'Complex assembly modeling with proper mates, constraints, and interference detection.' },
    { icon: 'fa-file-lines', title: 'Technical Drawings', desc: 'Detailed engineering drawings following international drafting standards and best practices.' },
    { icon: 'fa-ruler-combined', title: 'GD&T Documentation', desc: 'Geometric Dimensioning and Tolerancing per ASME Y14.5 for precise manufacturing control.' },
    { icon: 'fa-clipboard-list', title: 'Manufacturing Drawings', desc: 'Production-ready drawings with all specifications needed for fabrication and machining.' },
    { icon: 'fa-list-check', title: 'BOM Preparation', desc: 'Complete Bill of Materials with part numbers, quantities, and specifications.' },
    { icon: 'fa-calculator', title: 'BOQ Preparation', desc: 'Bill of Quantities with detailed cost estimation for project planning and procurement.' },
    { icon: 'fa-microscope', title: 'DFM', desc: 'Design for Manufacturability analysis to optimize production efficiency and reduce costs.' },
    { icon: 'fa-screwdriver-wrench', title: 'DFA', desc: 'Design for Assembly optimization to minimize assembly time and complexity.' },
    { icon: 'fa-triangle-exclamation', title: 'DFMEA', desc: 'Design Failure Mode and Effects Analysis to identify and mitigate potential risks.' },
    { icon: 'fa-shield-halved', title: 'FMEA', desc: 'Failure Mode and Effects Analysis for robust and reliable engineering designs.' },
    { icon: 'fa-warehouse', title: 'Factory Layout Design', desc: 'Optimized factory floor layouts for maximum workflow efficiency and safety.' },
    { icon: 'fa-user-tie', title: 'Industrial Consultancy', desc: 'Expert engineering consultation to guide your projects from concept to production.' },
  ];

  const industries = [
    { icon: 'fa-car', name: 'Automotive' },
    { icon: 'fa-tractor', name: 'Agriculture' },
    { icon: 'fa-industry', name: 'Manufacturing' },
    { icon: 'fa-box', name: 'Packaging' },
    { icon: 'fa-flask', name: 'Chemical Plants' },
    { icon: 'fa-droplet', name: 'Water Treatment' },
    { icon: 'fa-truck-ramp-box', name: 'Material Handling' },
    { icon: 'fa-robot', name: 'Industrial Automation' },
    { icon: 'fa-truck-front', name: 'Heavy Machinery' },
    { icon: 'fa-fire', name: 'Steel Fabrication' },
  ];

  const expertise = [
    { icon: 'fa-cubes', name: 'Large Assemblies' },
    { icon: 'fa-gears', name: 'Industrial Machinery' },
    { icon: 'fa-arrows-turn-to-dots', name: 'Conveyor Systems' },
    { icon: 'fa-gear', name: 'Gearboxes' },
    { icon: 'fa-droplet', name: 'Hydraulic Systems' },
    { icon: 'fa-screwdriver-wrench', name: 'Machine Components' },
    { icon: 'fa-industry', name: 'Production Equipment' },
    { icon: 'fa-building', name: 'Structural Design' },
    { icon: 'fa-microchip', name: 'Manufacturing Engineering' },
    { icon: 'fa-coins', name: 'Cost Optimization' },
  ];

  const software = [
    { name: 'Creo', desc: 'Parametric 3D CAD', color: '#0057B8', initials: 'CR' },
    { name: 'SolidWorks', desc: '3D Mechanical Design', color: '#FF6B00', initials: 'SW' },
    { name: 'AutoCAD', desc: '2D & 3D Drafting', color: '#E84410', initials: 'AC' },
    { name: 'ANSYS', desc: 'FEA & Simulation', color: '#FFB300', initials: 'AN' },
    { name: 'Autodesk Inventor', desc: '3D Mechanical CAD', color: '#0B1F3A', initials: 'AI' },
  ];

  const projects = [
    { tag: 'Material Handling', title: 'Conveyor Systems', img: 'https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Packaging', title: 'Packaging Machines', img: 'https://images.pexels.com/photos/2058120/pexels-photo-2058120.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Mechanical', title: 'Lift Mechanisms', img: 'https://images.pexels.com/photos/3801219/pexels-photo-3801219.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Industrial', title: 'Storage Systems', img: 'https://images.pexels.com/photos/4488648/pexels-photo-4488648.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Power Transmission', title: 'Gearboxes', img: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Engineering', title: 'Machine Design', img: 'https://images.pexels.com/photos/1075959/pexels-photo-1075959.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Automation', title: 'Water Filling Machines', img: 'https://images.pexels.com/photos/4474028/pexels-photo-4474028.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Automation', title: 'Automation Equipment', img: 'https://images.pexels.com/photos/3823037/pexels-photo-3823037.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Structural', title: 'Industrial Structures', img: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { tag: 'Assembly', title: 'Mechanical Assemblies', img: 'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const whyChooseUs = [
    { icon: 'fa-user-gear', text: 'Experienced Mechanical Engineers' },
    { icon: 'fa-globe', text: 'International Engineering Standards' },
    { icon: 'fa-bolt', text: 'Fast Turnaround' },
    { icon: 'fa-bullseye', text: 'Precision Engineering' },
    { icon: 'fa-tags', text: 'Affordable Pricing' },
    { icon: 'fa-industry', text: 'Manufacturing Experience' },
    { icon: 'fa-book', text: 'Industry Knowledge' },
    { icon: 'fa-laptop-code', text: 'Modern CAD Tools' },
    { icon: 'fa-headset', text: 'Customer Support' },
    { icon: 'fa-file-signature', text: 'Complete Engineering Documentation' },
  ];

  const processSteps = [
    { title: 'Requirement Analysis', desc: 'We deeply understand your project needs, constraints, and objectives.' },
    { title: 'Concept Development', desc: 'Initial concepts and design directions are explored and evaluated.' },
    { title: '3D CAD Design', desc: 'Detailed 3D models are created using industry-leading CAD software.' },
    { title: 'Engineering Validation', desc: 'Designs are validated through simulation, analysis, and review.' },
    { title: 'Technical Documentation', desc: 'Complete drawings, BOMs, and specifications are prepared.' },
    { title: 'Manufacturing Support', desc: 'We support the transition from design to production seamlessly.' },
    { title: 'Final Delivery', desc: 'All deliverables are handed over with full documentation and support.' },
  ];

  const testimonials = [
    { text: 'High Yield Design delivered exceptional mechanical design work for our conveyor system project. Their attention to detail and manufacturing knowledge saved us significant time and cost.', name: 'Michael Chen', role: 'Operations Director, TechManufacture Inc.', initials: 'MC', color: '#0057B8' },
    { text: 'The team transformed our rough concept into a fully manufacturable product. Their CAD expertise and DFM analysis were instrumental in our successful product launch.', name: 'Sarah Williams', role: 'R&D Manager, PackPro Solutions', initials: 'SW', color: '#FF6B00' },
    { text: 'Professional, reliable, and technically excellent. They handled our reverse engineering project with precision and delivered ahead of schedule. Highly recommended.', name: 'Ahmed Hassan', role: 'Engineering Lead, Industrial Systems Co.', initials: 'AH', color: '#0B1F3A' },
    { text: 'Their understanding of international standards and manufacturing processes is outstanding. The complete documentation package made our production setup effortless.', name: 'Robert Schmidt', role: 'CEO, PrecisionMach Ltd.', initials: 'RS', color: '#0057B8' },
    { text: 'From concept to final delivery, High Yield Design exceeded our expectations. Their gearbox design work was technically superior and cost-optimized.', name: 'Priya Sharma', role: 'Product Manager, AutoTech Industries', initials: 'PS', color: '#FF6B00' },
    { text: 'Excellent industrial consultancy services. They optimized our factory layout and improved our production workflow by 30%. True engineering professionals.', name: 'David Miller', role: 'Plant Manager, FabriSteel Works', initials: 'DM', color: '#0B1F3A' },
  ];

  const faqs = [
    { q: 'What types of engineering projects do you handle?', a: 'We handle a wide range of mechanical engineering projects including product design, machine design, 3D CAD modeling, reverse engineering, manufacturing drawings, and industrial consultancy across automotive, manufacturing, packaging, and heavy machinery sectors.' },
    { q: 'Which CAD software do you use?', a: 'We work with industry-leading software including Creo, SolidWorks, AutoCAD, ANSYS, and Autodesk Inventor. We can deliver files in your preferred format to ensure seamless integration with your workflow.' },
    { q: 'Do you follow international engineering standards?', a: 'Yes, all our designs and drawings comply with international standards including ISO, ASME, ANSI, and DIN. We ensure GD&T documentation follows ASME Y14.5 standards for precise manufacturing control.' },
    { q: 'What is your typical project turnaround time?', a: 'Turnaround time depends on project complexity. Simple components may take 2-3 days, while complex assemblies can take 1-2 weeks. We provide clear timelines upfront and deliver on schedule.' },
    { q: 'Can you work with existing designs or do you only create new ones?', a: 'We do both. We can create new designs from scratch or work with your existing designs for modifications, optimization, reverse engineering, or documentation updates.' },
    { q: 'Do you provide manufacturing support after design delivery?', a: 'Yes, we provide complete manufacturing support including DFM analysis, supplier coordination guidance, and technical assistance throughout the production process to ensure smooth transition from design to manufacturing.' },
    { q: 'How do you handle confidential project information?', a: 'We take confidentiality seriously. We are happy to sign NDAs and ensure your intellectual property is protected throughout our engagement and beyond.' },
    { q: 'What deliverables do you provide?', a: 'Deliverables typically include 3D CAD models, 2D manufacturing drawings, assembly drawings, BOM/BOQ documents, GD&T documentation, and any project-specific documentation required for manufacturing.' },
  ];

  /* ===== Render Functions ===== */
  function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = services.map((s, i) => `
      <div class="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
        <div class="service-card">
          <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
          <h4>${s.title}</h4>
          <p>${s.desc}</p>
        </div>
      </div>`).join('');
  }

  function renderIndustries() {
    const grid = document.getElementById('industriesGrid');
    if (!grid) return;
    grid.innerHTML = industries.map((ind, i) => `
      <div class="col-6 col-md-4 col-lg" data-aos="zoom-in" data-aos-delay="${(i % 5) * 60}">
        <div class="industry-card">
          <i class="fa-solid ${ind.icon}"></i>
          <h5>${ind.name}</h5>
        </div>
      </div>`).join('');
  }

  function renderExpertise() {
    const grid = document.getElementById('expertiseGrid');
    if (!grid) return;
    grid.innerHTML = expertise.map((e, i) => `
      <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
        <div class="expertise-card">
          <div class="exp-icon"><i class="fa-solid ${e.icon}"></i></div>
          <h5>${e.name}</h5>
        </div>
      </div>`).join('');
  }

  function renderSoftware() {
    const grid = document.getElementById('softwareGrid');
    if (!grid) return;
    grid.innerHTML = software.map((s, i) => `
      <div class="col-6 col-md-4 col-lg" data-aos="zoom-in" data-aos-delay="${i * 100}">
        <div class="software-card">
          <div class="software-logo" style="background: ${s.color};">${s.initials}</div>
          <h4>${s.name}</h4>
          <p>${s.desc}</p>
        </div>
      </div>`).join('');
  }

  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = projects.map((p, i) => `
      <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
        <div class="project-card">
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
          <div class="project-overlay">
            <span class="project-tag">${p.tag}</span>
            <h4>${p.title}</h4>
          </div>
          <div class="project-icon"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>`).join('');
  }

  function renderWhy() {
    const grid = document.getElementById('whyGrid');
    if (!grid) return;
    grid.innerHTML = whyChooseUs.map((w, i) => `
      <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${(i % 4) * 60}">
        <div class="why-card">
          <i class="fa-solid ${w.icon}"></i>
          <span>${w.text}</span>
        </div>
      </div>`).join('');
  }

  function renderProcess() {
    const timeline = document.getElementById('processTimeline');
    if (!timeline) return;
    timeline.innerHTML = processSteps.map((p, i) => `
      <div class="process-step" data-index="${i}">
        <div class="process-num">${i + 1}</div>
        <div class="process-content">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
        </div>
      </div>`).join('');
  }

  function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    grid.innerHTML = testimonials.map((t, i) => `
      <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}">
        <div class="testimonial-card">
          <div class="testimonial-quote">&ldquo;</div>
          <div class="testimonial-stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="testimonial-text">${t.text}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="background: ${t.color};">${t.initials}</div>
            <div>
              <div class="testimonial-name">${t.name}</div>
              <div class="testimonial-role">${t.role}</div>
            </div>
          </div>
        </div>
      </div>`).join('');
  }

  function renderFAQ() {
    const acc = document.getElementById('faqAccordion');
    if (!acc) return;
    acc.innerHTML = faqs.map((f, i) => `
      <div class="custom-accordion-item" data-index="${i}">
        <button class="custom-accordion-button" type="button">
          <span>${f.q}</span>
          <span class="acc-icon"><i class="fa-solid fa-chevron-down"></i></span>
        </button>
        <div class="custom-accordion-body">
          <p>${f.a}</p>
        </div>
      </div>`).join('');

    acc.querySelectorAll('.custom-accordion-button').forEach(btn => {
      btn.addEventListener('click', function () {
        const item = this.parentElement;
        const isActive = item.classList.contains('active');
        acc.querySelectorAll('.custom-accordion-item').forEach(it => it.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  }

  /* ===== Typing Animation ===== */
  function initTyping() {
    const el = document.getElementById('typed');
    if (!el) return;
    const phrases = [
      '3D CAD Modeling',
      'Machine Design',
      'Reverse Engineering',
      'Manufacturing Support',
      'Product Development',
    ];
    let phraseIdx = 0, charIdx = 0, deleting = false;

    function type() {
      const current = phrases[phraseIdx];
      if (deleting) {
        el.textContent = current.substring(0, charIdx--);
        if (charIdx < 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(type, 400);
          return;
        }
        setTimeout(type, 40);
      } else {
        el.textContent = current.substring(0, charIdx++);
        if (charIdx > current.length) {
          deleting = true;
          setTimeout(type, 2000);
          return;
        }
        setTimeout(type, 80);
      }
    }
    type();
  }

  /* ===== Animated Counters ===== */
  function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value.toLocaleString() + (progress === 1 && target >= 1000 ? '+' : '');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-count'), 10);
          animateCounter(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  /* ===== Process Steps Reveal ===== */
  function initProcessReveal() {
    const steps = document.querySelectorAll('.process-step');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'),
            parseInt(entry.target.getAttribute('data-index'), 10) * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    steps.forEach(s => observer.observe(s));
  }

  /* ===== Navbar Scroll ===== */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    });
  }

  /* ===== Back to Top ===== */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) btn.classList.add('show');
      else btn.classList.remove('show');
    });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== Dark Mode ===== */
  function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');
    const saved = localStorage.getItem('hyd-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
      icon.className = saved === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('hyd-theme', next);
      icon.className = next === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
  }

  /* ===== Contact Form ===== */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cfName').value.trim();
      const email = document.getElementById('cfEmail').value.trim();
      const message = document.getElementById('cfMessage').value.trim();
      if (!name || !email || !message) return;
      success.classList.add('show');
      form.reset();
      setTimeout(() => success.classList.remove('show'), 5000);
    });
  }

  /* ===== Loader ===== */
  function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 1500);
    });
  }

  /* ===== Current Year ===== */
  function initYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ===== Init ===== */
  document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderIndustries();
    renderExpertise();
    renderSoftware();
    renderProjects();
    renderWhy();
    renderProcess();
    renderTestimonials();
    renderFAQ();

    initTyping();
    initCounters();
    initProcessReveal();
    initNavbar();
    initBackToTop();
    initTheme();
    initContactForm();
    initLoader();
    initYear();

    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-out-cubic' });
    }
  });
})();
