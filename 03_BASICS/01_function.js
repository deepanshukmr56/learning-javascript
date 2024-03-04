//we are going to learn about functions
// function arthmetic(number1, number2){ //a fuction is declared in this way here "arthimetic" is name of function and "number1, number2" are two parameters of function "arthimetic " 
//     return number1 + number2 //returns the value and basically used in if else statements.
//     console.log("hello world");// this can never be returned because the after statements of return doesn't printed
// }
// const sum = arthmetic(45, 45) //we declare a variable "sum" and "(45, 45)" these values are called arguments 

// console.log(`the sum is ${sum}`); // consoles the sum
// this above code is a basic structure of a function


// function theCartPrice(...item1){ //these three dots "..." are called rest opertor, it is used to pass multiple arguments  in a single parameter
//     return item1
// }

// console.log(theCartPrice(200, 400, 600, 450));//suppose these are prices of items we added into our shopping cart and with the help of rest operator we can easily put them in a single parameter in the form of array.
function theCartPrice(firstItem , secondItem, ...item1){
    return item1
}

console.log(theCartPrice(200, 400, 600, 450));
