const { GetAllUsers } = require('../services/sequelize');

const getAll = (req, res) => {
    GetAllUsers.then(users => {
        let allUsers = users.filter(users => users.dataValues)
        console.log(allUsers)
        res.send({ users: allUsers});
    }).catch((error) => {
        res.send({message: 'an error occured'});
    });
}

module.exports = {
    getAll
}
