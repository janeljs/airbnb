import styled from 'styled-components';
import { SLOGAN_TARGET } from '../../../const';
import { SloganTargetSpanStyle } from '../../../styles/CommonStyles';

const SloganTarget = () => {
  return (
    <SloganTargetStyle>
      <a
        target="blank"
        href="https://www.airbnb.co.kr/s/all?refinement_paths%5B%5D=%2Fplaylists%2F46837"
      >
        <TargetStyle>
          <TargetTextStyle>{SLOGAN_TARGET}</TargetTextStyle>
        </TargetStyle>
      </a>
    </SloganTargetStyle>
  );
};

export default SloganTarget;

const SloganTargetStyle = styled.div`
  line-height: initial;
  padding-top: 12px;

  @media ${({ theme }) => theme.L} {
    padding-top: 16px;
  }

  a {
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    border-width: 1px;
    border-style: solid;
    border-color: #000;
    width: auto;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    color: #000;
    font-size: 14px;
    font-family: inherit;
    touch-action: manipulation;
    border: none;
    border-radius: 8px;
    background: transparent;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }
`;

const TargetStyle = styled(SloganTargetStyle)`
  justify-content: var(--ehcta-justify-content, flex-start);
  align-items: var(--ehcta-align-items);
  padding-top: var(--ehcta-padding-top, 8px);
  padding-right: var(--ehcta-padding-trailing, 16px);
  padding-bottom: var(--ehcta-padding-bottom, 8px);
  padding-left: var(--ehcta-padding-leading, 16px);
  max-height: var(--ehcta-max-height);
  max-width: var(--ehcta-max-width);
  background-color: var(--ehcta-background-color, #222);
  border-radius: 8px;
`;

const TargetTextStyle = styled(SloganTargetSpanStyle)`
  white-space: pre-line;
  max-width: 100%;
  font-size: var(--tl-font-size, 14px);
  font-weight: var(--tl-font-weight, 400);
  letter-spacing: var(--tl-letter-spacing, 0em);
  line-height: var(--tl-line-height, 18px);
  color: var(--tl-color, #222);
`;
