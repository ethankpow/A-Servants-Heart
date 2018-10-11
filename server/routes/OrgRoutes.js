const OrgsRouter = require('express').Router();
const OrgData = require('../controller/OrgController')

OrgsRouter.get('/api/organizations', (req, res) => {
    return OrgData.GetAllOrgs().then(orgs => res.json(orgs))
})
OrgsRouter.post('/api/organizations', (req, res) => {
    let newOrg = req.body
    return OrgData.createOrg(newOrg).then(res.end("Organization created succesfully"))
     .catch(res.json('Organization not created successfully'))
})
module.exports = OrgsRouter