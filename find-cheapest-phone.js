const phones = [
    {name:'Samsung', camera:12, storage:'32gb', price:20000,color:'silver'},
    {name:'Samphony', camera:10, storage:'28gb', price:10000,color:'golden'},
    {name:'iphone', camera:6, storage:'32gb', price:80000,color:'green'},
    {name:'walton', camera:4, storage:'8gb', price:5000,color:'silver'},
    {name:'Romelo', camera:12, storage:'2gb', price:2000,color:'black'},
    {name:'Remon', camera:12, storage:'10gb', price:8000,color:'redish'}
]

const phonePriceArray = [];
const phoneNames = [];
for (let i = 0; i < phones.length; i++) {
    const names = phones[i].name;
    const phonePrice = phones[i].price;
    phonePriceArray.push(phonePrice);
    phoneNames.push(names);
}

let minpriceIndex = indexOfMin(phonePriceArray);
console.log(minpriceIndex);
for (let i = 0; i < phoneNames.length; i++) {
if (phoneNames.indexOf(phoneNames[i]) === minpriceIndex) {
    console.log(phoneNames[i]);
}
}

function indexOfMin (arraymin)
{ 
let minimumPriceIndex = arraymin.indexOf(Math.min(...arraymin));
return minimumPriceIndex;
}

   