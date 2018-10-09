// load ENVIRONMENT VARIABLES
require('dotenv').config();

const express = require ('express');
const app = express();

//Import routes
const projectRoutes = require('./routes/projectRoutes')
const users = require('./routes/user');

app.use(express.json());
app.use(express.bodyParser({urlencoded: true}));

//use routes
app.use(projectRoutes)
app.use('/users', users);

require('./services/sequelize')

app.listen(2000, () => {
    console.log('server is running')
});