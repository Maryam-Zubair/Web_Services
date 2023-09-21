const getUserData = (userId) => {
    if (userId < 0) {
        throw new Error('Error: Number given is Negative. Not Allowed!');
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId in data) {
                resolve(data[userId])
            }
            else {
                reject('Error: No data found')
            }
        }, 1000)
    })
}


// User data
const data = {
    111: { name: 'maryam', email: 'mariyam051@gmail.com', major: 'CS' },
    222: { name: 'awais', email: 'm.awais@gmail.com', major: 'EE' },
    333: { name: 'haris', email: 'm.haris@gmail.com', major: 'SE' }
}

//using async to avoid callback hell
const User = async () => {
    try {
        // passing userId to getUserdata and await the result
        const userdata = await getUserData(-2) // Correct userId
        console.log(userdata) // get value if successful
    }
    catch (error) {
        console.log(error) // get error if failed
    }
}
// invoke async function
User()