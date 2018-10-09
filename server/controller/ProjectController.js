const { Projects } = require('../services/sequelize')

const GetAllProjects = async () => {
    let allProjects = await Projects.findAll();
    return allProjects.filter(projects => projects.dataValues)
}





module.exports = {
    GetAllProjects
}