export default function modal() {
  const abrirModal = document.querySelector('[data-modal="abrir-login"]');
  const fecharModal = document.querySelector('[data-modal="fechar-login"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (abrirModal && fecharModal && fecharModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function foraModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }
    abrirModal.addEventListener("click", toggleModal);
    fecharModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", foraModal);
  }
}
