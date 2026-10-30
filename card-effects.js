(() => {
  const selector = '.service, .stat, .industry, .step, .case-card, .testimonial, .blog-card, .mission-card, .process-card, .team-card, .partner, .about-stat, .core-service, .service-industry, .service-stat, .post-card, .contact-detail, .contact-stats > div, .welcome-card, .overview article, .panel';
  const cards = [...document.querySelectorAll(selector)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  cards.forEach((card, index) => {
    card.classList.add('animated-card');
    card.style.setProperty('--card-delay', `${(index % 3) * 70}ms`);
  });
  if (!window.AOS) return;
  cards.forEach(card => { card.dataset.aos = 'fade-up'; });
  try {
    AOS.init({ duration: 550, easing: 'ease-out-cubic', offset: 30, once: true,
      disable: () => reducedMotion.matches });
  } catch {
    cards.forEach(card => card.removeAttribute('data-aos'));
    return;
  }
  window.addEventListener('hashchange', () => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.dashboard-view:not([hidden]) [data-aos]').forEach(card => {
        card.classList.remove('aos-animate');
      });
      AOS.refreshHard();
    });
  });
})();
