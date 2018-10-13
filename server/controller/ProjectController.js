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
                            image_URL: project.image_URL
                        }).save()
    return newProject
}
const GetProjectsByOrgId = async (id) => {
    let orgProject = await Projects.findAll({where: {organizationId: id}})
    return orgProject
}



module.exports = {
    GetAllProjects,
    CreateNewProject,
    GetProjectsByOrgId
}