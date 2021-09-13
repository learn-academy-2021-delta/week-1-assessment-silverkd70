// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// I would write this code based on the conditionals if/else if/else and it would look like this...  
// I would begin with the "if" statement with condition1 (temp) being strictly equal to the at boiling point value, as a number. Then, use the console method to execute the block of code that will respond appropriately for this true condition, which should include the variable, concatenation operators, and string. 
// Next, I would include an "else if" statement to set condition2 (temp) less than the at boiling point value. Then, use the console method to execute the block of code that will respond appropriately for condition 1 being false and this condtion2 being true, which should include the variable, concatenation operators, and string.  
// Finally, I would add an "else" statement without any condition, since all other values will be determined as condition1 and condition2 being false.  Then, use the console method to execute the block of code that will respond appropriately for the false conditions, which should include the variable, concatenation operators, and string. 

var temp = 35
//var temp = 350
//var temp = 212

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

if (temp === 212) {
    console.log(temp + " is at boiling point"); //using the if condition to set a strict equality, along with the appropriate console response for the temp at boiling point
}else if (temp < 212) {
    console.log(temp + " is below boiling point"); //using the else if condition to set the temp variable less than boiling point, along with the appropriate console response below boiling point
} else {
    console.log(temp + " " + "is above boiling point"); //using the else condition to console the appropriate response above boiling point, which covers all false conditions not met. Used an additional concatenation operator for the space in this string.
}


// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

//I would write this code by creating a new variable name that identifies the total numbers being combined to function using the array accesor to merge and combine myNumbers1 with myNumbers2.  Finally, I would use the console method to output the new variable name along with the .length array attribute so it only outputs the number of elements in the combined arrays.

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

var totalNumbers = myNumbers1.concat(myNumbers2); //declaring a new variable and using the array merge accesor. 

console.log(totalNumbers.length); //using the .length accesor for the console to return the number of elements in the combined arrays.

// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

//In would write this code by creating a function and utilizing built-in accesors like this...

//First, I would create a function statement, by naming the function appropriately to describe reversing the letters of a string and without any paramaters defined within the parentheses. This will allow for the function to be declared only as an action, based on the function scope and the variables defined within it.

//Within the function curly brackets, begin by using the built-in split() accesor and create two seperate variables for the string "charlie" and the string "delta". Set the two seperate variables to be equal to their orginal defined variable and utilizing the split() built-in accesor function with double quotes, without spaces inside of the string parentheses.

//Next, utilizing the built-in reverse() accesor create two seperate variables for the strings "charlie" and "delta". Set the two seperate variables to be equal to their defined split() variables and utilizing the reverse() built-in accesor function.

//Next, utilizing the built-in join() accesor create two seperate variables for the strings "charlie" and "delta". Set the two seperate variables to be equal to their defined reverse() variables and utilizing the join() built-in accesor function with double quotes, without spaces inside of the string.

//Next, create an array variable to joins the two seperate variable strings and listing them in string number order.  Then, return the new array variable in order to stop the function execution.  End the curly bracket.

//Finally, I would use the console method to output the function name.

var myString1 = "charlie"
var myString2 = "delta"

function reverseLetters() {
    //creating a function using built-in accesors.
     var splitCharlie = myString1.split("");
     var splitDelta = myString2.split("");
     //created new variables to seperate each string into an array of the string.
     var reverseCharlie = splitCharlie.reverse();
     var reverseDelta = splitDelta.reverse();
     //created new variables to reverse the array of the string.
     var joinCharlie = reverseCharlie.join("");
     var joinDelta = reverseDelta.join("");
     //created new variables to rejoing the reversed array back into a string.
     var joinMyStrings = [joinCharlie, joinDelta]; //created new array to order myString1 and myString2 variable.
     return joinMyStrings; //stopped the function execution.
 }
 console.log(reverseLetters()); //using the .created function for the console to display the reverse lettering of the array strings.

// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

// I would write this code based on the conditionals if/else and it would look like this...

// I would begin with the "if" statement with condition1 (number1) being less than condition2 (number2). Then, use the console method to execute the block of code that will substract condition2 from condition1, so the console output is a positive number.

//Finally, I would add an "else" statement without any condition, since we only need to execute one addtional console method. Then, use the console method to execute the block of code that will substract condition1 from condition2, so the console output is a positive number.

// var number1 = 42
// var number2 = 27

var number1 = 7
var number2 = 19

if (number1 < number2) {
    console.log(number2 - number1); //using the if statement to determine if condition1 is less than condition2, then subtracting condition2 from condition1 to output a positive number.
} else {
    console.log(number1 - number2); //using the else statement, since there is nothing else to do besides reverse the subraction conditions to output a positive number.
}

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

// In would write this code based on the conditionals if/else if/else and including the typeof operator. It would look like this...

// I would begin with the "if" statement using the typeof operator calling on the numberRefactor1 variable to be strictly equal to a string. Then, use the console method to execute the block of code that will respond appropriately for this true condition with the expected output message "Your input is not a number".

// Next, I would include an "else if" statement using the typeof operator calling on the numberRefactor2 variable to be strictly equal to a string. Then, use the console method to execute the block of code that will respond appropriately for this true condition with the expected output message "Your input is not a number".

//Next, I would add an "else if" statement with condition1 (numberRefactor1) being less than condition2 (numberRefactor2). Then, use the console method to execute the block of code that will substract condition2 from condition1, so the console output is a positive number.

//Finally, I would add an "else" statement without any condition, since we only need to execute one addtional console method. Then, use the console method to execute the block of code that will substract condition1 from condition2, so the console output is a positive number.

// var numberRefactor1 = 42
// var numberRefactor2 = "hello"

var numberRefactor1 = 27
var numberRefactor2 = 24

if (typeof numberRefactor1 === "string") {
    console.log("Your input is not a number"); //using the typeof operator in the if statement to set a truthy response if condition1 variable is strictly equal to a "string".
} else if (typeof numberRefactor2 === "string") {
    console.log("Your input is not a number"); //using the typeof operator in the if statement to set a truthy response if condition2 variable is strictly equal to a "string".
} else if (numberRefactor1 < numberRefactor2) {
    console.log(numberRefactor2 - numberRefactor1); //using the else if statement to determine if condition1 is less than condition2, then subtracting condition2 from condition1 to output a positive number.
} else {
    console.log(numberRefactor1 - numberRefactor2); //using the else statement, since there is nothing else to do besides reverse the subraction conditions to output a positive number.
}

