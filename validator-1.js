import validator from "validator"
let email ='test@gmail.com'
console.log(validator.isEmail(email))
let email1='testgmai'
console.log(validator.isEmail(email1))
var name="hello"
console.log(validator.isLowercase(name))
var name1="hEllo"
console.log(validator.isLowercase(name1))
var name2="hello"
console.log(validator.isEmpty(name2))
var name2=""
console.log(validator.isEmpty(name2))
