import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { REGIST, LOGOUT } from '../../../../const';
import { isLoggedIn } from '../../../../Recoil/LogInState';

const RegisterForm = () => {
  const isLogIn = useRecoilValue(isLoggedIn);

  return (
    <RegisterFormStyle>
      <div>{isLogIn ? `${LOGOUT}` : `${REGIST}`}</div>
    </RegisterFormStyle>
  );
};

export default RegisterForm;

const RegisterFormStyle = styled.a`
  appearance: none;
  background: transparent;
  border: 0px;
  color: #222;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
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

  div {
    flex: 1 0 auto;
  }

  :hover:not(:active) {
    background-color: #f7f7f7;
  }
`;
