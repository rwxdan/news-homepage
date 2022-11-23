const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("active");
  if (
    primaryNav.getAttribute("aria-expanded") == "false" &&
    navToggle.getAttribute("data-visible") == "false"
  ) {
    primaryNav.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("data-visible", "true");
  } else {
    primaryNav.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("data-visible", "false");
  }
});
