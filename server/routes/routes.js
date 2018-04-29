var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
     console.log("YAYA")
     console.log(accessToken)
     console.log(profile)
     return done(accessToken)
}
));

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send('Base root');
  });

  app.get('/auth/google', passport.authenticate('google', { scope: ['openid email'] }))

  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req)
    res.redirect('/');
  });
}



module.exports = appRouter