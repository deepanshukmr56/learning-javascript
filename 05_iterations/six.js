// const langs = ["cpp", "python", "ruby", "javascript", "java"]
// const code = langs.forEach( (items)=> {
//     console.log(items);
//     return items
// } )
// console.log(code);
// //from the above code it is stated that the foreach does not return any value, on returning we only get undefined






const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]// so here we are using filter method and it also uses call back function like foreach loop 
// let numBox = numbers.filter( (num) => num > 4 ) // in line no 15 we are using the arrow fuction and in this we dont use either braces and curly braces and this we must end the condition in single line
// let numBox = numbers.forEach( (num) => num > 4 ) // in line no 15 we are using the arrow fuction and in this we dont use either braces and curly braces and this we must end the condition in single line // if we try same thing with same manner in foreach them we will receive the undefined as output
// let numBox = numbers.filter( (num) => (num > 4) ) // in this line we are using braces 
// let numBox = numbers.filter( (num) => {return num > 4} ) // when we use curly braces for condition then it will become necessary to return the value or it will console the empty array


//************lets do the same with foreach*************
// let numBox = []
// numbers.forEach( (num) => {
//     if (num > 4) {
//         numBox.push(num)
//     }
// }) // in this manner we can do the same thing with foreach but we need to use if statement inside of callback function

// console.log(numBox);








const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// let userbooks = books.filter( (bk) => bk.genre === "Non-Fictio"  )
// let userbooks = books.filter( (bk) => bk.genre === "Non-Fiction"  || bk.publish >= 2000)
let userbooks = books.filter( (bk) => bk.genre === "Non-Fiction" && bk.publish >= 2000)

console.log(userbooks);