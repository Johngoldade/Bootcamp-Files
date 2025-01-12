// Declares student variable. If the value of the variable will change, use the let keyword.
let studentName;
let myName
let myAge = 26
// Uses assignment operator(=) to assign a value
let studentAge = 32;
myName = "John"
// Alternatively, if the value of the variable will not change, use the const keyword.
const teacherName = 'Abdul';
var teacherAge = 48;

// To re-assign a variable, use only the variable's name
studentName = 'Tonya';
studentAge = 52;

// Variables created with the const keyword cannot be reassigned. Uncomment the following line to see the error:
// teacherName = 'Melanie';

// To access a value stored in a variable, use the variable's name
console.log(studentName);

// To combine the message with a variable value use the template literal syntax
// Logs 'My name is '
console.log('My name is ');

// Logs 'My name is Tonya'
console.log(`My name is ${studentName}`);
console.log(`My teacher's name is ${teacherName}`);
console.log(`My teachers age is ${teacherAge}`)
console.log(`The student's age is ${studentAge}`)
console.log(`My name is ${myName}`)
console.log(`My age is ${myAge}`)
// Traditionally, the var keyword was used to create variables, but modern javaScript has replaced it with let/const

