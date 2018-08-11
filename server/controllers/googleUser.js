const Router = require("koa-router");
const User = require("../models/user");
const jwtDecode = require("jwt-decode");

const router = new Router({
  prefix: "/google"
});

const getGoogleTokenDataFromCode = require("../helpers/getGoogleTokenDataFromCode.js");
const isGoogleAccessTokenValid = require("../helpers/isGoogleAccessTokenValid");

router.post("/getUserByCodeAndSetRefreshToken", async (ctx, next) => {
  try {
    const tokens = await getGoogleTokenDataFromCode(ctx.request.body.code);

    const refreshToken = tokens.refresh_token;
    const accessToken = tokens.access_token;

    const userInfo = jwtDecode(tokens.id_token);
    const userId = userInfo.sub;
    const userName = userInfo.given_name;

    const retrievedUser = await User.findOrCreateByGoogleId(userId);
    await User.setUserField(userId, "googleRefreshToken", refreshToken);

    console.log(retrievedUser);

    const responseObject = {
      userId: retrievedUser._id,
      googleId: retrievedUser.googleId,
      googleAccessToken: accessToken,
      links: retrievedUser.links
    };

    ctx.response.body = JSON.stringify(responseObject);
  } catch (err) {
    console.log(err);
    ctx.throw(400, "Cannot get user");
  }

  return next();
});

router.post("/getUserByToken", async (ctx, next) => {
  const accessToken = ctx.request.body.token;

  isGoogleAccessTokenValid(accessToken);

  ctx.response.body = "get user by token";

  return next();
});

module.exports = router;
