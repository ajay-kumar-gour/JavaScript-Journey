// variable declared using VAR, can be redecalred and re-assigned

var CEOname = "Robert";
console.log(CEOname);

var CEOname = "Michael";
console.log(CEOname);

CEOname = "Subramanian";
console.log(CEOname);

// variable declared using LET , can be re-assigned but cannot be re-declared

let director = "Zachman";
console.log(director);

//let director = "Joe" // throws  SyntaxError: Identifier 'director' has already been declared
director = "Crux";
console.log(director);

//var declared using CONST , cannot be redeclared and cannot be reassigned

const PII = 3.14;
console.log(PII);

//const PII = 5.14; //throws  SyntaxError: Identifier 'PII' has already been declared

//PII = 500;//throws TypeError: Assignment to constant variable.

//const age; // throws SyntaxError: Missing initializer in const declaration
