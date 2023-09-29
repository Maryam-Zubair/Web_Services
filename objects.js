// //OBJECT NO : 1
// const person = {
//     name : 'Maryam',
//     age: 30
// }

// // object dot notation
// console.log(person.name)

// //object bracket notation
// console.log(person['age'])

// //assigning a new attribute to person object
// // just creating a new key on fly and it will do the work
// person.phone = '1-562-767-000'
// person['degree'] = 'MSCS'
// console.log(person)

// // OBJECT NO : 2
// const person_2 = {
//     name : 'Hina',
//     age : 10
// }
// person_2.phone = '1-562-999-2020'
// person_2['hobby'] = 'cricket'

// console.log(person_2)


// // function and object
// // arrow function ES6
// const introduce = (name, degree) => {
//     const person = {
//         name : name,
//         degree : degree,
//         assets: 100000,
//         debts: 50000, 
//         // //this wont work
//         // networth: assets - debt ,

//         //making method 
//         networth: function(){
//             return this.assets - this.debts
//         }
//     }
//     // using template literals
//     const output = `My name is ${person.name} and I have done ${person.degree} and networth is $${person.networth()}`
//     return output
// }

// X= introduce('Maryam', 'MSCS')
// console.log(X)