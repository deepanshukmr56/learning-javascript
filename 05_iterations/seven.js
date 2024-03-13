// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // let updatedNumbers = numbers.filter( (num) => num + 10 )
// // console.log(updatedNumbers);
//with the help of The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value.




//****************for each *************************/
// this is the method to do the same using foreach method
// let container = []
// numbers.forEach( (num) => {
    //     if (true) {
        //         // let a = num + 10
        //         let a = container.push(num + 10)
        //         return a
        
        //     }
        // } )
        // console.log(container);







//************2nd foreach example*****************/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNumbers = []

// numbers.forEach( (num) =>{
//     newNumbers.push(num + 10)
// } )

// console.log(newNumbers);








//*******************chaining***************** */
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let newNumbers = numbers.map( (num) => (num * 10)).map( (num) => (num + 10) ) .filter( (num) => (num >= 25) )
    //as we can see in the above code we can apply multiple methods on a single array and the methods are keep on applying on the updated value    


    console.log(newNumbers)
    