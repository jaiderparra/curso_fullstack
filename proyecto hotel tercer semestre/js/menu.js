document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-menu-button");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function () {
        toggleMenu();
    });

    closeButton.addEventListener("click", function () {
        toggleMenu();
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnMenuButton = menuButton.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuButton) {
            closeMenu();
        }
    });

    // Función para abrir el menú
    function openMenu() {
        menu.classList.add("open");
    }

    // Función para cerrar el menú
    function closeMenu() {
        menu.classList.remove("open");
    }

    // Función para alternar el estado del menú
    function toggleMenu() {
        menu.classList.toggle("open");
    }
});
