export default function clickHTML(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", clickFora);
    element.setAttribute(outside, "");
  }

  function clickFora(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, "");
      html.removeEventListener("click", clickFora);
      callback();
    }
  }
}
