const passport = require('koa-passport')
const GoogleStrategy = require('passport-google-auth').Strategy

passport.use(new GoogleStrategy({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/auth/google/callback'
  },
  function(token, tokenSecret, profile, done) {
    console.log(token, profile)
    // retrieve user ...
    // fetchUser().then(user => done(null, user))
  }
))