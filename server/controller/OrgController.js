const { Organizations } = require('../services/sequelize')

const GetAllOrgs = async () => {
    let allOrgs = await Organizations.findAll();
    return allOrgs.filter(orgs => orgs.dataValues)
}
const createOrg = async (org) => {
    let newOrg = Organizations
                        .build({
                            name: org.name, 
                            email: org.email,
                            password: org.password,
                            phone_number: org.phone_number
                         })
                        .save()
    return newOrg
}
const GetOrgById = async (id) => {
    return Organizations.findById(id)
}

module.exports = {
    GetAllOrgs,
    createOrg,
    GetOrgById
}