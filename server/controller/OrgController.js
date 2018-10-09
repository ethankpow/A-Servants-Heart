const { Organizations } = require('../services/sequelize')

const GetAllOrgs = async () => {
    let allOrgs = await Organizations.findAll();
    return allOrgs.filter(orgs => orgs.dataValues)
}

module.exports = {
    GetAllOrgs
}