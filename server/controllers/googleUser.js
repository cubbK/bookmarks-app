const Router = require('koa-router')
const User = require('../models/user')
const router = new Router({
  prefix: '/googleUser'
})

const getGoogleDataFromAuthorizationCode = require('../helpers/getGoogleDataFromAuthorizationCode.js')
router.use(getGoogleDataFromAuthorizationCode)

router.get('/', async (ctx, next) => {
  // const user = await User.findOrCreate(ctx.googleTokenData)
  
  // ctx.response.body = JSON.stringify(user)
  return next()
})

module.exports = router