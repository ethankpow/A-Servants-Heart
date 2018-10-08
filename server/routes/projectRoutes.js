const projectRouter = require('express').Router();
const projectDataStore = require('../data_store/projects_datastore')

projectRouter.get('/api/projects', (req, res) => {
    console.log('In get route')
    projectDataStore.GetAllProjects().then(projects => {
        res.JSON(projects)
    })
})

module.exports = projectRouter