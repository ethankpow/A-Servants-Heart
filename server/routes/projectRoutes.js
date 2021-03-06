const ProjectRouter = require('express').Router();
const ProjectData = require('../controller/ProjectController')


ProjectRouter.get('/api/projects', (req, res) => {
    return ProjectData.GetAllProjects().then(projects => res.json(projects))
})
ProjectRouter.post('/api/projects', (req, res)=>{
    let newProject = req.body
    return ProjectData.CreateNewProject(newProject,req.user_id).then(res.json("Project created successfully"))
})
ProjectRouter.get('/api/projects/:orgid', (req, res)=>{
    let orgUID = req.params.orgid
    return ProjectData.GetProjectsByOrgId(orgUID).then(project => res.json(project))
})
ProjectRouter.get('/api/chooseproject/:projectid', async (req, res)=>{
    let project = await ProjectData.GetProjectById(req.params.projectid)
    project.userId = req.user.id
    project.save({fields: ['userId']})
    return res.json(project)
})
ProjectRouter.put('/api/projects/completed/:projectid', async (req, res)=>{
    let project = await ProjectData.GetProjectById(req.params.projectid)
    project.completed = !project.completed
    project.save({fields: ['completed']})
    return res.json(project)
})
module.exports = ProjectRouter