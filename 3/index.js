/*   Differenec between Let, Const and Var*/

// var is function scoped, it means all x is accessible throughout the entire func even if its declared inside an block such as if\
function exampleVar() {
  if (true) {
    var x = 10;
    console.log(x); // output : 10
  }
  console.log("inside function exampleVar : ", x); //output : 10
}

exampleVar();
//console.log(x); // Uncaught ReferenceError: x is not defined

// let is block scoped , its means its accessible only within the block
function exampleLet() {
  if (true) {
    let y = 20;
    console.log(y); // output : 20
  }
  // console.log("inside funstion exampleLet: ", y); //throws ReferenceError: y is not defined
}
exampleLet();

//console.log(y); //throws ReferenceError: y is not defined

// const is similar to block . its also block scoped but major differnec between let and const is const does not allow re-assignment of variable
function exampleConst() {
  if (true) {
    const z = 30;
    console.log(z); //output : 30
  }

  // console.log("inside function exampleConst : ", z);//throws ReferenceError: z is not defined
}

exampleConst();

console.log(z); //reference error z, is not defined
