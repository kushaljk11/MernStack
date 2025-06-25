let student = {
    student1: {
        name: "Mama",
        class: "1",
        marks: {
            math: 95,
            science: 90,
            english: 85
        }
    },    
    student2: {
        name: "Mama2",
        class: "1",
        marks: {
            math: 95,
            science: 90,
            english: 85
        }
    },
    student3: {
        name: "Mama3",
        class: "1",
        marks: {
            math: 95,
            science: 90,
            english: 85
        }
    }
}

for (let stud in student) {
    console.log(stud, student[stud]);
}

for (let stud in student) {
    console.log(stud, student[stud].marks);
}

let totalmarks = 0
let average = 0
for (let stud in student) {
    for (let marks in student[stud].marks){
        totalmarks = totalmarks + student[stud].marks[marks];

    }
    console.log("Student Name: " + student[stud].name);
    console.log("Total marks: " + totalmarks);

    average = totalmarks / 3
    console.log("Student name: " + student[stud].name);
    console.log("Average marks: " + average);

    if (average >=40) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

classtotal = 0
for (let stud in student) {
    for (let marks in student[stud].marks){
        classtotal = classtotal + student[stud].marks[marks];
    }
}
classaverage = classtotal / 3
console.log("Class average score: " + classaverage);
console.log("Class total marks: " + classtotal);

//day 2