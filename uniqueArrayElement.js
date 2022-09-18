// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((c, index) => {
//     return chars.indexOf(c) === index;
// });

// console.log(uniqueChars);


let students = ["Rabeya", "Ranu", "Rita", "Rima", "Ranu", "Rima", "Rina"];

// find unique student name 
let uniqueStudent = students.filter((names,index) => 
{
return students.indexOf(names) === index;
})
console.log(uniqueStudent);

// find duplicate student name 
let duplicateStudent = students.filter((names,index) => 
{
return students.indexOf(names) !== index;
})
console.log(duplicateStudent);

// another way to remove duplicacy
let uniqueStudent2 = [...new Set(students)];
console.log(uniqueStudent2);
