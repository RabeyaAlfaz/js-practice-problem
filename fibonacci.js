let n1 = 0;
let n2 = 1;
var nextNum = n1+n2;
console.log(n1,n2,nextNum);
for (let i = 0; i < 10; i++) {
   let temp = n1; 
    n1 = n2;
    n2 = nextNum;
    nextNum = n1+n2;
    console.log(nextNum);
}