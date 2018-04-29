var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const GOOGLE_CLIENT_ID = '870438236090-8b8r45h1rkcfe0en949a4pqn35iougjo.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = 'LjoJ3ULlSUbn-MCKtcZfHAKa'

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000"
},
function(accessToken, refreshToken, profile, done) {
     console.log("YAYA")
}
));

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get('/auth', (req, res) => {
    res.status(200).send("Auth");
  })

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))
}

module.exports = appRouter