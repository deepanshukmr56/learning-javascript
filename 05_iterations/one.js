for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(`this is ${i}`);
    
}
// the above code is a basic structure of for loop in javascript and the for loop also follows the scoping and creates block scope which means variables declared in the for loop are not accessible outside of for loop






// for (let i = 1; i <= 10; i++) {
//     const element = i ;
//     console.log(`table of ${i}`);
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);

//     }
    
// }
// the above code is the example of a nested for loop and we are printing table of 1 to 10 here





// const heroes = ["batman", "superman", "thor"]
// for (let index = 0; index < heroes.length; index++) {
//     console.log(`your survivor is ${heroes[index]}`);
    
// }
// in the above code we are applying for loop on an array





let imposter = 5
// for (let imposter = 1; imposter <= 10; imposter++) {
//     console.log(`examining ${imposter}`);
//     if (imposter == 5) {
//         console.log(`${imposter} (imposter found)`);
//         break // the break keyeord is used to stop the loop in between. when the main purpose of loop is acheived then it helps in to terminate the processing of loop.
//     }
    
// }








// for (let imposter = 1; imposter <= 10; imposter++) {
//     console.log(`examining ${imposter}`);
//     if (imposter == 5) {
//         console.log(`${imposter} (imposter found)`);
//         continue //It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
//     }
    
// }