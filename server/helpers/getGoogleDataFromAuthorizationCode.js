const { google } = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET,
  "http://localhost:3000/googleRedirect/"
)

google.options({
  version: 'v2',
  auth: oauth2Client
});

// expects ctx.request.header.code to exist
// decode the code and sets ctx.googleTokens with the decoded information
async function getGoogleTokenData(ctx, next) {
  try {
    console.log("a venit")
    const code = ctx.request.header.code
    console.log('cod  ', code)
    const { tokens } = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)
    
    ctx.googleTokens = tokens

  } catch (err) {
    console.log(err.toString())
    ctx.throw(400, err)
  }
  return next()
}

module.exports = getGoogleTokenData
