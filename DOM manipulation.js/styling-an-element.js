const title =document.querySelector('#idname');
title.style.color = 'red';
console.log(title);

const listItem = document.querySelectorAll('classname')
console.log('listItem');
listItem.style.fontSize = '12';

for(i=0;i<listItem.length;i++) {
  listItem.style.color = 'red';
}