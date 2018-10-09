const { User } = require('../services/sequelize')



const  GetAllUsers = async () => {
    let allUsers = await User.findAll();
    console.log(allUsers)
    return allUsers.filter(users => users.dataValues)
}
const CreateNewUser = async (addUser) => {
    let newUser = 
        User
          .build({
             name: addUser.name,
             email: addUser.email, 
             phone_number: addUser.phone_number, 
             username: addUser.username, 
             password: addUser.password
            })
          .save()
    return newUser
}
module.exports = {
    GetAllUsers,
    CreateNewUser
}