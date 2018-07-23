const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

async function verifyGoogleToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userId = payload['sub'];
  const userEmail = payload.email
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
  return {
    userId,
    userEmail
  }
}

async function getGoogleTokenData(ctx, next) {
  try {

    const accessToken = ctx.request.header.accesstoken
    const tokenData = await verifyGoogleToken(accessToken)
    
    ctx.googleTokenData = tokenData

  } catch(err) {
    console.log(err.toString())
    ctx.throw(400, err.toString())
  }
  return next()
}

exports.verifyGoogleToken = verifyGoogleToken
exports.getGoogleTokenData = getGoogleTokenData