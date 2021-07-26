import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <LoadingDiv>
      <LoginNotice>Loading</LoginNotice>
      <CircularProgress style={{ color: '#fff' }} size={100} />
    </LoadingDiv>
  );
};

const LoadingDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const LoginNotice = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 1rem;
  font-size: 30px;
  color: #fff;
  border-radius: 20px;
`;

export default Loader;
