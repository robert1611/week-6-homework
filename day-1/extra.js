
// Basics of JavaScript

/*
    Multiline Comment in JavaScript

    -- Variable Declaration in JavaScript --
    Primative types in JavaScript -- strings, integers,floats,arrays, objects(aka dictionaries in python)
*/

// String Variable
var name = 'Bill';

// Display value to console
console.log(name)

// Integer Variable
var some_number = 30;

console.log(some_number)

// Float Variable
var some_float = 3.14;

console.log(some_float)

// Array Variable
some_array = [1,2,3,4];

console.log(some_array)

// Object Variable
var some_object = {'test': 'Play this please!'}

console.log(some_object)


//JavaScript Hoisting Example

console.log(some_example)
var some_example = 'This string is a test';
console.log(some_example)

// Declaring values using the let keyword
// String Concatination
let full_statement = name + " how are you doing?";
console.log(full_statement)


// Basic Math Operations
// Addition
let sum = 5 + 5;
console.log(sum)

// Muliplication
let product = 5 * 5;
console.log(product)

// Subtraction
let difference = 5 - 5;
console.log(difference)

// Division
let divide = 5 / 5;
console.log(divide)

//More math operations
// Exponetial
let square = 5 ** 2;
console.log(square)

// Finding the floor of a decimal
let find_floor = Math.floor(25.8)
console.log(find_floor)

// Finding the ceiling of a decimal number
let find_ceil = Math.ceil(25.8)
console.log(find_ceil)

//Mind Bender
let crazy_stuff = some_float + '4'; //not defined, 7.14, 3.14+4,3.144
console.log(crazy_stuff)

// Mind Bender 2
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

// JavaScript let keyword -- ES6 JavaScript Variable Creation (Safer)
let nba_goat = 'Micheal Jordan';
console.log(nba_goat)

nba_goat = 'Kobe' // redeclaration
console.log(nba_goat)

// BAD DECLARATION
// let nba_goat = 'LeBron'
// console.log(nba_goat)

// JavaScript const keyword -- ES6+ JavaScript Varibale Creation(Safer)
const fav_football_team = 'Philly Eagles'
console.log(fav_football_team)

// BAD CONST REDECLARATION
// fav_football_team = 'Chicago Bears'
// console.log(fav_football_team)

// JavaScript Functions
// Regular Named Function in JavaScript
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums())

//ES6+ Arrow Function in JavaScript
let multiplyNums = () =>{
    let num = 4;
    let num2 = 5

    return num * num2
}

console.log(multiplyNums())

// Variable Named Function with parameters
let addNums3 = function(num,num2){
    return num + num2
}

console.log(addNums3(4,5))

//Arrow Function with parameters
let cubed = (num) => {
    return num ** 3
}

console.log(cubed(5))

// Self-Invoking function
// Console.log for this example DOES NOT have to 
// be provided -- just using for easier display of 
// output

console.log(( function (name){
    let hello = 'Hello World ' + name;
    return hello
})('Joel'))

// ( function (name){
//     let hello = 'Hello World ' + name;
//     return hello
// })('Joel')

// JavaScript Control Flow
// If Statements
function determineAge(age){
    if(age < 18){
       return 'Minor' 
    } else if ( age >= 18 && age <= 65){
        return 'Adult not retired'
    } else {
        return 'Elderly person retired'
    }
}

console.log(determineAge(30))

// JavaScript Ternary Operator
function determineAge2(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65) ? 
    'Adult not retired' : 'Elderly person retired'
}

console.log(determineAge2(67))

// Loops in JavaScript - For Loop
// For Loop Syntax -- for keyword(counter; expression; incremention/decrementation)

function countByOne(){
    // For Loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())

// decrementing a for loop
function decreaseByOne(){
    // For Loop
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decreasing has stopped'
}

console.log(decreaseByOne())

// While Loop - JavaScript
function countWithWhile(){
    let i = 0 // Counter
    let text = '';

    while(i < 10){
        text += `This number is...${i}\n`
        i++
    }
    return text
}

console.log(countWithWhile())

// Do While Loop -- Do the first portion at LEAST once
// If the while condition is still met, perform the while loop
function countWithDoWhile(){
    let i = 0;// counter
    let text = '';

    // Do 
    do{
        text += `This number is now...${i}\n`
        i++
    }
    while (i > 10)
    return text
}

console.log(countWithDoWhile())



/*
    Looping with Arrays and Array/String Methods
    ============================================
*/
// Creation of Array of Names
let group_of_names = ['Terry', 'Ben','Ash','Brock','Misty']
//console log the first index of the array of names
console.log(group_of_names[0]) // Terry

// method 1 for looping through an array
function all_names(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i]) // Terry Ben Ash Brock Misty
    }

}

console.log(all_names())

// Method 2: Using the ForEach() method inside of a array
console.log(group_of_names
            .forEach((element) => {console.log(element)}))

//Array.toString()
console.log(group_of_names.toString())

/* JAVASCRIPT ARRAY METHODS */

// .map()
let b_names = group_of_names.map(x => {
    if(x[0] == 'B'){
        return x 
    } else{
        return false
    }
})

// .reduce()
const nums = [2,4,6,8,10]
nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})

// .filter()
let long_names = group_of_names.filter( element => element.length > 4);

// Array.join()
console.log(group_of_names.join(", "))

// Array.slice()
console.log(group_of_names.slice(0,3)) // Terry, Ben, Ash

// Array.splice()
let captured_value = group_of_names.splice(0,1,'Freddie')
console.log(`This was removed based on splice ${captured_value}`)
console.log(group_of_names.splice(0,1,'Freddie')) // Returns the removed value == Terry
console.log(group_of_names)

// Remove all even indexes and replace with a new name
function replace_new_name(){
    // For loop to get all names
    for(let i = 0; i < group_of_names.length; i++){
        if(i % 2 == 0){
            group_of_names.splice(i,1,'Goku')
        }
    }
    return group_of_names
}

console.log(replace_new_name())

// Using an Array to produce a string value -- 
// Then using a string method to produce a desired result

// String.search()
console.log(group_of_names[0].search('Go')) // 0 => 'Goku' G is at index 0

// String.slice()
console.log(group_of_names[1].slice(0,3)) // Ben