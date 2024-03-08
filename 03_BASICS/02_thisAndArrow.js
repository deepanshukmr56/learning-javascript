// const user = {
//     username: "deepanshu",
//     userId: 2134715,
//     welcomeMessage: function() { //A function that is a property of an object is called its method.
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }
// // console.log(this); // on running this console log gives "{}" in output and only gives this output in node deno environment but in browser it gives windows as output

// user.welcomeMessage()
// user.username = "aman"
// user.userId = 2134710
// user.welcomeMessage()

// function user() {
//     let userId = 2134
//     console.log(this.userId);

// }

// user() // one running this piece of code it gives the undefined as output. it states that the "this" doesnt work with the functiond it only works with the methods of objects




//++++++++++++++++++++++++++++++   arrow function  ++++++++++++++++++++++++++++++++

// const hello = (number1, number2) => {
//     return number1 + number2
// }

// console.log(hello(10, 20));
// this above code is example of how a basic arrow function is created. this type of arrow function declaration is called explicit and in this curly braces are must and you need to return the value.



// const hello = (number1, number2) =>  (number1 + number2)

// console.log(hello(10, 20));
// this is also way to declare a arrow function and this one is called implicit. in this curly braces must not be used because if you use curly braces then it will change into explicit type and there using return is mandatory. it declares in a single line and going to be very useful in react.

