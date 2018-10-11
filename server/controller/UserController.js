const { User } = require('../services/sequelize')

const  GetAllUsers = async () => {
    let allUsers = await User.findAll();
    console.log(allUsers)
    return allUsers.filter(users => users.dataValues)
}
const CreateNewUser = async (addUser) => {
    let newUser = await
        User
          .build({
             name: addUser.name,
             email: addUser.email, 
             phone_number: addUser.phone_number, 
             username: addUser.username, 
             password: addUser.password
            })
              .save();
    return newUser
}
const GetUserByUsername = async (userData) => {
    let user = await User.findOne({ where: {username: userData.username }})
    return user
}
const ValidateUser = async (userData) => {
    let user = await GetUserByUsername(userData)
    if(!user || !userData.password){
        return false
    }
    return user.password == userData.password
}
module.exports = {
    GetAllUsers,
    CreateNewUser,
    GetUserByUsername,
    ValidateUser
}