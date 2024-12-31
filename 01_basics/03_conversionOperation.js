// let score = '33';
// let score = '33abc';
// let score = null;
let score = undefined;
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
'33' => 33 (conversion successfull)
'33abc' => NaN (but conversion is successfull)
true => 1; false => 0
*/

let isLoggedIn = 1;
let boolIsLoggedIn = Boolean(isLoggedIn);
// console.log(boolIsLoggedIn);

/*
1 => true; 0 => false
'' => false
'string' => true
*/

let number = 33;
let strNumber = String(number);
console.log(strNumber);
console.log(typeof strNumber);
