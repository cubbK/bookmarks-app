const passport = require('koa-passport')
const GoogleStrategy = require('passport-google-auth').Strategy

// passport.serializeUser(function(user, done) {
//   done(null, user.id)
// })

// passport.deserializeUser(async function(id, done) {
//   try {
//     const user = await fetchUser()
//     done(null, user)
//   } catch(err) {
//     done(err)
//   }
// })

passport.use(new GoogleStrategy({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'http://localhost:' + process.env.PORT + '/auth/google/callback'
  },
  function(token, tokenSecret, profile, done) {
    console.log(token, profile)
    // retrieve user ...
    // fetchUser().then(user => done(null, user))
    done(null, {name: 'james'})
  }
))