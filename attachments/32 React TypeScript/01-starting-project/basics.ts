// Primitives
let age: number;
let userName: string;
let isInstructor: boolean = true;
age = 12;
userName = "Bob";

console.log(age, userName, isInstructor);
// Complex Types

let hobbies: string[];
hobbies = ["Baseball", "Cooking", "Beer"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Chickenboy",
  age: 30,
};

let people: {
  name: string;
  age: number;
}[]; // An array of objects

// Function types, parameters
