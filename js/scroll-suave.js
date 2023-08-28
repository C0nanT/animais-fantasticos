export default function scrollToSection() {
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
