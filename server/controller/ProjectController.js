const { Projects } = require('../services/sequelize')
const { GetOrgById } = require('./OrgController')

const GetAllProjects = async () => {
    let allProjects = await Projects.findAll();
    return allProjects.filter(projects => projects.dataValues)
}
const CreateNewProject = async (project, id) => {
    let newProject = Projects
                        .build({
                            name: project.name,
                            description: project.description,
                            due_date: project.due_date,
                            org_id: '1',
                            image_URL: project.image_URL,
                            completed: false
                        }).save()
    return newProject
}
const GetProjectsByOrgId = async (id) => {
    let orgProject = await Projects.findAll({where: {organizationId: id}})
    return orgProject
}

const GetProjectById = async (id) => {
    let project = await Projects.findById(id)
    return project
}

const GetProjectByUserId = async (id) =>{
    let projects = await Projects.findAll({where: {userId: id}})
    return projects
}




module.exports = {
    GetAllProjects,
    CreateNewProject,
    GetProjectsByOrgId,
    GetProjectById,
    GetProjectByUserId
}