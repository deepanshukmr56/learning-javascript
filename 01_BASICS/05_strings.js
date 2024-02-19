const name = "deepanshu "
const mobileNo = 8484848484

// console.log(name + mobileNo);
//the above concatenation process is valid but sometimes it become chaotic to write and understand and also gives unvalid outputs



// console.log(`my name is ${name}and my mobile number is ${mobileNo}`);
//the above type is called as string interpolation and it is good practice as well as make code more readable


const gameName = new String ("clash of clans")
const str2 = undefined
// console.log(gameName.charAt(7));//this charat method is used to print character available at given index no.
// console.log(gameName[7]);//this also gives the same output as charat
// console.log(gameName.charCodeAt(10));// String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// console.log(gameName.codePointAt(0))
// console.log(gameName.concat(" ", str2))// concatenation method is used to concat two or more strings, if the one is not a string then it'll first converted to string and then concatenation applied
//console.log(gameName.endsWith("clans"));//determines whether a string ends with the characters of this string, returning true or false as appropriate. and the last character must be identical otherwise it gives output a false
// console.log(String.fromCharCode(181, 222, 653, 451));//tatic method returns a string created from the specified sequence of UTF-16 code units.Because fromCharCode() is a static method of String, you always use it as String.fromCharCode(), rather than as a method of a String value you created.
// console.log(String.fromCodePoint(5000, 6545, 7468, 9000));//static method returns a string created from the specified sequence of code points.






// let sentence = "the dev dog is older than your dog"
// let searchTerm = "d"
// let index = sentence.indexOf(searchTerm);

// console.log(`the index of "${searchTerm}" is ${index}`);

// index = sentence.indexOf(searchTerm, index + 1)

// console.log(`the index of second "${searchTerm} is ${index}`);
// the indexof is used to find the index of the present character or words in a string





// let sentence = "the dev dog is older than your dog"
// let searchTerm = "dog"
// let lastIndex = sentence.lastIndexOf(searchTerm);

// console.log(`the index of "${searchTerm}" is ${lastIndex}`);
// the lastindexof method is used to find index of last character or word available in a string.





// let str1 = "apple"
// let str3 = "orange"

// console.log(str3.localeCompare(str1));
// the localecompare is used to compare two strings
