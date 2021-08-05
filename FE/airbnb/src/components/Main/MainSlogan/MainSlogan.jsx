import styled from 'styled-components';
import { MainSloganSize } from '../../../styles/CommonStyles';
import Background from './Background';
import Slogan from './Slogan';

const MainSlogan = () => {
  return (
    <MainSloganStyle>
      <Background />
      <Slogan />
    </MainSloganStyle>
  );
};

export default MainSlogan;

const MainSloganStyle = styled(MainSloganSize)`
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: calc(var(--hc-sm-height, 4) / var(--hc-sm-width, 3) * 100vw);

  @media ${({ theme }) => theme.M} {
    height: calc(var(--hc-md-height, 1) / var(--hc-md-width, 1) * 100vw);
  }
  @media ${({ theme }) => theme.L} {
    height: max(
      550px,
      min(85vh, calc(var(--hc-lg-height, 9) / var(--hc-lg-width, 16) * 100vw))
    );
  }
`;
