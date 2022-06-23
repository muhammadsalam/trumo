const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.parentElement.parentElement.classList.add("active");
    document.body.classList.add("no-scroll");
  });
});

sectionToSlider('.free');