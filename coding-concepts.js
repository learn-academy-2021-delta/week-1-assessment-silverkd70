// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: I must be honest and say that I knew this was an array attribute, but for some reason I counted it using the index count.  I believe that I looked at the string and immediately thought "idex it, Kev", but now I realize that the variable is being called by the .length attribute which will count the string based on the actual placement number count.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: Since this code is executing the request for the index location of [3], the count will utilize the indexing count, beginning from the zero placement value.  So, the last "l" in the greeting variable is in index placement [3]. [4] would return the letter "o" and not another "l".


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: undefined
// b) Verify and explain: This was a good one and got me.  I looked at it for awhile and thought that there is no way that the bracketed parameter would call on index. I assumed that since "index" was not part of the languages array that the terminal would error based on "index" not being defined.  Now I see that the bracketed paramater calls on the index variable and defines the number 1, which returns as "Ruby" being the string located at index [1] in the languages array.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// weekendDays = weekendDays.map(function (x) {
//     return x.toUpperCase() //trying new things that I'm learning about loopback methods to arrays. The .map handler is one way to perform a one time function to change each string array to uppercase.
// })
// console.log(weekendDays) //I called this output just to see if the code above would work.
// console.log(weekendDays.toUpperCase())

// a) Your answer: nothing will happen
// b) Verify and explain: toUpperCase() function does not work on arrays, therefore the terminal produced a "TypeError: weekendDays.toUpperCase()) is not a function".  toUpperCase() is a built-in function to convert a string to upppercase letters. Apparently, the toUpperCase() function is not supported in an array.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: Originally thought 3, until I saw the typeof, then I had a tough time figuring it out until I ran it.(truth be told)
// b) Verify and explain: I was able to use the typeof operator in the code-challenge, so I am new to it.  However, I now understand why the verified response was 'number'.  The code is executing the console to output the type of the dataTypes.lenght, that would be 3, which is a 'number'.  Ahha! I get it now! 
