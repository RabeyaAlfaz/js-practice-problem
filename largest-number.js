function largestNumber(numbers)
{
    console.log(numbers);
    for (let i = 1; i <= numbers.length; i++) {
        // checking if number of 0 index is less than number of 1 index
      if(numbers[0]<numbers[i])
      {
       numbers[0]=numbers[i];
      }  
      else{
        numbers[0]=numbers[0];
      }
    }
    return numbers[0];
}


const numbers = [90, 30, 900, 50, 85, 800];
let maxNumber = largestNumber(numbers);
console.log(maxNumber);
