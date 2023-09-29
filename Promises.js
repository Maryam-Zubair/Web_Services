
    // Promise is javascript object
    // resolve : Value 
    // reject : Error

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        // fals or true
        isready = false
        // tervery example
        isready ? resolve('Soup ready') : reject('Not ready')
    }
    ,2000)
})
console.log(promise1
    // get value if success : resolved 
    .then(result => console.log(result))  
    // get value if error : reject
    .catch(error => console.log(error))  
)



// practice :-
// Promise is the class for which we are making object
const promise2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        x = false
        x ? resolve('Misiion Accomplished') : reject('Error')
    } ,1000)
})
console.log(promise2
    .then(value => console.log(value))
    .catch(error => console.log(error))
)

