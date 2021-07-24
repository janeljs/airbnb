import { useEffect } from 'react';
import qs from 'qs';
import { useRecoilState } from 'recoil';
import { isLoggedIn } from '../Recoil/LogInState';

const Callback = ({ location, history }) => {
  const [isLogIn, setIsLogIn] = useRecoilState(isLoggedIn);

  useEffect(() => {
    if (isLogIn) return;
    const getToken = async () => {
      const { jwt, profile_url } = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      });
      if (!jwt) return;

      localStorage.setItem('jwt', jwt);
      localStorage.setItem('profile_url', profile_url);
      setIsLogIn(true);
    };

    getToken();

    const homePage = '/';
    window.history.pushState(null, null, homePage);
  }, [location, history]);

  return <div>Callback</div>;
};

export default Callback;
