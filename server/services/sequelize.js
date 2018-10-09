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
    User.findAll().then(users => {
    let allUsers = users.filter(users => users.dataValues)
    console.log(allUsers)
    return allUsers
  })
}

    module.exports = {
        sequelize,
        GetAllUsers
    }