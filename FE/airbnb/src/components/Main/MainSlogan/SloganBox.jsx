import styled from 'styled-components';
import { SloganFlexStyle } from '../../../styles/CommonStyles';
import SloganContent from './SloganContent';
import SloganHeading from './SloganHeading';
import SloganTarget from './SloganTarget';

const SloganBox = () => {
  return (
    <SloganBoxStyle>
      <SloganHeading />
      <SloganContent />
      <SloganTarget />
    </SloganBoxStyle>
  );
};

export default SloganBox;

const SloganBoxStyle = styled(SloganFlexStyle)`
  z-index: 0;
  flex-direction: column;
  width: 250px;
  display: flex;
  align-items: var(--ac-sm-tc-align-items, flex-start);
  text-align: var(--ac-sm-tc-text-align, start);

  @media (min-width: 744px) {
    width: 350px;
    line-height: 35px;
    align-items: var(--ac-md-tc-align-items, flex-start);
    text-align: var(--ac-md-tc-text-align, start);
  }
  @media (min-width: 950px) {
    display: flex;
    width: 383px;
    align-items: var(--ac-lg-tc-align-items, flex-start);
    text-align: var(--ac-lg-tc-text-align, start);
  }

  @media (min-width: 1440px) {
    width: 400px;
  }
`;
