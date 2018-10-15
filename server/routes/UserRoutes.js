const UserRouter = require('express').Router();
const UsersData = require('../controller/UserController')
const ProjectData = require('../controller/ProjectController')

UserRouter.get('/api/users', (req, res) => {
    console.log('In get route')
    return UsersData.GetAllUsers().then(users => res.json(users))
})

UserRouter.post('/api/users', (req, res) => {
    let newUser = req.body
    return UsersData.CreateNewUser(newUser).then(user => res.json("Account created Successfully")).catch()
})

UserRouter.get('/api/test', (req, res) => {
   console.log('TEST')
   console.log(req.user)
    return res.send('TEST')
})
UserRouter.get('/api/user/projects', async (req, res)=>{
    let projects = await ProjectData.GetProjectByUserId(req.user.id.toString())
    return res.json(projects)
})

module.exports = UserRouter