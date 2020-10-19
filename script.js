//Image Carousel
bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 1,
    breakpoints: [{ 
        changePoint: 480, slidesToShow: 1, slidesToScroll: 1 
    }, { 
        changePoint: 640, slidesToShow: 1, slidesToScroll: 1 
    }, { 
        changePoint: 768, slidesToShow: 1, slidesToScroll: 1 
    } ],
    autoplay: true,
    loop: true,
    infinite:true,
    autoplaySpeed: 5000
});

//Hamburger Menu
const navbarMenu = document.querySelector('#nav-links');
const burgerIcon = document.querySelector('#burger');

burgerIcon.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
})