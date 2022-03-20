if (window.innerWidth <= 700) {
    let furniture = document.querySelector(".furniture");
    const btns = document.querySelectorAll(".furniture-item");

    furniture.addEventListener("click", (e) => {
        if (!e.target.classList.contains("furniture-item")) return false;

        if (!e.target.classList.contains("active"))
            furnitureBtnToggle(btns, e.target);

        for (let i = 0; i < btns.length; i++) {
            if (btns[i].classList.contains("active")) {
                furnitureTooltipsToggle(i);
            }
        }
    });

    function furnitureBtnToggle(btns, btn) {
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
        }

        btn.classList.add("active");
    }

    furnitureBtnToggle(btns, btns[0])

    function furnitureTooltipsToggle(index) {
        const tooltips = document.querySelectorAll(".mobile-tooltips-item");

        for (let i = 0; i < tooltips.length; i++) {
            tooltips[i].classList.remove("active");
        }

        tooltips[index].classList.add("active");
    }
}