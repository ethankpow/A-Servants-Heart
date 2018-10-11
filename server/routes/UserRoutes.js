const UserRouter = require('express').Router();
const UsersData = require('../controller/UserController')

UserRouter.get('/api/users', (req, res) => {
    console.log('In get route')
    return UsersData.GetAllUsers().then(users => res.json(users))
})

UserRouter.post('/api/users', (req, res) => {
    let newUser = req.body
    return UsersData.CreateNewUser(newUser).then(user => res.json(user))
})

UserRouter.get('/api/test', (req, res) => {
   console.log('TEST')
   console.log(req.user)
    return res.send('TEST')
})

module.exports = UserRouter