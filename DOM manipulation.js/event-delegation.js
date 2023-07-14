document.querySelector('#parentId').addEventListener('click',function(e){
  console.log(e.target.getAttribute('id')+ ' is clicked');

  const target = e.target;

  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey';
  }

})
const parent = document.querySelector('#parents');
const newChild = document.createElement('li');

newChild.innerText = 'rugby';
newChild.setAttribute('id','rugby');

parent.appendChild(newChild);