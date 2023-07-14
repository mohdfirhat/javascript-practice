//variables

let button= document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {quote : '"Quote 1"',
  person : 'Person 1'
},{
  quote : '"Quote 2"',
person : 'Person 2'
},{
  quote : '"Quote 3"',
person : 'Person 3'
},{
  quote : '"Quote 4"',
person : 'Person 4'
},{
  quote : '"Quote 5"',
  person : 'Person 5'
}, ];

button.addEventListener('click', function(){
  let random = Math.floor(Math.random() * quotes.length);
  console.log(random);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
  console.log(quote);
  console.log(person);
})