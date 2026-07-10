// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// when comaring two values in JS, always make sure that they are of the same types!

// console.log("2" > 1);  //here since two different datatype values are being compared, the result is unpredictable , so don't do it this way!!
// console.log("02" > 1);

console.log(null > 0); //null will sometimes convert to NaN or sometimes to 0 and thus is unpredictable and not reccomended 
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0); //same comments as above
console.log(undefined > 0);
console.log(undefined < 0);


// == this only campares/checks the values 
// === this is called strict check in JS, this checks both the values as well as datatype of both values

console.log("2" === 2);