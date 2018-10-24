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
    
    
    
    
    const Organizations = sequelize.define('organizations', {
        name: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        phone_number: Sequelize.STRING
    })
    // Organizations.sync();
    
    const Projects = sequelize.define('projects', {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        due_date: Sequelize.STRING,
        image_URL: Sequelize.STRING,
        completed: Sequelize.BOOLEAN
    })
    // Projects.sync();
    
    const User = sequelize.define('users', {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone_number: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        //   createdAt: "createdat",
        //   updatedAt: "updatedat"
    });
    // User.sync();
    Projects.belongsTo(User)
    Organizations.belongsTo(User)
    User.hasMany(Projects)
    sequelize.sync(User, Projects, Organizations)
    module.exports = {
        sequelize,
        Organizations,
        Projects,
        User
    }