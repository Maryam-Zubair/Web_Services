const getUserData = (userId) => {
    // instantiating
    return new Promise((resolve, reject) => {
    setTimeout(()=> {
        if (userId in data ){
            // if user input in data
            resolve(data[userId])
        }
        else{
            // if user input not found
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

UserData = getUserData('111')
console.log(UserData
    // get value if sucess
    .then(result => console.log(result)) 
    // get value if failed
    .catch(error => console.log(error))
)