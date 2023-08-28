export default function listaFaq() {
  const faqPergunta = document.querySelectorAll("[data-anime='acd'] dt");
  if (faqPergunta.length) {
    faqPergunta[0].classList.add("ativo");
    faqPergunta[0].nextElementSibling.classList.add("ativo");

    function faqClick() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
    faqPergunta.forEach((faq) => {
      faq.addEventListener("click", faqClick);
    });
  }
}
