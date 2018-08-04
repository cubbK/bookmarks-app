const Router = require("koa-router");
const User = require("../models/user");
const jwtDecode = require("jwt-decode");

const router = new Router({
  prefix: "/googleUser"
});

const getGoogleDataFromAuthorizationCode = require("../helpers/getGoogleDataFromAuthorizationCode.js");
router.use(getGoogleDataFromAuthorizationCode);

router.get("/", async (ctx, next) => {
  try {
    const refreshToken = ctx.googleTokens.refresh_token;
    const accessToken = ctx.googleTokens.access_token;

    const userInfo = jwtDecode(ctx.googleTokens.id_token);
    const userId = userInfo.sub;
    const userName = userInfo.given_name;

    
    const retrievedUser = await User.findOrCreateByGoogleId(userId);
    await User.setUserField(userId, "googleRefreshToken", refreshToken);
    


    const responseObject = {
      googleId: retrievedUser.googleId,
      googleAccessToken: accessToken,
      links: retrievedUser.links
    }

    ctx.response.body = JSON.stringify(responseObject);
  } catch (err) {
    console.log(err);
    ctx.throw(400, "Cannot get user")
  }

  return next();
});

module.exports = router;
