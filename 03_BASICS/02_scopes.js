// at first we only console the if statement and after testing all three one by one we move onto test with below three statements
// let two = 40
// const three = 50
// var one = 30

// if (true) {
//     let two = 4
//     const three = 5
//     var one = 3
    
// }

// console.log(two); // on consoling only if statements it gives an error that the variable is not defined. after defining the variables block scope values doesnt imact the global elements. and we used them in modern code writing
// console.log(three); // on consoling only if statements it gives an error that the variable is not defined
// console.log(one); //on consoling it gives the output 3 which is not a valid transaction because the "one" never defined. and on defined it in global scope it keeps on giving value from block scpe of if statement. and thats why the "var" is not using nowadays 


//++++++++++++++++++++++++++ NEW ++++++++++++++++++++++++++++
// now we are going to see the case of a scope level.

if (true) {//1
    const first = "hello"
    if (first === "hello") { //2
        const second = " world"
        console.log(`${first} ${second}`); // this is part of code will always gonna be execute because it presents in single scope and always remember that a child scope always take values from their parent but parents dont, in this case the #1 is the parent and #2 is child. and thats why we are able to execute this console log easily

    }

    console.log(second);// this console gives an error because the second is defined in #2 second scope and thats why the term second giving error not defined

}
console.log(first); // this console gives an error because the first is defined #1 scope and thats why the term first giving error not defined


