import axios from 'axios';

export const getTikTokAuthURL = () => {
  const clientID = process.env.TIKTOK_CLIENT_ID;
  const redirectURI = process.env.TIKTOK_REDIRECT_URI;
  const responseType = 'code';
  
  return `https://open-api.tiktok.com/oauth/authorize/?client_key=${clientID}&response_type=${responseType}&scope=user.info.basic&redirect_uri=${redirectURI}`;
};

export const getTikTokAccessToken = async (code) => {
  const clientID = process.env.TIKTOK_CLIENT_ID;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
  const redirectURI = process.env.TIKTOK_REDIRECT_URI;

  const response = await axios.post('https://open-api.tiktok.com/oauth/access_token/', {
    client_key: clientID,
    client_secret: clientSecret,
    code: code,
    grant_type: 'authorization_code',
    redirect_uri: redirectURI,
  });
  
  return response.data.access_token;
};
