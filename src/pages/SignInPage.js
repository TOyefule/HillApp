import React, { useEffect, useState } from 'react';
import { getTikTokAuthURL } from '../services/oauthService';

const SignInPage = () => {
  const [authURL, setAuthURL] = useState('');

  useEffect(() => {
    setAuthURL(getTikTokAuthURL());
  }, []);

  return (
    <div className="sign-in-page">
      <h1>HillApp - Sign In</h1>
      <a href={authURL} className="btn btn-primary">
        Log in with TikTok
      </a>
    </div>
  );
};

export default SignInPage;
