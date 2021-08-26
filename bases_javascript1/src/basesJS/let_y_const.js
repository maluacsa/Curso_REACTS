var variableVar = "VAR fuera del IF";
////////////////////////////////////
let variableLet = "LET fuera de IF";

if(true){
// eslint-disable-next-line no-redeclare
var variableVar = "VAR dentro del IF";
let variableLet = "LET dentro del IF";
console.log(variableLet);
}

console.log(variableVar);
console.log(variableLet);