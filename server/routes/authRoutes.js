const authRouter = require('express').Router();
const { ValidateUser } = require('../controller/UserController')
const passport = require('passport')


authRouter.post('/api/login', passport.authenticate('login', { session: true }),
    function (req, res) {
    res.send( req.user );
    }
);
authRouter.get('/api/currentuser', (req, res)=>{
    if(req.user){
      return  res.send(req.user)
    } else{
        return res.send(false)
    }
})
authRouter.get('/api/logout', (req, res)=>{
    req.session = null
    res.redirect('/')
})
module.exports = authRouter