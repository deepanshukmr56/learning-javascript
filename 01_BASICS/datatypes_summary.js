
// // primitive types
// let Number = 254
// console.log(typeof Number);

// let sentence = "hello world"
// console.log(typeof sentence)

// let rainingOutisde= true
// console.log(typeof rainingOutisde);

// let emailId;
// console.log(typeof emailId);

// let bigNumber = 54374684646466464684866n
// console.log(typeof bigNumber);

// let temperature = null
// console.log(typeof temperature);
//so these primitive types console value in different types
//*****-----*****-----*****-----*****-----******-----****----****----****/



// // non-primitive
// let names = ["Alice", "Bob", "Charlie", "David", "Eva"];//this is an array
// console.log(typeof names);

// let myObject = {
//     Name: "deepanshu",
//     age: 23,
// }
// console.log(typeof myObject);
//these non-primitive types are function, arrays and objects
//on checking typeof array it gives object and object also gives object and fuvtion gives function object type

// __________________________________________________________________________________

//this is example of primitive 
let notebook= "clasamate"

let newNotebook = notebook

newNotebook= "schoolmate"
console.log(newNotebook);
console.log(notebook);




//this is example of non-primitive
let myObject = {
    Name: "deepanshu",
    age: 23,
}

let newObjects = myObject
newObjects.Name = "deepak"

console.log(newObjects);
console.log(myObject);