const ProjectRouter = require('express').Router();
const ProjectData = require('../controller/ProjectController')

ProjectRouter.get('/api/projects', (req, res) => {
    return ProjectData.GetAllProjects().then(projects => res.json(projects))
})
ProjectRouter.post('/api/projects', (req, res)=>{
    let newProject = req.body
    return ProjectData.CreateNewProject(newProject,req.user_id).then(res.json("Project created successfully"))
})
// ProjectRouter.get('/api/projects/:orgid', (req, res)=>{
//     let orgUID = req.body
// })
module.exports = ProjectRouter