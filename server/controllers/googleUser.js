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
  console.log('yo')
  console.log(ctx.googleTokens)
  
  const decodedToken = jwtDecode(ctx.googleTokens.id_token)
  console.log(decodedToken)
  ctx.response.body = '123'
  // ctx.response.body = JSON.stringify(user)
  return next()
})

module.exports = router