(() => {
  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.menu-button');
  const menuLayer = document.querySelector('.menu-layer');

  const setHeaderState = () => header?.classList.toggle('compact', window.scrollY > 20);
  const closeMenu = () => {
    menuLayer?.classList.remove('is-open');
    document.body.style.overflow = '';
    menuButton?.setAttribute('aria-expanded', 'false');
  };
  const openMenu = () => {
    menuLayer?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    menuButton?.setAttribute('aria-expanded', 'true');
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });
  menuButton?.addEventListener('click', openMenu);
  menuLayer?.addEventListener('click', (event) => {
    if (event.target === menuLayer) closeMenu();
  });
  document.querySelector('.menu-close')?.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
})();
