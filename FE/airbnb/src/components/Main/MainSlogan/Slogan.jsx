import styled from 'styled-components';
import { SloganFlexStyle } from '../../../styles/CommonStyles';
import SloganBox from './SloganBox';

const Slogan = () => {
  return (
    <SloganStyle>
      <SloganWrapper>
        <SloganBox />
      </SloganWrapper>
    </SloganStyle>
  );
};

export default Slogan;

const SloganStyle = styled.div`
  position: relative;
  width: 100%;
  max-width: 1760px;
  padding: 96px 24px 32px;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.M} {
    padding: 250px 40px 40px;
  }
  @media ${({ theme }) => theme.L} {
    padding: 191px 40px 45px;
  }
  @media ${({ theme }) => theme.XL} {
    padding: 146px 80px 40px;
  }
`;

const SloganWrapper = styled(SloganFlexStyle)`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: var(--ac-sm-justify-content, flex-start);

  @media ${({ theme }) => theme.M} {
    justify-content: var(--ac-md-justify-content, flex-start);
    align-items: center;
  }
  @media ${({ theme }) => theme.L} {
    justify-content: var(--ac-lg-justify-content, flex-start);
    align-items: center;
  }
`;
