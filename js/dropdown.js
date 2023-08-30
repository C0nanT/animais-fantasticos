import clickHTML from "./outside-click.js";

export default function dropDown() {}

const dropDownMenus = document.querySelectorAll("[data-dropdown]");

dropDownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, showDropDown);
  });
});

function showDropDown(event) {
  event.preventDefault();
  this.classList.add("ativo");
  clickHTML(this, () => {
    this.classList.remove("ativo");
  });
}
