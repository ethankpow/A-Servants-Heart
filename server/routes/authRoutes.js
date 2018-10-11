const authRouter = require('express').Router();
const { ValidateUser } = require('../controller/UserController')
const passport = require('passport')


authRouter.post('/api/login', passport.authenticate('login', { session: true }),
    function (req, res) {
    res.send( true );
    }
);

module.exports = authRouter