const passport = require('koa-passport')
const GoogleStrategy = require('passport-google-auth').Strategy

const User = require('./models/user').User

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'http://localhost:' + process.env.PORT + '/auth/google/callback'
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate({googleToken: token}, (err, result) => {
      done(null, result)
    })
    // retrieve user ...
    // fetchUser().then(user => done(null, user))
  }
))