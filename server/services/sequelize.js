const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/ASH')

sequelize
    .authenticate()
    .then(() => {
        console.log('connection has been established sucessfully');
    })
    .catch(err => {
        console.error('unable to connect to the DB', err);
    })