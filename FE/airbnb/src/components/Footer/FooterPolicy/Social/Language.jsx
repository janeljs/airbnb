import styled from 'styled-components';
import { FooterAnchor } from '../../../../styles/CommonStyles';
import LanguageLogo from './LanguageLogo';
import LanguageText from './LanguageText';

const Language = () => {
  return (
    <LanguageStyle>
      <LanguageAnchor>
        <LanguageLogo />
        <LanguageText />
      </LanguageAnchor>
    </LanguageStyle>
  );
};

export default Language;

const LanguageStyle = styled.span`
  :not(:last-child) {
    margin-right: 24px;
  }
`;

const LanguageAnchor = styled(FooterAnchor)`
  display: flex;
  white-space: nowrap;
  text-decoration: none;
`;
