const ProjectRouter = require('express').Router();
const ProjectData = require('../controller/ProjectController')

ProjectRouter.get('/api/projects', (req, res) => {
    return ProjectData.GetAllProjects().then(projects => res.json(projects))
})

module.exports = ProjectRouter