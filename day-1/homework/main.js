let dog_string = "Hello Max, my name is dog, and I have purple eyes!"
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

/* Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    

}

/*
git remote add origin https://github.com/robert1611/week-6-homework.git
git branch -M main
git push -u origin main */