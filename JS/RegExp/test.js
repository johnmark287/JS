// Finds all the spaces at the biginning and at the end
let hello = "   Hello, world!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, '');

console.log(result);
console.log(hello);
