const Router = require('koa-router')
const passport = require('koa-passport')

const router = new Router({
  prefix: '/auth'
})

router.get('/google',
  passport.authenticate('google')
)

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  })
)

module.exports = router