const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const { User } = require('../services/sequelize')

passport.serializeUser((user, done) =>{
    done(null, user.id)
})


passport.deserializeUser((id, done)=>{
    console.log(id)
    User.findById(id).then(user => done(null, user))
})

passport.use('login', new LocalStrategy(
    {
        callbackURL: '/',
        proxy: true
    },
    async (username, password, done) => {
        await User.findOne({where: {username: username}}).then((user, err) =>{
            if(!user || user.password !== password){
                return done(null, false, { message: 'Incorrect username/password'})
            } 
            return done(null, user);

        })
    }
))