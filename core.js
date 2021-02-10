//Exercise 1

//Write a function that parses through the below object and
// displays all of their favorite food dishes as shown:

let person3 = {
    name = 'Bruce',
    age: 44,
    pizza: ['Deep Dish', 'South Side Thin Crust'],
    tacos: 'Anything not Taco Bell',
    burgers: 'Portillos Burgers',
    ice_cream: ['Chocolate', 'Vanilla', 'Strawberry'],
    
    shakes: [{
            
            oberwise: 'Chocolate',
            dunkin: 'Vanilla',
            culvers: 'All of them',
            mcDonalds: 'sham-rock-shake',
            cupids_candies: 'Chocolate Malt'
        }]
}

console.log(person3.name);
console.log(person3.age);
for(let i=0; i<person3.pizza.length; i++)
{
    console.log(person3.pizza[i]);
}
console.log(person3.tacos);
console.log(person3.burgers);

for(let i=0; i<person3.ice_cream.length; i++){
    console.log(person3.ice_cream[i]);
}

let obj = person3.shakes[0];
console.log(obj.oberwise);
console.log(obj.dunkin);
console.log(culvers);
console.log(mcDonalds);
console.log(cupids_candies);

// Exercise 2
// Object Prototype for Person1 that has name and age
// TWO Methods - Print Info and Age Increment by 1
// Create two people using 'new' keyword and print
// both of the info and increment one person's age by 
// three.  use the arrow function for both methods

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        return `You are ${this.name}, You are ${this.age} old`
    }

    this.ageIncrement = () => {
        return this.age+1;
    }
}

let new_person1 = new Person('Nicholas',7);
let new_person2 = new Person('Charlie', 4);

console.log(new_person1.printInfo());
new_person1.age = new_person1.ageIncrement();
new_person1.age = new_person1.ageIncrement();
new_person1.age = new_person1.ageIncrement();
console.log(new_person1.printInfo());

console.log(new_person2.printInfo());

// Exercise 3

//Create a Promised based function that will check a string to determine if it's length is greater than 10.
//If the length is greater than ten console log "Big word". 
//If the length of the string is less than 10 console log "Small Number"


const stringLength = (string) => {
    return new Promise((resolve,reject) => {
        if(string.length > 10){
            resolve('Big Word');
            console.log
        } else {
            reject('Small Number');
        }

    })
}

stringLength ("gbbby").then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

stringLength ("gbgfbbdybytbytbtybytbby").then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// Code Wars
// 1 of 3.  This is the CNY / USD problem.  It's only in JS (not is Python) so not yet solved

function usdcny(usd) {
    let x =(6.75 * usd).toFixed(2);
    
    return x + ' Chinese Yuan'
  }

// 2 of 3
// Incorrect division method

const solve = (x, y) => x/y

//3 of 3
// Function 2 - Squaring an argument

function square(n) {
    return n * n
}
