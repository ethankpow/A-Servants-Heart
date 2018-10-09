const OrgsRouter = require('express').Router();
const OrgData = require('../controller/OrgController')

OrgsRouter.get('/api/organizations', (req, res) => {
    return OrgData.GetAllOrgs().then(orgs => res.json(orgs))
})

module.exports = OrgsRouter