// // objects can be declared in two ways first is literals and second is singleton

// //object literals

// const mySym = Symbol("key1")
// const user = {
//     //the left side of ":" is called as a key and treated as string and right side treated as a value to key.
//     [mySym]: "mykey1",//mySym is a symbol now. without "[]" they behave like a general strings in objects. and to put a symbol in a object firstly we need to declare the symbol otherwise it gives an error.
//     name: "deepanshu",
//     "roll no" : 2134715,
//     location: "mohali",
//     lookingForJob: true,
//     qualification: ["diploma", "graduate"]

// }
// //we can access keys using "console.log(user["keyname"])" 
// // console.log(user["roll no"]);

// // console.log(user);
// // console.log(typeof user[mySym]); //to console a symbol we need to add "[symbol name]" with object name

// user["roll no"] = 2134722 // with this we can update different keys available in our object
// // Object.freeze(user) // the freeze is used to freeze an object which means it cannot be update after being freezed.
// user["roll no"] = 2134715
// // console.log(user);

// user.greeting = function(){ //so we can declare functions too in objects the following is way to declare a function
//     console.log("Hello user");

// }
// user.greetingtwo = function(){
//     console.log(`my name is ${user.name}`);
    
// }

// console.log(user.greeting());// and we can call function in this manner 
// console.log(user.greetingtwo());
// const a = {
//     value: 'hello'
// };
// const b = {
//     value: 'world'
// };

const obj1= {
    a: "hello"
}

console.log(obj1.a);
delete(obj1.a)
console.log(obj1.a);