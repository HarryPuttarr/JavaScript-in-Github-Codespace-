// learning about all the diffrent variables/constants print stmnts and comments in JS

const accountId = 12321 // use const when you want to put a constant value in a variable
let accountEmail = "xyz@hotmail" // use let when you want to use a variable/changeable value in variable
var accountPass = "123" // var does same as let but with scope issues so it is highly recommmended TO NOT USE var due to block scope and functionality scope issues
accountCity = "mumbai"  // we can directly asssign a variable values in JS but it is reccommended not to do this for safety
let accountState  // just declaring a variable and not assingning any value like accountState variable will result in "un-defined" error!


// accountId = 22213  // this will not be allowed for accountID variable since we have put it as const (constant)
accountEmail = "zzz@hotmail" // the value of accountEmail variable will be updated and latest value will show since we used "let"
// similarly the value of variables stored in "var" can also be updated but we don't use var anymore
accountCity = "chennai" // will update the vakue of accountCity variable
console.log(accountId); // console.log() is the JS equivalent of print statement in python i.e. used to print stuff on screen

console.table([accountId, accountEmail, accountPass, accountCity, accountState]) /* console.table([]) lets you print multiple values in JS in 
a tabular format */


