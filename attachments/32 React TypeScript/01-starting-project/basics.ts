// Function types, parameters
function add(a: number, b: number): number {
  return a + b;
}

function printo(value: any) {
  // (This function will be of type void)
  console.log(value);
}

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

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Chickenboy",
  age: 30,
};

let people: Person[]; // An array of objects
people = [
  {
    name: "Chickenboy",
    age: 30,
  },
  {
    name: "Pizzaface",
    age: 50,
  },
];

// Type inference
let course = "React - The complete guide";
course = 1234; // <- Can't reassign value to a variable of a different type, which was assigned via type inference

// Union Types (multiple types)
let course2: string | number = "React - The complete guide";
course2 = 12345;
