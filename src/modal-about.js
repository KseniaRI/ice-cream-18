
(() => {
  const refs = {
    openAboutModalBtn: document.querySelector(".open-about-modal-btn"),
    closeAboutModalBtn: document.querySelector(".close-about-modal-btn"),
    modal: document.querySelector(".about-backdrop"),
  };

  refs.openAboutModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
