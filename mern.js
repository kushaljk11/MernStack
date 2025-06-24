// function mern() {
//     var a = 10
//     var b = 20
//     let a = 23
//     var c = a + b
//     console.log(c)
// }
// mern()

//arrow function
// const arrow = () => {
//     console.log("Hello, the sum of 1 2 is");
//     let a = 1;
//     let b = 2;
//     let c = a + b;
//     console.log(c);
//     return c;
//  }
// arrow();

// function add() {
//     console.log(1 + 2);
// }
// add();


// function add() {
//     let a = 20
//     let b = 30
//     let c = a + b
//     console.log(c)
// }
// add();

// const arrow = () => {
//     let a = 20
//     let b = 20
//     let c = a + b 
//     console.log("The sum of a and b is: " + c);
// }
// arrow()

//objects -> key value pair
// let person = {
//     name : "mama" //where person is a object abd name is a key and mama is a value
    
// }

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


