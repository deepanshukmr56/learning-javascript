// Immediately Invoked Function Expressions (IIFE)
// it used to create a private scope for variables, preventing them from polluting the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//using paranthesis and fill the function into them and a IIFE is created

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //in this manner we can make an IIFE of an arrow function