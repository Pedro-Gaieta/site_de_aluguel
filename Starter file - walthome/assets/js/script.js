'use strict';
/**
 * modelo para dispositivos menores
 */
const /**[nodeElementer] */ $navbar = document.querySelector("[data-navbar]")
const /**[nodeElementer] */ $navtoggler = document.querySelector("[data-nav-toggler]")

$navtoggler.addEventListener('click', ()=> $navbar.classList.toggle("active"));

const /**rolaguem automatica */$header = document.querySelector("[data-header]");

window.addEventListener("scroll", e=>{
    $header.classList[window.scrollY > 50 ? "add": "remove"]("active");
}
)

/**botão de favorito */
const /*variavel para btn*/$toggler = document.querySelectorAll("[data-toggler-btn]");
$toggler.forEach($toggler => {
    $toggler.addEventListener('click', ()=>{
    $toggler.classList.toggle("active");
    })
})
 