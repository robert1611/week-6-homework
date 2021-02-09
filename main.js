let dog_string = "Hello Max, my name is DOG, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(s, names){
    let ret = []
    for(let i = 0; i < names.length; i++){
        if(s.includes(names[i])) {
            ret.push(names[i])
        }
    }
    return ret
}

console.log('found words', findWords(dog_string, dog_names))

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger",'last']
function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index')
        }
    }
    return arr

}

/*for i in range(len(arr)):
    if i % 2 == 0:
        arr[i] = 'even index'*/

console.log(replaceEvens(arr))

//for name in dog_names:  
//    if name in dog_string

/* CODEWARS BMI QUESTION */

function determine_BMI(BMI) {
    if (BMI <= 18.5 ) {
        return 'Underweight'
     } else if (BMI >18.5 && BMI <= 25) {
        return 'Normal'
    } else if (BMI > 25 && BMI <=30) {
      return "Overweight"
    } else {
        return "Obese"
    }
    
}

/* CODEWARS HOOPS >= 10 Problem */
console.log(determine_BMI(22))

function hoop_count(n){
    if (n >=10) {
        return "Great, now move on to new tricks"
    } else {
        return "Keep at it until you get it"
    }
    
}

console.log(hoop_count(4))