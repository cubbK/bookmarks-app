const Router = require('koa-router')
const User = require('../models/user')
const router = new Router({
  prefix: '/test'
})

router.get('/', async (ctx, next) => {
  console.log(ctx)
  return next()
})