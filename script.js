const imgDisplay = document.querySelector("img.slider");
const textDisplay = document.querySelector("h1.slider");

let time = 3000;
let slideIndex = 0;

const sliderOptions = [{
  img: "img/img1.jpg",
  text: "First text"
},
{
  img: "img/img2.jpg",
  text: "Second text"
},
{
  img: "img/img3.jpg",
  text: "Third text"
}];

const switchSlide = () => {
  slideIndex++;

  if(slideIndex === sliderOptions.length) slideIndex = 0;

  imgDisplay.src = sliderOptions[slideIndex].img;
  textDisplay.textContent = sliderOptions[slideIndex].text;

}

setInterval(switchSlide, time)
