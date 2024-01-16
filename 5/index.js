//Hoisting with VAR and Functions

/*
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the 
top of their containing scope during the compilation phase before the code is executed. 
This means that you can use variables or call functions in your code before they are declared. */

console.log("value of x before :", x); // output : x == undefined

var x = 5;

console.log("value of x after :", x); // output : x == 5

// //At this point, hoistFun is declared but not yet executed.
// Since JavaScript hoists function declarations, the function is known, but it has not been called yet.
//Hence output is the whole function itself.
console.log("value of hoistFun before (without func call) :", hoistFun);

/*  output :  ƒ hoistFun() {
  console.log("Hola world");
} */

console.log("value of hoistFun ( with called function) before :", hoistFun());
//This prints the value of hoistFun along with the result of calling the function.
// Now, the function hoistFun is executed.Inside the function, it logs "Hola world".
// Since the function doesn't explicitly return a value, it returns undefined

function hoistFun() {
  console.log("Hola world");
}

// console.log("value of hoistFun after :", hoistFun()); // output : Hola World

console.log(hoistFun2());
// output : Holla World 2 and then the returned value , here in this case : true
function hoistFun2() {
  console.log("Holla World 2");
  return true;
}

// //Unlike var, the variables declared with let and const are hoisted to the top of their block scope
// but are not initialized until the actual code execution reaches the point of declaration.
// As a result, accessing them before the declaration results in a ReferenceError.
console.log(vulName); // throws ReferenceError: Cannot access 'vulName' before initialization
let vulName = "Apache Log4j";

console.log(riskAttribute); // throws ReferenceError: Cannot access 'riskAttribute' before initialization
const riskAttribute = "Critical";
