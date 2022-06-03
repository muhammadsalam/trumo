sectionToSlider('.free.blog-slider');
sectionToSlider('.free.similar-slider');
mainFooter();

let productSlider = new Swiper(".product-slider-1", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});

let productSliderThumbs = new Swiper(".product-slider-2", {
    spaceBetween: 10,
    thumbs: {
        swiper: productSlider,
    },
});