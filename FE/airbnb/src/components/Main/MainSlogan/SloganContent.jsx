import styled from 'styled-components';
import { SLOGAN_CONTENT } from '../../../const';
import { SloganSpanContentStyle } from '../../../styles/CommonStyles';

const SloganContent = () => {
  return (
    <SloganContentStyle>
      <span>{SLOGAN_CONTENT}</span>
    </SloganContentStyle>
  );
};

export default SloganContent;

const SloganContentStyle = styled(SloganSpanContentStyle)`
  line-height: initial;
  padding-top: 12px;
  word-break: keep-all;

  span {
    white-space: pre-line;
    max-width: 100%;
    font-size: var(--tl-font-size, 14px);
    font-weight: var(--tl-font-weight, 400);
    letter-spacing: var(--tl-letter-spacing, 0em);
    line-height: var(--tl-line-height, 18px);
    color: var(--tl-color, #717171);
    word-break: keep-all;
  }

  @media ${({ theme }) => theme.L} {
    padding-top: 16px;
  }
`;
