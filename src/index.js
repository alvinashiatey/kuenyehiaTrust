import "./assets/style/main.scss";
import gsap from "gsap";
import * as p5 from "p5";
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
  if (carousel) {
    gsap.from(carousel, 0.9, {
      y: 100,
      opacity: 0,
      ease: "power.inOut"
    });
  }
};

animation();

let s = sk => {
  sk.setup = () => {
    sk.createCanvas(window.innerWidth, window.innerHeight);
  };

  let xoff = 0.0;

  sk.draw = () => {
    sk.background("rgba(251,251,248, 0.17)");
    sk.ellipse(sk.mouseX, sk.mouseY, 20);
    var cr = sk.map(window.innerWidth, sk.mouseY, sk.mouseX, 0, 35);
    xoff = xoff + 0.01;
    let n = xoff * sk.mouseX;
    sk.noStroke();
    sk.fill(153, cr, 102 + n);
    // 153, 35, 105
  };
};

const P5 = new p5(s);
