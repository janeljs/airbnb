import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  headerScrollState,
  reservationState,
} from '../../Recoil/HeaderFieldsetState';
import { isLoggedIn, userData } from '../../Recoil/LogInState';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import jwt_decode from 'jwt-decode';

const Header = () => {
  const [headerState, setHeaderState] = useRecoilState(headerScrollState);
  const [reservation, setReservationState] = useRecoilState(reservationState);
  const setUser = useSetRecoilState(userData);
  const isLogIn = useRecoilValue(isLoggedIn);

  const handleScrollHeader = () => {
    const isPassedHeader = window.scrollY > 58;

    if (reservation) return;

    if (isPassedHeader) {
      return setHeaderState(true);
    }
    if (window.scrollY === 0) {
      return setHeaderState(false);
    }
  };

  const checkLogIn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const profile_url = localStorage.getItem('profile_url');
      const decoded = jwt_decode(token);

      setUser({
        id: decoded.githubId,
        image: profile_url,
      });
    }
  };

  useEffect(() => {
    checkLogIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogIn]);

  useEffect(() => {
    if (window?.location?.pathname === '/reservation') {
      setHeaderState(true);
      setReservationState(true);
    }
    window.addEventListener('scroll', handleScrollHeader, true);
    return () => {
      window.removeEventListener('scroll', handleScrollHeader, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reservation]);
  return (
    <HeaderStyle {...{ headerState }}>
      <HeaderWrapper>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </HeaderWrapper>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  ${({ headerState }) =>
    headerState
      ? `
  height: 80px;
  left: 0px;
  width: 100%;
  z-index: 100;
  --header-brand-color: #ff385c;
  position: fixed;
  top: 0px;

  ::before {
  background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0));
  content: '';
  height: 140%;
  left: 0px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 0;
  transition: opacity 150ms ease 0s;
  }

  ::after {
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
  transform-origin: 50% 0%;
  transition-duration: 150ms;
  transition-property: opacity, transform;
  transition-timing-function: ease;
  background: rgb(255, 255, 255);
  content: '';
  height: 45%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 0;
  opacity: 1;

    @media (min-width: 950px) {
      transform: scaleY(2.25);
    }
  }
      `
      : `
    height: 80px;
    left: 0px;
    width: 100%;
    z-index: 100;
    --header-brand-color: #FF385C;
    position: absolute;
    

    ::before {
    background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0));
    content: "";
    height: 140%;
    left: 0px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 0;
    transition: opacity 150ms ease 0s;
    }

    ::after {
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
    transform-origin: 50% 0%;
    transition-duration: 150ms;
    transition-property: opacity, transform;
    transition-timing-function: ease;
    background: rgb(255, 255, 255);
    content: "";
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 0;
    opacity: 0;

      @media (min-width: 950px) {
      transform: scaleY(2.25);
      }
    }
  `}
`;

const HeaderWrapper = styled.div`
  --page-shell-max-content-width: 1760px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
  max-width: 1440px;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;
  max-width: var(--page-shell-max-content-width, 1440px);

  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 744px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 950px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;
