// const $menu = document.querySelector(".menu-icon");
const $menuToggle = document.querySelector(".menu-toggle");
const $mainContainer = document.querySelector(".main-container");
const $menuOpen = document.querySelector(".menu-open");

let disabled = false;

$menuToggle.addEventListener("click", () => {
  if (!disabled) {
    $mainContainer.classList.add("remove-container");
    $menuOpen.classList.add("menu-active");
    $menuToggle.classList.add("active");
  } else {
    $mainContainer.classList.remove("remove-container");
    $menuOpen.classList.remove("menu-active");
  }
  disabled = !disabled;
});
