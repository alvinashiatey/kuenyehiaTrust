import "./assets/style/main.scss";
import "/Users/alvinkwabena/Documents/GitHub/kprize/node_modules/normalize.css/normalize.css";

const mouseHandlers = () => {
  const carousel = document.querySelector(".carousel");
  const carouselSlides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");

  let counter = 0;

  let size;

  if (carousel) {
    size = carouselSlides[0].clientWidth;
    window.addEventListener("resize", () => {
      size = carouselSlides[0].clientWidth;
    });

    nextBtn.addEventListener("click", () => {
      if (counter >= carouselSlides.length - 1) return;
      carousel.style.transition = "transform 0.6s ease-in-out";
      counter++;
      carousel.style.transform = `translateX(-${size * counter}px)`;
    });

    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      carousel.style.transition = "transform 0.6s ease-in-out";
      counter--;
      carousel.style.transform = `translateX(-${size * counter}px)`;
    });
  }
};

mouseHandlers();
