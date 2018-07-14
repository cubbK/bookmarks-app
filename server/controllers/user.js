const Router = require('koa-router');
const router = new Router({
  prefix: '/user'
})

router.get('/', async (ctx, next) => {
  console.log('users')
})

module.exports = router