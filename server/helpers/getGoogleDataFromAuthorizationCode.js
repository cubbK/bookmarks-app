const { google } = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET,
  "http://localhost:1337/googleUser/redirect"
)

google.options({
  version: 'v2',
  auth: oauth2Client
});

async function getGoogleTokenData(ctx, next) {
  try {

    const code = ctx.request.header.code
    console.log('code: ', code)

    const { tokens } = await oauth2Client.getToken(code)
    // const { tokens } = await oauth2Client.getToken(code)
    // oauth2Client.setCredentials(tokens);
    // cons
    // ctx.googleTokenData = tokenData
    console.log('pass through getGoogleTokenData')

  } catch (err) {
    console.log(err.toString())
    ctx.throw(400, err)
  }
  return next()
}

module.exports = getGoogleTokenData
