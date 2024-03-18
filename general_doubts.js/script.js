const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers  // the answer will be 1 because we destructing the array by assigning y to the first element in that array.



const[x,y,z] = numbers //now we are destructing the first three elements of array numbers
console.log(x, y, z);