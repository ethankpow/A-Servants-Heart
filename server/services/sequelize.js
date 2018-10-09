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
    due_date: Sequelize.DATE,
    org_id:{
        type: Sequelize.INTEGER,
     
        references: {
          // This is a reference to another model
          model: Organizations,
     
          // This is the column name of the referenced model
          key: 'id',
     
          // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    user_id: Sequelize.INTEGER
})
Projects.sync();

    module.exports = {
        sequelize,
        Organizations,
        Projects,
        User
    }