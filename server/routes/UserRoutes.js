const UserRouter = require('express').Router();
const UsersData = require('../controller/UserController')

UserRouter.get('/api/users', (req, res) => {
    console.log('In get route')
    return UsersData.GetAllUsers().then(users => res.json(users))
})

module.exports = UserRouter