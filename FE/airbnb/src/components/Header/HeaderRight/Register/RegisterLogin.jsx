import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { LOGIN } from '../../../../const';
import { gitHubLogin } from '../../../../Recoil/HeaderFieldsetState';
import GitHubIcon from '@material-ui/icons/GitHub';
import { isLoggedIn } from '../../../../Recoil/LogInState';
import { useEffect, useState } from 'react';
import { URL as U } from '../../../../const';
import jwt_decode from 'jwt-decode';

const RegisterLogin = () => {
  const [gitHubLoginState, setGitHubLoginState] = useRecoilState(gitHubLogin);
  const isLogIn = useRecoilValue(isLoggedIn);
  const [logInText, setLogInText] = useState(LOGIN);
  const authUri = `${U.AUTH}${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
  const token = localStorage.getItem('token');
  const decodedToken = token && jwt_decode(token);

  const handleClickLoginButton = (e) => {
    e.stopPropagation();
    if (isLogIn) return;

    if (gitHubLoginState) {
      return (window.location.href = authUri);
    }
    setGitHubLoginState(true);
  };

  useEffect(() => {
    isLogIn ? setLogInText(decodedToken.githubName) : setLogInText(LOGIN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogIn]);

  return (
    <RegisterLoginStyle
      {...{ isLogIn, gitHubLoginState }}
      onClick={handleClickLoginButton}
    >
      {isLogIn ? (
        <LoginStyle>{logInText}</LoginStyle>
      ) : (
        <>
          {gitHubLoginState ? (
            <GitHubLoginStyle>
              <div>
                <GitHubIcon />
              </div>
              <div>{`Sign in with GitHub`}</div>
            </GitHubLoginStyle>
          ) : (
            <LoginStyle>{LOGIN}</LoginStyle>
          )}
        </>
      )}
    </RegisterLoginStyle>
  );
};

export default RegisterLogin;

const RegisterLoginStyle = styled.div`
  appearance: none;
  background: transparent;
  border: 0px;
  color: #222;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 12px 16px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  white-space: nowrap;
  width: 100%;
  align-items: center;

  :hover:not(:active) {
    background-color: #f7f7f7;
  }

  ${({ isLogIn, gitHubLoginState }) =>
    !isLogIn &&
    gitHubLoginState &&
    `
    background: #222;
    padding: 9px 16px;

    :hover:not(:active) {
      background-color: #333;
    }
  `};
`;

const LoginStyle = styled.div`
  flex: 1 0 auto;
`;

const GitHubLoginStyle = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
`;
