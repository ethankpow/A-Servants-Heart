const sequelize = require('../services/sequelize')
// const Model = sequelize()

const GetAllProjects = () => {
    console.log("In Datastore")
   return sequelize.findall({})
}
module.exports = GetAllProjects