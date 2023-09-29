

// const fruits = ['apple','banana','orange','pear','apple','banana','orange','pear', 'apple','banana','orange','pear']
// // console.log(fruits)

// // for (let x=0; x<fruits.length; x++){
// //     console.log(x,fruits[x])
// // }

// // pythonic way of for loop
// for (const fruit of fruits){
//     console.log(fruit)
// }

// // pythonic way of for loop
// for (const fruit in fruits){
//     console.log(fruit)
// }



// const numbers=[1,2,3,4,5,6]
// let sum = 0

// // displaying the list
// for (let i=0; i<numbers.length; i++){
//     console.log(numbers[i])
// }


// // pythonic way of doubling every single number in list
// new_arr =[]
// for (let num of numbers){
//     new_arr.push(num + num)
// }
// console.log(new_arr)


// //pythonic way for summing up all numbers in the list
// for (const num of numbers){
//     sum = sum + num  
// }
// console.log(sum)


// // make a FUNCTION for doubling each number
// const double = (numbers) =>{
//     new_list =[]
//     for (let nums of numbers){
//         new_list.push(nums * 2)
//     }
//     return new_list
// }
// console.log(double([1,2,3,4,5,6]))


// // making function for finding the square of the array
// const square = (numbers) => {
//     const sq = []
//     for (let num of numbers){
//         sq.push(num ** 2)

//     }
//     return sq
// }
// console.log(square([1,2,3,4]))


// //making letter counter function
// const counter = (sentence) => {
//     let count = 0
//     for (letter in sentence){
//         count = count + 1
//     }
//     return {count : count}
// }
// console.log(counter('Hey, can you go to grocery store with me?'))


// //maximum number in array
// const maximum = (numbers) => {
//     let max = 0
//     for (let num of numbers){
//         if (num > max){
//             max = num
//         }
//     }
//     return max
// }
// console.log(maximum([1,2,3,4,7,5,6]))


// //minimum number in array
// const minimum = (numbers) =>{
//     let min = 0
//     for (num of numbers){
//         if (num < min){
//             min = num
//         }
//     }
//     return min
// }
// console.log(minimum([1,2,3,4,5,0,-1]))


// // frequency of letters in a sentence
// const letterfreq = (sentence) => {
//     const frequency = {}

//     for (let letter of sentence){
//         // object creation
//         if (letter in frequency){
//             frequency[letter] +=1
//         }
//         else{
//             frequency[letter] =1
//         }
//     }
//     return frequency
// }
// // console.log(letterfreq('haha, how are you'))


// // word frequency in a sentence
// // used letterfrequency 
// const wordfrequency = (sentence) =>{
//     const words = sentence.split(' ')
//     return letterfreq(words)
// }
// console.log(wordfrequency('hey, where do we have where have so hey do'))



// // conversion of hor into sec
// const convert = (hour) => {
//     const conv = hour * 3600
//     return `${hour} hour/s equals to ${conv} seconds`

// }
// hour = prompt('Enter hour')
// console.log(convert(hour))