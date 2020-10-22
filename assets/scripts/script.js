//Hamburger Menu
const navbarMenu = document.querySelector('#nav-links');
const burgerIcon = document.querySelector('#burger');

burgerIcon.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
})