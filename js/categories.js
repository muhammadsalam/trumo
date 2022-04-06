const footerContentItems = document.querySelectorAll(".footer-list__title");
const tooltips = document.querySelectorAll(".tooltip");

footerContentItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.parentNode.classList.toggle("active");
  });
});

tooltips.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.parentElement.parentElement.classList.add("active");
    document.body.classList.add("no-scroll");
  });
});

sectionToSlider('.free');