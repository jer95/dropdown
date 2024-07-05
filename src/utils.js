const dropdowns = document.querySelectorAll(".dropdown");
const section = document.getElementById("section");

export function util() {
  let previousTarget;

  // listener for each dropdown element
  dropdowns.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      const id = event.target.innerHTML.trim();
      const menu = document.getElementById(id);
      if (previousTarget) {
        previousTarget.style.display = "none";
      }
      previousTarget = menu;
      console.log(menu);
      menu.style.display = "flex";
      menu.style.visibility = "visible";
    });
  });
  // hiding dropdown if mouse is not hovering over it
  section.addEventListener("mouseover", () => {
    if (previousTarget) {
      previousTarget.style.visibility = "hidden";
      previousTarget.style.display = "none";
    }
  });
}
