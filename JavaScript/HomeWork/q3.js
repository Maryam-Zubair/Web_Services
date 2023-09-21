const getUserData = (userId) => {
    return new Promise((resolve, reject) => {
    if (userId <0){
        reject('Error: Number given is Negative. Not Allowed!')
    }
    // to execute the piece of code after specific delay
    setTimeout(()=> {
        if (userId in data ){
            // if user input is in the data
            resolve(data[userId])
        }
        else{
            reject('Error: No data found')
        }
    },1000)
    })
}
    
// User data
data = {
    111 : {name:'maryam', email : 'mariyam051@gmail.com', major: 'CS'},
    222 : {name:'awais', email : 'm.awais@gmail.com', major: 'EE'},
    333: {name:'haris', email : 'm.haris@gmail.com', major: 'SE'} 
}

UserData = getUserData('-1')
console.log(UserData
    // get value if sucess
    .then(result => console.log(result)) 
    // get value if failed
    .catch(error => console.log(error))
)
