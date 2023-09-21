const getUserData = (userId , callback) => {
    // settimeout : execute the function after specific delay
    setTimeout(()=> {
        if (userId in data ){
            // if user found in data
            callback(userId)
        }
        else{
            // if user not found returning null
            callback(null)
        }
    },1000)
}

const UserData = (result) => {
    if (result){
        console.log(data[result])
    }
    else{
        console.error('Error: data not found')
    }
    
}
// User data
data = {
    111 : {name:'maryam', email : 'mariyam051@gmail.com', major: 'CS'},
    222 : {name:'awais', email : 'm.awais@gmail.com', major: 'EE'},
    333: {name:'haris', email : 'm.haris@gmail.com', major: 'SE'} 
}
// passing the UserData function as an attribute 
// callbacks
getUserData(333 , UserData)