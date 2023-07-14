//normal flow is create,append,modify

//create element
const selectedDiv = document.querySelector('selectedDiv');
const newElement = document.createElement('li');

//adding element
selectedDiv.append(newElement);

//modifying text 
//newElement.innertext textContent newElement.innerHTML
//usually use inner text. 
//innerhtml allow user to edit the javascript which is not adviseable
newElement.innerText = 'Xmen';

//Modifying Attributes & Class
//to set/remove the id to mainheading
newElement.setAttribute('id', 'idName')
newElement.removeAttribute('id')

const title = document.querySelector('#idName');
console.log(title.getAttribute('id'));

newElement.classList.add('className');
newElement.classList.remove('className');
console.log(newElement.classList.contains('className'));

//Remove element
newElement.remove