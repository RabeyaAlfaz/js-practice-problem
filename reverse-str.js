let oneString = "Hello,I'm rabeya Alfaz";
let splitedArray = oneString.split('');
console.log(splitedArray);

let reverseArray = splitedArray.reverse(); 
let reverseString = reverseArray.toString();
let withoutCommas = reverseString.replaceAll(',','');
console.log(withoutCommas.replaceAll(' ',''));

let splitedByWordArr = oneString.split(' ');
let reverseArrByWord = ((splitedByWordArr.reverse()).toString()).replaceAll(',',' ');
console.log(reverseArrByWord);