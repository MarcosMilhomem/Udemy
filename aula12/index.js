let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

varA = varB;
varB = varC;
varC = varA;

console.log(varA, varB, varC);