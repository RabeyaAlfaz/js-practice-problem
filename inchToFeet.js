function inchToFeet(inch,mile)
{
let feet = 0.0833333;
let inchToFeet = feet*inch;
let km = 1.60934;
let mileToKm = km*mile;
console.log(inchToFeet,mileToKm);
}
const value = inchToFeet(100,50);
console.log(value);


function checkEvenOdd(num) {
    if(num%2 == 0){
    console.log("The value is Even");
    }
    else
    {
        console.log("The value is Odd");
    }
}

checkEvenOdd(100);


function checkLeapYear(year) {
    if (year%100==0 && year%400!=0) {
       console.log("Leap Year"); 
    }
    else{
        console.log("Not a leap year");
    }
}
checkLeapYear(1900);

// get sum of an array 
function getsumOfAnArray(numbers) {
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i];
}
console.log(sum);
}

// sum of odd numbers
function getoddSum(numbers) 
{
    const oddNumbers =[];
 for (let i = 0; i < numbers.length; i++) {
    
    if (numbers[i]%2 !== 0) {
      oddNumbers.push(numbers[i]);
    }
 }   
 let oddSum = getsumOfAnArray(oddNumbers);
 return oddSum;
}

let myNumbers =  [10, 20, 30, 55, 65, 89, 50, 70, 90];
getoddSum(myNumbers);
getsumOfAnArray(myNumbers);

// get the factorial using for loop

function getFactorialOfANumber(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact*=i;
    }
    return fact;
}

const factorial = getFactorialOfANumber(4);
console.log(factorial);
