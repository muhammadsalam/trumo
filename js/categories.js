const tooltips = document.querySelectorAll(".tooltip");

if(window.outerWidth <= 1024)
tooltips.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.parentElement.parentElement.classList.add("active");
    document.body.classList.add("no-scroll");
  });
});

sectionToSlider('.free');


const jsCloseTooltipButtons = document.querySelectorAll('.js-close-tooltip-button');

[].forEach.call( jsCloseTooltipButtons, el => {
  el.addEventListener('click', (e) => {
    if(e.target.classList.contains('js-close-tooltip-button') || e.target.parentNode.classList.contains('js-close-tooltip-button'))
      closeTooltipButton()
  })
} )