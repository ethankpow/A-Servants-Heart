const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
//Import routes
const UserRouter = require('./routes/UserRoutes')
const OrgRoutes = require('./routes/OrgRoutes')
const ProjectRoutes = require('./routes/ProjectRoutes')

app.use(express.json());
//use routes
app.use(UserRouter)
app.use(OrgRoutes)
app.use(ProjectRoutes)

require('./services/sequelize')

app.listen(2000, () => {
    console.log('server is running')
});