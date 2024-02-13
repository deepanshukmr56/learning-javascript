const userId= 2134715
let userName= "deepanshu"
var password= "12121212"//we can use var in place of let but prefer not to use because of issue in block scope and functional scope
userCity= "chandigarh"//you can also use this way to declare a varible but this is not a recommended practice.
var userState //the userState have no value in it and thats why it is giving "undefined" as output.
// userId= 2134722
// userId is a constant and cannot be updated and show error "assignment to be contant variable"
userName= "kunal"
userCity= "faridkot"
password= "12121213"
console.table([userId,userName,password,userCity,userState])