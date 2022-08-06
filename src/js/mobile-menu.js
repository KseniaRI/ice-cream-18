(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  
  const mobMenuList = document.querySelector('.mob-menu__list');
  const mobMenuBuyNowBtn = document.querySelector('[data-modal-buy-open]');

  const closeMenu = () => {
     mobileMenu.classList.remove('is-open');
  }

  const onMenuItemClick = (e) => {
    if (e.target.nodeName !== 'A') {
      return;
    } else {
      closeMenu();
     }
  }

  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);

    // addEventListener to the buy-button and menu-items while the mob-menu is open and close it for the navigation
    !isMenuOpen && mobMenuList.addEventListener('click', onMenuItemClick);
    !isMenuOpen && mobMenuBuyNowBtn.addEventListener('click', () => closeMenu());
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();