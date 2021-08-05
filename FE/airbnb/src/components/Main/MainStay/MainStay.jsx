import styled from 'styled-components';
import { SectionWrapper } from '../../../styles/CommonStyles';
import MainStayContent from './MainStayContent';

const MainStay = () => {
  return (
    <MainStayStyle>
      <SectionWrapper>
        <MainStayContent />
      </SectionWrapper>
    </MainStayStyle>
  );
};

export default MainStay;

const MainStayStyle = styled.div`
  margin-bottom: 60px;
`;
