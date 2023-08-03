let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});
window.onscroll = () => {
    navbar.classList.remove("active");
};

// // JavaScript
// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");
// let menuOpen = false;// Variable para rastrear el estado del menú

// menu.addEventListener("click", function () {
//   navbar.classList.toggle(".active");
//   menuOpen = !menuOpen; // Cambiar el estado del menú al hacer clic
// });

// window.onscroll = () => {
//   if (!menuOpen) {
//     // Solo si el menú no está abierto, entonces remueve la clase "active"
//     navbar.classList.remove(".active");
//   }
// };
