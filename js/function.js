window.addEventListener('click', (e) => console.log(e.target));
function ifer(selector, event, func){
    if(document.querySelector(selector)) document.querySelector(selector).addEventListener(event, func);
}

function formToggle() {
    let form = document.querySelector(".header-form");
    form.classList.toggle("active");
    document.querySelector
}ifer('.js-form-toggle', 'focus', formToggle);
ifer('.js-form-toggle', 'blur', formToggle);

function toUp() {
    window.scrollTo(0, 0);
}

function headerToggle() {
    const header = document.querySelector(".header");
    document.body.classList.toggle("no-scroll");
    header.classList.toggle("active");
}ifer('.js-header-toggle', 'click', headerToggle);

function headerCatalogBtn() {
    const catalog = document.querySelector(".header-catalog");
    catalog.classList.toggle("active");
}ifer('.js-header-catalog-btn', 'click', headerCatalogBtn);

function headerSearchButton() {
    const popap = document.querySelector(".header-form__popap");
    popap.classList.add("active");
}ifer('.js-header-search-button', 'click', headerSearchButton);

function closeSearchButton() {
    const popap = document.querySelector(".header-form__popap");
    popap.classList.remove("active");
}ifer('.js-close-search-button', 'click', closeSearchButton);

function closeTooltipButton() {
    const mainLists = document.querySelectorAll(".main-list__item");
    mainLists.forEach((item) => {
        item.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
}

function sectionToSlider(el) {
    if (window.outerWidth <= 768) {
        const swiper = new Swiper(el, {
            slidesPerView: "auto",
            spaceBetween: 20,
        });
    }    
}

function toggleFilter() {
    const mainFilter = document.querySelector(".main-filter");
    mainFilter.classList.toggle("active");
    document.body.classList.toggle('no-scroll')
    
    const materialsEL = document.querySelector('.filter-modal.materials-modal');
    materialsEL.classList.remove('active');
    materialsEL.previousElementSibling.classList.remove('active');
}

function loadmore() {
    const btn = document.querySelector(".load-btn");
    btn.classList.toggle("loading");
}

function mainCatalog () {
    const mainCatalog = document.querySelector(".main-catalog");
    mainCatalog.addEventListener("click", (e) => {
        if (e.target.classList.contains("for-basket") || e.target.classList.contains("order") || e.target.classList.contains("like"))
            e.preventDefault();
        if (!e.target.classList.contains("like")) return;
        e.target.classList.toggle("isFavourite");
    });    
}

// ----- FOOTER -----

function mainFooter () {
    const footerContentItems = document.querySelectorAll(".footer-content__item");

    footerContentItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            item.classList.toggle("active");
        });
    });
}

if(document.querySelector('.footer-content__item')) mainFooter();