const outer = document.querySelector('.outer-div');
const inner = document.querySelector('.inner-div');
const button = document.querySelector('.button');

function changeBlue(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: blue');
}

function changePurple(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: #601A4A');
}

function changeOrange(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    'style',
    'background-color: #EE442F; color: white;'
  );
}

outer.addEventListener('click', changePurple);
inner.addEventListener('click', changeOrange);
button.addEventListener('click', changeBlue);
