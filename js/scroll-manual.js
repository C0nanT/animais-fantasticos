export default function scrollManual() {
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
