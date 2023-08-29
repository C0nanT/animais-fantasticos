export default function toolTip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", mouseOver);
  });

  function mouseOver(event) {
    const toolTipBox = criarTipBox(this);
    mouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", mouseMove);

    mouseLeave.toolTipBox = toolTipBox;
    mouseLeave.element = this;
    this.addEventListener("mouseleave", mouseLeave);
  }

  const mouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 20 + "px";
      this.toolTipBox.style.left = event.pageX + 20 + "px";
    },
  };

  const mouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", mouseLeave);
    },
  };

  function criarTipBox(element) {
    const toolTipBox = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = texto;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
