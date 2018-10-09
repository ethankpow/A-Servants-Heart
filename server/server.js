const Express = require ('express');
const app = Express();
// const bodyParser = require('body-parser');

//Import routes
const projectRoutes = require('./routes/projectRoutes')

//use routes
app.use(projectRoutes)

require('./services/sequelize')

app.listen(2000, () => {
    console.log('server is running')
});