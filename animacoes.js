// ----------------------------------ATIVA E DESATIVA A LISTA DE ANIMAIS---------------------------------------------------
function listaAnimais() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((iMenu, i) => {
      iMenu.addEventListener("click", () => {
        activeTab(i);
      });
    });
  }
}
// ----------------------------------ATIVA E DESATIVA A LISTA DE FAQ---------------------------------------------------
function listaFaq() {
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
// ----------------------------------SCROLL ATÉ O LINK INTERNO---------------------------------------------------
function scrollToSection() {
  const linkInterno = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollDown(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linkInterno.forEach((link) => {
    link.addEventListener("click", scrollDown);
  });
}
// ----------------------------------SCROLL MANUAL-------------------------------------------------------------
function scrollManual() {
  const section = document.querySelectorAll('[data-anime="scroll"]');

  function scrollManual0() {
    section.forEach((item) => {
      const sectionTop =
        item.getBoundingClientRect().top - window.innerHeight * 0.7;
      if (sectionTop < 0) {
        item.classList.add("ativo");
      }
    });
  }
  scrollManual0();
  window.addEventListener("scroll", scrollManual0);
}
// -------------------------------------------------------------------------------------------------------------

listaAnimais();

listaFaq();

scrollToSection();

scrollManual();
