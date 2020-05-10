"use strict";

const axios = require("axios");

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    +"https://secure.meetup.com/oauth2/access" +
    "?client_id=mad5k15puih83kp0ogmb35a82b" + // Meetup OAuth Key
    "&client_secret=dfqhimgcbk1h77l1fl3jbb1mn8" + // Meetup OAuth Secret
    "&grant_type=authorization_code" +
    "&redirect_uri=https://rajeski.github.io/" + // Meetup Redirect URL
    "&code=USER_AUTHORIZATION_CODE"; // Unsure is it, AWS Access Key ID,
  // AWS Secret Access Key?

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
