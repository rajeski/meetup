"use strict";

const axios = require("axios");

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=mad5k15puih83kp0ogmb35a82b" + // Meetup OAuth Key
    "&client_secret=dfqhimgcbk1h77l1fl3jbb1mn8" + // Meetup OAuth Secret
    "&grant_type=authorization_code" +
    "&redirect_uri=https://rajeski.github.io/meetup/" + // Meetup Redirect URL
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {

  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=mad5k15puih83kp0ogmb35a82b" + // Meetup OAuth Key
    "&client_secret=dfqhimgcbk1h77l1fl3jbb1mn8" + // Meetup OAuth Secret
    "&grant_type=authorization_code" +
    "&redirect_uri=https://rajeski.github.io/meetup/" + // Meetup Redirect URL
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};