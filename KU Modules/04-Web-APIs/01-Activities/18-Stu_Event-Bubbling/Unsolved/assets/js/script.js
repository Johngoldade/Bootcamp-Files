// TODO: Which element is the following line of code selecting?
// Selecting the class carouselbox for a div element
const carousel = document.querySelector('.carouselbox');
// TODO: Which element is the following line of code selecting?
// Selecting the classes next and prev for the button elements
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: Describe the functionality of the following event listener.
//listening for a click event at the div with the class carousel and runs the function if true
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//listening for a click event at the button with the class next and passes the event to the function
next.addEventListener('click', function (event) {
  // TODO: What is the purpose of the following line of code?
  // prevents the event from applying to the parent div so that only the button is affected
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//listening for a click event at the button with the class next and passes the event to the function
prev.addEventListener('click', function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  // prevents the event from applying to the parent div so that only the button is affected
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
