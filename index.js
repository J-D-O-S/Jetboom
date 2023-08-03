window.onload = (e) => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: { // posible cambio para mayuscula
            991: {
                slidesPerView: 3
            }
        }
    });
}