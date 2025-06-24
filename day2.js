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
let totalscore = 0;
let studentnumber = 0;
for (let stud in student) {
    for (let marks in student[stud].marks) {
        totalscore = student[stud].marks[marks] + totalscore;
        studentnumber++;
    }
    console.log("Student name: " + student[stud].name);
    console.log("Total score: " + totalscore);

    let average = totalscore / studentnumber;
    console.log("Average score: " + average);

    if (average >= 40) {
    console.log("You are passed");
    } else {
        console.log("Fail");
    }
}

let classtotalmarks = 0;
let classstudentnumber = 0;
for (let stud in student) {
    for (let marks in student[stud].marks) {
        classtotalmarks = student[stud].marks[marks] + classtotalmarks;
        classstudentnumber++;
    }
}

let classaverage = classtotalmarks / classstudentnumber;
console.log("Class average score: " + classaverage);
console.log("Class total marks: " + classtotalmarks);