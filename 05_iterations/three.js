// for (const iterator of object) {  // here iterator refers to a some variable and here object represents a broad number of terms like strings, array, object etc. and for of loop automatically run the whole loop in ascending order

//inside of curly braces we need to run set of statements we want to execute
    
// }


let arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);    
}
//the above code is an example of forof loop


let hello = "hello world!"
for (const hi of hello) {
    // console.log(hi);
}
//the above code show that we can apply it on different datatypes too




let map1 = new Map // the "Map" is a special kind of object. it holds key-value pairs and remembers the original insertion order of the keys. 
map1.set("pen", "stationary")
map1.set("grapes", "fruit")
map1.set("potato", "vegetable")
map1.set("pen", "stationary") // on running this code the line 29 doesn't printed because  A key in the Map may only occur once; it is unique in the Map's collection and the line 29 is repeated.

// console.log(map1);

for (const abc of map1) {
    console.log(abc);
}


for (const [key, value] of map1) {// thats how key and value are been printed
    console.log(`${key} : ${value}`);
    
}//this code is the example of printing key and their values in case of "Map" 