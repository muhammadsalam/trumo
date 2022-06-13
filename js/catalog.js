const filterBtns = document.querySelectorAll(".main-filter__item .btn");
const filterModals = document.querySelectorAll(".filter-modal");

for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", (e) => {
        filterModals[i].classList.toggle("active");
        filterBtns[i].classList.toggle("active");
    });
}

// ------ ползунок ( год произведства ) -------

let filterRange = document.querySelector("#productionyear");

noUiSlider.create(filterRange, {
    connect: true,
    margin: 12,
    behaviour: "none",
    start: [1930, 1990],
    range: {
        min: 1930,
        max: 2022,
    },
    step: 2,
});

let rangeNodes = [
    document.querySelector(".filter-modal .count number:first-child"),
    document.querySelector(".filter-modal .count number:last-child"),
];

filterRange.noUiSlider.on(
    "update",
    function (values, handle, unencoded, isTap, positions) {
        rangeNodes[handle].innerHTML = Math.round(values[handle]);
    }
);

filterRange.noUiSlider.on("change", function (values, handle) {
    let inputs = document.querySelectorAll(".productionyear input");
    inputs[handle].value = values[handle];
    changingFilter('hidden')
});

// --------------------------------------------------

sectionToSlider(".free");

mainCatalog();
mainFooter();

function toggleMaterials() {
    const modal = document.querySelector(".filter-modal.materials-modal");
    modal.classList.remove("active");
    modal.previousElementSibling.classList.remove("active");
}

document
    .querySelector(".filter-modal.materials-modal")
    .addEventListener("change", function (e) {
        if (e.target.type == "checkbox") {
            const spanEl = document.querySelector(
                ".main-filter__item .filter-modal .materials-modal-title span"
            );
            if (e.target.classList.contains("isChecked")) {
                spanEl.innerHTML = +spanEl.innerHTML - 1;
            } else {
                spanEl.innerHTML = +spanEl.innerHTML + 1;
            }
            e.target.classList.toggle("isChecked");
        }
    });

// --------- менять кнопки СБРОСИТь и ПРИНЯТЬ ---------

let isFilterChange = false;
function changingFilter (type) {
    if ((type == "checkbox" || type == 'hidden' || type == 'radio') && !isFilterChange) {
        isFilterChange = !isFilterChange;

        const filterReset = document.getElementById("filter-reset"),
            filterAccept = document.getElementById("filter-accept");
        filterReset.removeAttribute("disabled");
        filterAccept.removeAttribute("disabled");
    }
}
document.querySelector(".main-filter").addEventListener("change", (e) => changingFilter(e.target.type));

// ------ фильтры в мобилке --------

// let priceBoost = [];
// const filterCheckbox = document.querySelector('.filter-modal.price');

// filterCheckbox.addEventListener('change', (e) => {
//     const value = e.target.value;

//     if(!e.target.checked){
//         priceBoost = priceBoost.slice(value, value)
//         return;
//     }

//     priceBoost[value] = value;
//     let parent = e.target;
//     while (!parent.classList.contains('filter-modal')){
//         parent = parent.parentNode;
//         console.log(parent);
//     }

// })
