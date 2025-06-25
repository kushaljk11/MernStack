//function statement = defining function
//syntax
// function a(parameter) {
//     console.log("mama gay")
// }

//function expression = to store a funcion in a variable
// let b = function() {
//     console.log("mama gay2");
// }
// a();
// b();

//function declaration
//annonymous function
//named function expression
// //arrow function
//     add = () => {
//     a = 1
//     b = 2
//     console.log(a + b);
// }
// add();

//fetch
fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
    console.log(response);
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})


// // function greeting() {
// //     console.log("Hello mama ");
// // }
// // //for interval
// // // setInterval(greeting, 1000);

// // //for timeout
// // setTimeout(greeting, 1000);

// //high order function
// // function greeting(greeting) {
// //     return function name(name) {
// //         console.log(greeting, name);
// //     }
// // }
// // const greetnaaste = greeting("Samdi");
// // greetnaaste("Mama");

// //first class function
// // console.log("Hello");
// // function greeting(greeting) {
// //     console.log("Hello mama")
// // }
// // setTimeout(greeting, 1000);
// // console.log("Hello sathiharu");

// //asyn / await

// //promises function

// // function promisefuntion() {
// //     return new Promise(function (resolve, reject) {
// //         resolve("Samdi Mama");
// //     });
// // }

// // promisefuntion().then(function(data) {
// //     console.log(data);
// // })

// function status(name) {
//     return new Promise(function (resolve, reject) {
//         if (name=="success") {
//             resolve("Successfulllllllll");
//         } else {
//             reject("Failed");
//         }
//     });
// }
// status("success").then(function(data){
//     console.log(data);
// }).catch(function(dataerror) {
//     console.log(dataerror);
// });

// async function asynfunction () {
//     try {
//         const data = await status("jhsdji");
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }

// asynfunction();

// let detail = {
//     firstname: "Kushal",
//     lastname: "JK",
//     email: "kushalkattel0408@gmail.com",
//     password: "kushal6612",
// };

// function promisefunc(email, password) {
//     return new Promise(function (resolve, reject) {
//         if (email== detail.email && password == detail.password) {
//             resolve("Login Successfully");
//         } else {
//             reject("Login Failed");
//         }
//     });
// }

// async function authentication () {
//     try {
//         const data = await promisefunc("kushalkattel0408@gmail.com", "kushal6612");
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// authentication();


