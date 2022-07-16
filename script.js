const imgDisplay = document.querySelector('img.slider');
const textDisplay = document.querySelector('h1.slider');
let slideInterval;

let time = 3000;
let activeIndex = 0;
const dots = [...document.querySelectorAll('.dots span')];

const sliderOptions = [
  {
    img: 'img/img1.jpg',
    text: 'First text',
  },
  {
    img: 'img/img2.jpg',
    text: 'Second text',
  },
  {
    img: 'img/img3.jpg',
    text: 'Third text',
  },
];

const changeActiveDot = () => {
  let dotIndex = dots.findIndex((dot) => dot.classList.contains('active'));
  dots[dotIndex].classList.remove('active');
  dots[activeIndex].classList.add('active');
};

const switchSlide = () => {
  activeIndex++;

  if (activeIndex === sliderOptions.length) activeIndex = 0;

  imgDisplay.src = sliderOptions[activeIndex].img;
  textDisplay.textContent = sliderOptions[activeIndex].text;

  changeActiveDot();
};

slideInterval = setInterval(switchSlide, time);

const changeSlidesManually = (e) => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(slideInterval);
    e.keyCode === 37 ? activeIndex-- : activeIndex++;
    if (activeIndex < 0) {
      activeIndex = sliderOptions.length - 1;
    } else if (activeIndex >= sliderOptions.length) {
      activeIndex = 0;
    }

    imgDisplay.src = sliderOptions[activeIndex].img;
    textDisplay.textContent = sliderOptions[activeIndex].text;

    changeActiveDot();

    slideInterval = setInterval(switchSlide, time);
  }
};

document.body.addEventListener('keydown', changeSlidesManually);
