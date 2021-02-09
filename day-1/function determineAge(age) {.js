function determineAge(age) {
    if (age < 18) {
        return 'Minor'
    } else if (age >= 18 && age <= 65) {
        return 'Working Adult'
    } else {
        return 'Retired'
    }
}



console.log(determineAge(31))

let cubed = (num) => {
    return num ** 3
}

console.log(cubed(3))

// Javacript Ternary Operator
function determine_Age(age) {
    return ( age < 18 ) ? 'Minor' : age (age >=18 && age <= 65) ?
    'Adult Not Retired Yet' : 'Elderly Person Retired'
}

console.log(determine_Age(31)

// Loops in Javascript
// for keyword(counter, condition ; incrementation / decrementation)

function countByOne(){
    for(let i = 0; i < 20; i++) {
        console.log(i)
}
    return 'INcrementing Has Stopped'
 }

console.log(countByOne())

function decreaseByOne(){
    for(let i = 20; i >0; 2) {
        console.log(i)
    }
    return 'Decreasing Has Stopped'
}

console.log(decreaseByOne())

// Do while statement

let group_of_names = ['Terry','Ben','Ash', 'Brock', 'Misty']

function show_all_names(){
    for(let i =0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
        return "Done with names"
}
console.log(show_all_names())

/* .map(), .filter(), .reduce */

let b_names = group_of_names.map( x => {
    if (x[0] == 'B'){
        return x
    } else {
        return false
    }
 })
 
 console.log(b_names)








