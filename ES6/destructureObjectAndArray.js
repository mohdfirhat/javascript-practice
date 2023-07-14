//For Object
const personalInformation = {
  firstName : 'Dylan' ,
  lastName : 'Israel'
};
//can use this instead of personalInformation.firstNane
const {firstName:fn, lastName:ln} = personalInformation;
console.log(`${fn} ${ln}`);

//For Array
let [firstNames,middleName,lastName] = ['Dylan','Coding God','Israel'];
lastName = 'Clement';

console.log(lastName);