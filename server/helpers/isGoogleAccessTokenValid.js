const { oauth2Client } = require("../googleClient");

async function isGoogleAccessTokenValid(accessToken) {
  console.log(accessToken);
  const tokenInfo = await oauth2Client.getTokenInfo(accessToken);
  console.log(tokenInfo);
}

module.exports = isGoogleAccessTokenValid;
