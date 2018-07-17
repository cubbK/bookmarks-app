const Router = require('koa-router')
const passport = require('koa-passport')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const User = require('../models/user')

async function verify(token) {
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


const router = new Router({
  prefix: '/auth'
})

router.post('/google', async (ctx, next) => {
  try {

    const accessToken = ctx.request.body.accessToken
    const tokenData = await verify(accessToken)
    
    const user = await User.findOrCreate(tokenData)
    ctx.response.body = JSON.stringify(user)

  } catch(err) {

    ctx.response.status = 400
    ctx.response.body = {
      error: err.toString()
    } 
  }
  
})

module.exports = router