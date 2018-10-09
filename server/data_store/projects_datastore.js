const Sequelize = ('sequelize')
const sequelize = require('../services/sequelize')


// const Model = sequelize()
// const Project = sequelize.define('projects', {
//     name: { 
//         type: Sequelize.STRING
//     },
//     description:{
//         type: Sequelize.STRING
//     },
//     org_id:{
//         type: Sequelize.INTEGER,
//         references: 'organizations',
//         referencesKey: 'id'
//     },
//     user_id: {
//         type: Sequelize.INTEGER,
//         references: 'users',
//         referencesKey: 'id'
//     },
//     due_date: {
//         type: Sequelize.STRING
//     }
// })
// const User = sequelize.define('users', {
//     name:{ 
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     phone_number: {
//         type: Sequelize.STRING
//     },
//     username: {
//         type: Sequelize.STRING
//     },
//     password: {
//         type: Sequelize.STRING
//     }
// })
// const Organizations = sequelize.define('orgs', {
//     name: {
//         type: Sequelize.STRING
//     },
//     password: {
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     phone_number: {
//         type: Sequelize.STRING
//     }

// })

const GetAllProjects = () => {
    console.log("In Datastore")
   return Project.findall().then(projects =>{
       console.log(projects)
   })
}
module.exports = GetAllProjects