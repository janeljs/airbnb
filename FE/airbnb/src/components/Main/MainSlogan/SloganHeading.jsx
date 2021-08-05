import styled from 'styled-components';
import { SLOGAN_HEADING } from '../../../const';
import {
  SloganSpanContentStyle,
  SloganSpanHeadingStyle,
} from '../../../styles/CommonStyles';

const SloganHeading = () => {
  return (
    <SloganHeadingStyle>
      <SloganHeadingSpan>{SLOGAN_HEADING}</SloganHeadingSpan>
    </SloganHeadingStyle>
  );
};

export default SloganHeading;

const SloganHeadingStyle = styled.div`
  word-break: keep-all;

  @media ${({ theme }) => theme.M} {
    span {
      white-space: pre-line;
      max-width: 100%;
      font-size: 45px;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 50px;
      color: #222;
    }
  }

  @media ${({ theme }) => theme.L} {
    span {
      ${SloganSpanContentStyle}
      white-space: pre-line;
      max-width: 100%;
      font-size: var(--tl-font-size, 32px);
      font-weight: var(--tl-font-weight, 800);
      letter-spacing: var(--tl-letter-spacing, 0em);
      line-height: var(--tl-line-height, 36px);
      color: var(--tl-color, #222);
    }
  }
`;

const SloganHeadingSpan = styled(SloganSpanHeadingStyle)`
  white-space: pre-line;
  max-width: 100%;
  font-size: 43px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 48px;
  color: #222;

  @media ${({ theme }) => theme.XXL} {
    white-space: pre-line;
    max-width: 100%;
    font-size: var(--tl-font-size, 32px);
    font-weight: var(--tl-font-weight, 800);
    letter-spacing: var(--tl-letter-spacing, 0em);
    line-height: var(--tl-line-height, 36px);
    color: var(--tl-color, #222);
  }
`;
