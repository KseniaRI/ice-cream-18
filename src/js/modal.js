// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal(e) {
//     console.log(e.target);
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
  
function toogleAnyModal(openBtnRef, closeBtnRef, modalRef) {
  const refs = {
    openModalBtn: document.querySelector(openBtnRef),
    closeModalBtn: document.querySelector(closeBtnRef),
    modal: document.querySelector(modalRef),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.closeModalBtn.addEventListener('click', closeModal);
  }
  function closeModal() {
    refs.modal.classList.add('is-hidden');
  }
}

toogleAnyModal('[data-modal-open]', '[data-modal-close]', '[data-modal]');
toogleAnyModal('[data-franchise-modal-open]', '[data-franchise-modal-close]', '[data-franchise-modal]');
toogleAnyModal('[data-map-modal-open]', '[data-map-modal-close]', '[data-map-modal]');
toogleAnyModal('[data-about-modal-open]', '[data-about-modal-close]', '[data-about-modal]');
toogleAnyModal('[data-modal-buy-open]', '[data-modal-close]', '[data-modal]')