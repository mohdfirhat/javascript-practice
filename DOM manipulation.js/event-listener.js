//Adding event in HTML
<button onclick="alert('I love Javascript')"></button>

//Event Listener

element.addEventListner("click",functionName);

const buttonTwo = document.querySelector('.className');

function functionName() {
  alert('I love Javascript too');
}

buttonTwo.addEventListner('click',functionName);

const newBackgroundColor = document.querySelector('.className');

function changeBgColor() {
  newBackgroundColor.getElementsByClassName.backgroundColor = 'blue'
}
newBackgroundColor.addEventListener('mouseover',changeBgColor);

//Reveal Event
const revealButton = document.querySelector('.className');
const hiddenContent = document.querySelector('.hidden-content-class');

function revealContent() {
  if(hiddenContent.classList.contains('className')) {
    hiddenContent.classList.remove('className')
  } else {
    hiddenContent.classList.add('className')
  }
}
revealButton.addEventListener('click',revealContent);

//in css
.hidden-content {
  display: None;
}
.hidden-content.reveal-button {
  display: block;
}