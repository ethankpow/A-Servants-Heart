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

 
const Organizations = sequelize.define('organizations', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.STRING
})
Organizations.sync();

const Projects = sequelize.define('projects', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    due_date: Sequelize.STRING,
    user_id: Sequelize.INTEGER,
    image_URL: Sequelize.STRING
})
Projects.belongsTo(Organizations)
Projects.sync();

    module.exports = {
        sequelize,
        Organizations,
        Projects,
        User
    }