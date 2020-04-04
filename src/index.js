import "./assets/style/main.scss";
import axios from "axios";
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

    panelSwitchsArr.forEach((panelSwitch) => {
      panelSwitch.addEventListener("click", (e) => {
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
      ease: "power.inOut",
    });
  }
};

animation();

let s = (sk) => {
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

  sk.windowResized = () => {
    sk.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};

const P5 = new p5(s);

//google maps
var map;
function initMap() {
  let myLatLng = { lat: 5.59322, lng: -0.23054 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 17,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [
          {
            weight: "2.00",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#9c9c9c",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7b7b7b",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#46bcec",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#c8d7d4",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#070707",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
    ],
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Kuenyehia Prize for Contemporary Art",
  });
}
const mapDOM = document.getElementById("map");
if (mapDOM) {
  google.maps.event.addDomListener(window, "load", initMap);
  initMap();
}
