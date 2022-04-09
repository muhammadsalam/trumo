const filterBtns = document.querySelectorAll(".main-filter__item .btn");
const filterModals = document.querySelectorAll(".filter-modal");


for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", (e) => {
        filterModals[i].classList.toggle("active");
        filterBtns[i].classList.toggle("active");
    });
}

// ------ ползунок ( год произведства ) -------

let filterRange = document.querySelector('#productionyear');

noUiSlider.create(filterRange, {
    connect: true,
    margin: 12,
    behaviour: 'none',
    start: [1930, 1990],
    range: {
        'min': 1930,
        'max': 2022,
    },
    step: 2
})

let rangeNodes = [
    document.querySelector('.filter-modal .count number:first-child'),
    document.querySelector('.filter-modal .count number:last-child'),
];

filterRange.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    rangeNodes[handle].innerHTML = Math.round(values[handle]);
});


sectionToSlider('.free');

mainCatalog();
mainFooter();

// ------ фильтры в мобилке --------
