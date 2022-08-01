const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.querySelector(".icon > img").src = "assets/icon_gray.svg";
    });
    tab.classList.add("active");
    tab.querySelector(".icon > img").src = "assets/icon_color.svg";
    target.classList.add("active");
  });
});

// ^^ tab-switcher

const dots = document.querySelectorAll(".dot");
const inners = document.querySelectorAll(".inner");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const target = document.querySelector(dot.dataset.tabTarget);
    inners.forEach((content) => {
      content.classList.remove("active");
    });
    dots.forEach((dot) => {
      dot.classList.remove("full");
    });
    dot.classList.add("full");
    target.classList.add("active");
  });
});

// ^^ testimonials-switcher
