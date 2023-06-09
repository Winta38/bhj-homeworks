const hasTooltip = document.getElementsByClassName("has-tooltip");

for (const item of hasTooltip) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = item.getAttribute("title");
  tooltip.setAttribute("style", "top: 0; left: 0");

  item.appendChild(tooltip);

  item.onclick = () => {
    const { top, left } = item.getBoundingClientRect();
    tooltip.style.top = top - 30 + "px";
    tooltip.style.left = left + "px";

    item.querySelector(".tooltip").classList.toggle("tooltip_active");
    return false;
  };
}
