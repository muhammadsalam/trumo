function formToggle() {
    let form = document.querySelector(".header-form");
    form.classList.toggle("active");
}

function toUp() {
    window.scrollTo(0, 0);
}

function headerToggle() {
    const header = document.querySelector(".header");
    document.body.classList.toggle("no-scroll");
    header.classList.toggle("active");
}

function headerCatalogBtn() {
    const catalog = document.querySelector(".header-catalog");
    catalog.classList.toggle("active");
}

function headerSearchButton() {
    const popap = document.querySelector(".header-form__popap");
    popap.classList.add("active");
}

function closeSearchButton() {
    const popap = document.querySelector(".header-form__popap");
    popap.classList.remove("active");
}

function closeTooltipButton() {
    const mainLists = document.querySelectorAll(".main-list__item");
    mainLists.forEach((item) => {
        item.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
}

function sectionToSlider(el) {
    if (window.innerWidth <= 768) {
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
}

function loadmore() {
    const btn = document.querySelector(".load-btn");
    btn.classList.toggle("loading");
}

function addCheckedElementInList (el) {
    const parent = el.parentNode;
    const filterElement = document.createElement('div');
    filterElement.classList.add('filter-modal__boost');
    filterElement.innerHTML = parent.querySelector('span').innerHTML;
    parent.parentNode.parentNode.querySelector('.filter-modal__checked').appendChild(filterElement);
}

// const 