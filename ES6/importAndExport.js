export const data = [1,2,3];


//type in another js
import {data} from './importAndExport.js';
let updatedData = data;

updatedData.push(5);
console.log(updatedData);