const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport')
//Import routes
const UserRouter = require('./routes/UserRoutes')
const OrgRoutes = require('./routes/OrgRoutes')
const ProjectRoutes = require('./routes/ProjectRoutes')
const authRoutes = require('./routes/authRoutes')
const cookieSession = require('cookie-session');


app.use(express.json());
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: ["something"]
    })
  )
app.use(passport.initialize());
app.use(passport.session());
require('./services/passport');

//use routes
app.use(UserRouter)
app.use(OrgRoutes)
app.use(ProjectRoutes)
app.use(authRoutes)

require('./services/sequelize')

app.listen(2000, () => {
    console.log('server is running')
});