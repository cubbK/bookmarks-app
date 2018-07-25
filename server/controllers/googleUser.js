const Router = require('koa-router')
const User = require('../models/user')
const router = new Router({
  prefix: '/googleUser'
})

const getGoogleTokenData = require('../helpers/googleToken').getGoogleTokenData
router.use(getGoogleTokenData)

router.get('/', async (ctx, next) => {
  const user = await User.findOrCreate(ctx.googleTokenData)
  
  ctx.response.body = JSON.stringify(user)
  return next()
})

module.exports = router