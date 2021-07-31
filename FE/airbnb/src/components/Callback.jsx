import { useEffect } from 'react';
import qs from 'qs';
import { URL as U } from '../const';
import { useLocation } from 'react-router';
import Loader from '../components/Loader';
import { useSetRecoilState } from 'recoil';
import { isLoggedIn } from '../Recoil/LogInState';

const Callback = () => {
  const location = useLocation();
  const setIsLogIn = useSetRecoilState(isLoggedIn);

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const response = await fetch(U.BASE_URL + '/github/login?code=' + code);
        const data = await response.json();

        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('avatarUrl', data.avatarUrl);
          setIsLogIn(true);
        } else {
          console.log('로그인 실패: 토큰 겟 실패');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loader />;
};

export default Callback;
