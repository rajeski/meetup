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

    // "https://www.atatus.com",
    // "https://aws.amazon.com",
    // "https://www.atatus.com/accounts/5ec8e15c9be511400b0a2f00/projects",
    // "https://ap-northeast-1.console.aws.amazon.com/console/home?region=ap-northeast-1",
    // "https://br-rx.atatus.com/track/browser/perf/pageload?data=%7B%22nt%22%3A4425%2C%22dp%22%3A434%2C%22pr%22%3A102%2C%22pl%22%3A4961%2C%22timing%22%3A%7B%22ns%22%3A0%2C%22rds%22%3A-1%2C%22rde%22%3A-1%2C%22us%22%3A4431%2C%22ue%22%3A4431%2C%22fs%22%3A0%2C%22dls%22%3A28%2C%22dle%22%3A28%2C%22cs%22%3A28%2C%22scs%22%3A-1%2C%22ce%22%3A29%2C%22hs%22%3A-1%2C%22rqs%22%3A29%2C%22rps%22%3A4425%2C%22rpe%22%3A4437%2C%22dl%22%3A4434%2C%22di%22%3A4855%2C%22dcs%22%3A4855%2C%22dce%22%3A4859%2C%22dc%22%3A4959%2C%22ls%22%3A4959%2C%22le%22%3A4961%7D%2C%22fp%22%3A4865%2C%22fcp%22%3A4865%2C%22ts%22%3A1590649496672%2C%22apikey%22%3A%223b182ffd828c4b6ba05f057c19336311%22%2C%22request%22%3A%7B%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fmeetup%22%2C%22ua%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_5)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.61%20Safari%2F537.36%22%2C%22w%22%3A1920%2C%22h%22%3A1080%7D%2C%22connection%22%3A%7B%22dlk%22%3A3.25%2C%22eft%22%3A%224g%22%2C%22rtt%22%3A150%7D%2C%22tags%22%3A%5B%5D%2C%22user%22%3Anull%2C%22aid%22%3A%2253efeec3a6cc44bb9f2534c8253cbe6e%22%2C%22sid%22%3A%22fbe32efa68364585afc596e9a244e704%22%2C%22v%22%3A%22%22%2C%22_v%22%3A%224.2.1-spa%22%7D&callback=atatus._setFeatures&apikey=3b182ffd828c4b6ba05f057c19336311&v=4.2.1-spa",
    // "https://br-rx.atatus.com/track/browser/perf/session?apikey=3b182ffd828c4b6ba05f057c19336311&v=4.2.1-spa",
    // "https://rajeski.github.io",
    // "https://rajeski.github.io/meetup/",