// const numbers =[1, 2, 3] //the array named numbers having some values
// let newNumbers = numbers.reduce(  (accumulator, currentValue) => { // in reduce's callback function we need to take two variables 
//     console.log(`${accumulator} value and ${currentValue}`); //here we are printing value of running accumulator and currentvalue
//     return accumulator + currentValue}, 5) // returning the value and here 5 is the part of the format at the beginning the value of accumulator container is 5 after first round it keeps on updating. and default value will be 0

// console.log(newNumbers);
// so this code is a basic code for reduce method. here we need a accumulator and a current value. the accumulator holds the updated value and the current value holds the next value comes while the loop in execution







const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let priceTopPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 0 )
console.log(priceTopPay);