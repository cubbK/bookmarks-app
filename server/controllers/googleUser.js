const Router = require("koa-router");
const User = require("../models/user");
const jwtDecode = require("jwt-decode");
var jwt = require("jsonwebtoken");

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
      userId: retrievedUser._id
    };

    const jwtResponse = jwt.sign(responseObject, process.env.JWT_TOKEN_SECRET);

    ctx.response.body = JSON.stringify(jwtResponse);
  } catch (err) {
    console.log(err);
    ctx.throw(400, "Cannot get user");
  }

  return next();
});

router.post("/getUserByToken", async (ctx, next) => {
  const userId = ctx.request.body.userId;

  try {
    const retrievedUser = await User.getUserByAccessToken(userId);
    ctx.response.body = JSON.stringify(retrievedUser);
  } catch (err) {
    ctx.throw(400, "Cannot get user");
  }

  return next();
});

module.exports = router;
