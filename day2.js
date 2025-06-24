// //object
// // person is a object, name is a key and mama is a value
// let person = {
//     name:"mama",
//     age: 20,
//     address: "ktm"
// }
// console.log(person) // to access the whole object
// console.log(person.name) // to access the name of a person
// person.age = 25; // to change the age of a person
// console.log(person.age) // to access the age of a person
// console.log(person.address) // to access the address of a person

// //bracket notation
// person.name = "mama samdi"
// console.log(person["name"]); //using bracket notation to access the name of a person
// person.address = "itahari"
// console.log(person["address"]);


let student = {
    name: "Mama",
    class: "1",
    marks: {
        math: 95,
        science: 90,
        english: 85
    }
}

for (let marks in student.marks) {
    console.log(`Subject: ${student.marks[marks].subject}, Score: ${student.marks[marks].score}`);
}


let totalscore = 0;
let studentnumber = 0

for (let marks in student.marks) {
    totalscore = student.marks[marks] + totalscore;
    studentnumber++;
}
console.log("Total score: " + totalscore);

let average = totalscore / studentnumber;
console.log("Average score: " + average);

if (average >= 40) {
    console.log("You are passed")
} else {
    console.log("Fail")
}