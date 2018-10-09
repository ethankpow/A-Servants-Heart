const { User } = require('../services/sequelize')



const  GetAllUsers = async () => {
    let allUsers = await User.findAll();
    console.log(allUsers)
    return allUsers.filter(users => users.dataValues)
}

module.exports = {
    GetAllUsers
}