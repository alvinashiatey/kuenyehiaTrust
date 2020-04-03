import "./assets/style/main.scss";
import gsap from "gsap";
import "/Users/alvinkwabena/Documents/GitHub/kprize/node_modules/normalize.css/normalize.css";

const mouseHandlers = () => {
  const carousel = document.querySelector(".carousel");
  const carouselSlides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const panels = document.querySelector(".display__content");
  const panelSwitchs = document.querySelectorAll(".panel__switch");

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

  if (panels) {
    const panelSwitchsArr = Array.from(panelSwitchs);

    panelSwitchsArr.forEach(panelSwitch => {
      panelSwitch.addEventListener("click", e => {
        e.preventDefault();
        const panel = panelSwitch.parentNode.parentNode.children[1];
        panel.classList.toggle("close__panel");
      });
    });
  }
};
mouseHandlers();

const animation = () => {
  const carousel = document.querySelector(".carousel");

  gsap.from(carousel, 0.9, {
    y: 100,
    opacity: 0,
    ease: "power.inOut"
  });
};

animation();
