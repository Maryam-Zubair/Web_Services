// QUESTION NO : 01
// const getUserData = (userId , callback) => {
//     setTimeout(()=> {
//         if (userId in data ){
//             callback(userId)
//         }
//         else{
//             callback(null)
//         }
//     },1000)
// }

// const UserData = (result) => {
//     if (result){
//         console.log(data[result])
//     }
//     else{
//         console.error('Error: data not found')
//     }
    
// }

//QUESTION NO: 02


const getUserData = (userId) => {
    return new Promise((resolve, reject) => {
    setTimeout(()=> {
        if (userId in data ){
            resolve(data[userId])
        }
        else{
            if (userId <0){
            reject('Error: No negtaive number allowed')
            }
            else{
            reject('Error: No data found')
            }
        } 
    },1000)
    })   
}
    
const getUserDataWithTryCatch = () => {
    
    try {
        const result = getUserData(111); // Replace with the desired user ID
        console.log(result);
    } 
    catch (error) {
        console.log(error);
    }
}

// User data
const data = {
    111 : {name:'maryam', email : 'mariyam051@gmail.com', major: 'CS'},
    222 : {name:'awais', email : 'm.awais@gmail.com', major: 'EE'},
    333: {name:'haris', email : 'm.haris@gmail.com', major: 'SE'} 
}

getUserDataWithTryCatch()

