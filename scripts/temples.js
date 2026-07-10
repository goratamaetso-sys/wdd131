document.addEventListener("DOMContentLoaded", () => {

    // Footer
    document.getElementById("currentyear").textContent =
        new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        `Last Modified: ${document.lastModified}`;

    // Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            hamburger.textContent = "✖";
            } 
        else {
            hamburger.textContent = "☰";
        }
    });

});