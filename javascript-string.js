let array = [20, 30, 60, 80, "Rabeya Alfaz", true];
let myString = array.toString();
console.log(array);
console.log(myString);

let newArray = myString.split(",");
console.log(newArray);
// copied element to a new array without changing old array element
let sliceArray = array.slice(2,4);
console.log(sliceArray);
 
// Remove array element
let spliceArray = array.splice(2,4);
console.log(array);


let oneString = "Hello .hi . How Are You ?.I'm waiting for you";
console.log(oneString);
 let lowerString = oneString.toLowerCase();
 let splitOneString = lowerString.split(' ');
 console.log(splitOneString);