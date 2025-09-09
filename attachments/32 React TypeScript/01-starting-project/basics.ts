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

// Type inference
let course = "React - The complete guide";
course = 1234; // <- Can't reassign value to a variable of a different type, which was assigned via type inference

// Union Types (multiple types)
let course2: string | number = "React - The complete guide";
course2 = 12345;

// Function types, parameters
