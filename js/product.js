sectionToSlider('.free.blog-slider');
sectionToSlider('.free.similar-slider');

let productSlider = new Swiper(".product-slider-1", {
    spaceBetween: window.outerWidth < 768 ? 10 : 20,
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

function activeButton (e) {
    if(e.target.tagName == 'BUTTON'){
        e.target.classList.toggle('active');
    }
}

document.querySelector('.similar').addEventListener('click', (e) => {
    if(e.target.classList.contains('like')){
        e.preventDefault();
        e.target.remove()
    }
})