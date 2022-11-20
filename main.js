
// Permet de déployer le menu
const icon = document.querySelector(".menu")
const menuTriggers = document.querySelectorAll(".menu-trigger");
menuTriggers.forEach(trigger => trigger.addEventListener("click", toggleMenu));

function toggleMenu() {
    icon.classList.toggle("active")
}
// FIN