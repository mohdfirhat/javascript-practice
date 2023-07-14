//Transversing DOM-parent-child relationship
let newElement = document.querySelector('div')

//Parent Node Traversal
console.log(newElement.parentNode); //display parent
console.log(newElement.parentNode.parentNode); //display grandparent
console.log(newElement.parentElement.parentElement)

//Child Node Tranversal
console.log(newElement.childNodes);
console.log(newElement.firstChild);
console.log(newElement.lastChild);
newElement.childNodes[1].style.backgroundColor = 'blue'; 
//cant use first child as it looks into your html and see spaces
console.log(newElement.children); //html version
console.log(newElement.firstElementChild); 
console.log(newElement.lastElementChild); 
//Sibling Node Transversal

console.log(newElement.previousSibling);
console.log(newElement.nextSibling);
console.log(newElement.previousElementSibling);
console.log(newElement.nextElementSibling);