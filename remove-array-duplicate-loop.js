function removeDuplicate(names) {
    console.log(names);
    const uniqueName = [];
    for (let i = 0; i < names.length; i++) {
        const namesElement = names[i];
        if (uniqueName.includes(namesElement) === false) {
            uniqueName.push(namesElement);
        }
        
    } 
    console.log(uniqueName);

}

let students = ["Rabeya", "Ranu", "Rita", "Rima", "Ranu", "Rima", "Rina"];

removeDuplicate(students);