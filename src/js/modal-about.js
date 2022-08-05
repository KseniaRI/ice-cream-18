
(() => {
  const refs = {
    openAboutModalBtn1: document.querySelector(".open-about-modal-btn1"),
    openAboutModalBtn2: document.querySelector(".open-about-modal-btn2"),
    closeAboutModalBtn: document.querySelector(".close-about-modal-btn"),
    modal: document.querySelector(".about-backdrop"),
  };

  refs.openAboutModalBtn1.addEventListener('click', toggleModal);
  refs.openAboutModalBtn2.addEventListener('click', toggleModal);
  refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
