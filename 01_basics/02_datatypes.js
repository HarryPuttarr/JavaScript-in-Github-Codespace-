/* ALL ABOUT THE DATATYPES IN JAVASCRIPT */

// JS follows the ECMA script standards (like PEP8 for python), read it, make sure to read atlest MDN mozilla firefox standard if not the full ECMA
// it is imperative that the code we write in JS is readable
// we can either write or ignore/skip semicolon at the end, JS accepts both, but prefer no semicolon for simplicity
// prefer to use double quotes for storing string datatype values (although single quotes is also accepted)

let name = "vaani"
let age = 12

/* primitive data types in JS : */
// number (of range 2 to the power 52)
// bigint (for numbers greater than above, rarely used)
// string (stored in "")
// boolean (true/false)
// null (it is a standalone value as well as a datatype in JS) (if you search typeof of null, it will return 'object' datatype)
// undefined (for variable that are not defined) (typeof of undefined returns 'undefined' itself)
// symbol (used to find uniqueness in components)

/* non - primitive datatypes: */
// object 

console.log([typeof(name)]) // we can use the paranthesis or skip it and directly write : (typeof name)
console.log(typeof age) //we can use console.table([]) as well instead of console.log()
console.log(typeof null)
console.log(typeof undefined)