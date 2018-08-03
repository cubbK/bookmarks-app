const Router = require('koa-router')
const User = require('../models/user')
const jwtDecode = require('jwt-decode')

const router = new Router({
  prefix: '/googleUser'
})

const getGoogleDataFromAuthorizationCode = require('../helpers/getGoogleDataFromAuthorizationCode.js')
router.use(getGoogleDataFromAuthorizationCode)

router.get('/', async (ctx, next) => {
  // const user = await User.findOrCreate(ctx.googleTokenData)
  console.log(ctx.googleTokens)
  
  const refreshToken = ctx.googleTokens.refresh_token
  const accessToken = ctx.googleTokens.access_token

  const userInfo = jwtDecode(ctx.googleTokens.id_token)
  const userId = userInfo.sub
  const userName = userInfo.given_name

  console.log('decoded token: ', decodedToken)
  ctx.response.body = '123'
  // ctx.response.body = JSON.stringify(user)
  return next()
})

module.exports = router