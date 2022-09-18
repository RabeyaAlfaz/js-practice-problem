function getCake(studentmarks)
{
    let student = Object.keys(studentmarks);
    let marks = Object.values(studentmarks);
    console.log(marks);
    let first =  Math.max.apply(null, marks); 
    console.log(marks);

    for (let i = 0; i < marks.length; i++) {
        //   console.log(marks[i]);
        if (marks[i] == first) {
            let highestIndex = marks.indexOf(marks[i]);
            let studentIndex = student.indexOf(student[i]);
            if (highestIndex === studentIndex) {
                let cakeGivenTo = student[studentIndex];
                console.log(cakeGivenTo);
            }
            
        }
    }
}
let studentmarks = {"Jim":84,
            "Dela":99,
            "Chinku":77
            };
getCake(studentmarks);