const {google} = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET,
  'http://localhost:1337/test'
)

google.options({
  version: 'v2',
  auth: oauth2Client
});

async function getGoogleTokenData(ctx, next) {
  try {

    const code = ctx.request.header.code
    console.log(code)
    console.log(oauth2Client)
    const tokenData = await oauth2Client.getToken(123)
    console.log('token data', tokenData)
    ctx.googleTokenData = tokenData

  } catch (err) {
    console.log(err.toString())
    ctx.throw(400, err.toString())
  }
  return next()
}

exports.getGoogleTokenData = getGoogleTokenData
