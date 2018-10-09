const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);

sequelize
    .authenticate()
    .then(() => {
        console.log('connection has been established sucessfully');
    })
    .catch(err => {
        console.error('unable to connect to the DB', err);
    })


const User = sequelize.define('users', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.INTEGER,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    //   createdAt: "createdat",
    //   updatedAt: "updatedat"
});
User.sync();
const GetAllUsers = () => {
    return User.findAll();
}

module.exports = {
    sequelize,
    GetAllUsers
}