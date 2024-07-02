document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });
});
