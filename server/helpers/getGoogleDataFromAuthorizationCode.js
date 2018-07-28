const { google } = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET,
  "https://developers.google.com/oauthplayground"
)

google.options({
  version: 'v2',
  auth: oauth2Client
});

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: 'profile',
  prompt: 'consent'
});

async function getGoogleTokenData(ctx, next) {
  try {

    const code = ctx.request.header.code
    console.log('code: ', code)
    console.log('url: ', url)
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
