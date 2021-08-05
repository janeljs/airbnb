import styled from 'styled-components';
import { MainHostSize } from '../../../styles/CommonStyles';
import MainHostContent from './MainHostContent';

const MainHost = () => {
  return (
    <MainHostStyle>
      <MainHostWrapper>
        <MainHostContent />
      </MainHostWrapper>
    </MainHostStyle>
  );
};

export default MainHost;

const MainHostStyle = styled.div``;

const MainHostWrapper = styled(MainHostSize)`
  margin-right: auto;
  margin-left: auto;
  max-width: 1760px;
  margin-bottom: var(--exp-pdw-sm-bot, 40px);
  margin-top: var(--exp-pdw-sm-top, 0px);
  padding-left: var(--exp-pdw-sm-lead, 24px);
  padding-right: var(--exp-pdw-sm-trail, 24px);

  @media ${({ theme }) => theme.M} {
    margin-bottom: var(--exp-pdw-md-bot, 40px);
    margin-top: var(--exp-pdw-md-top, 0px);
    padding-left: var(--exp-pdw-md-lead, 40px);
    padding-right: var(--exp-pdw-md-trail, 40px);
  }
  @media ${({ theme }) => theme.XL} {
    margin-bottom: var(--exp-pdw-lg-bot, 40px);
    margin-top: var(--exp-pdw-lg-top, 0px);
    padding-left: var(--exp-pdw-lg-lead, 80px);
    padding-right: var(--exp-pdw-lg-trail, 80px);
  }
`;
