//object
// person is a object, name is a key and mama is a value
let person = {
    name:"mama",
    age: 20,
    address: "ktm"
}
console.log(person) // to access the whole object
console.log(person.name) // to access the name of a person
person.age = 25; // to change the age of a person
console.log(person.age) // to access the age of a person
console.log(person.address) // to access the address of a person

//bracket notation
person.name = "mama samdi"
console.log(person["name"]); //using bracket notation to access the name of a person
person.address = "itahari"
console.log(person["address"]);
