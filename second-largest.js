const numbers = [90, 30, 900, 850, 50, 85, 800];

let maxNumber2nd = maxNumber2(numbers);
console.log(maxNumber2nd);

function  maxNumber2(numbers) {
    let max = Math.max.apply(null, numbers)
    let index = numbers.indexOf(max);
      numbers.splice(index,1);
    let highes2 = Math.max.apply(null, numbers)
   return highes2 ;   
}