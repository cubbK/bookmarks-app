const Router = require('koa-router')
const User = require('../models/user')
const router = new Router({
  prefix: '/user'
})

router.get('/', async (ctx, next) => {
  console.log('users')
  User.add()
})

router.get('/all', async (ctx, next) => {
  console.log(ctx)
  const allUsers = await User.getAll()
  ctx.set('Content-Type', 'application/json')
  ctx.body = { users: allUsers }
})

module.exports = router