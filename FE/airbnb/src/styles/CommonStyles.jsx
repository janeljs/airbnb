import styled from 'styled-components';

// Slogan
export const MainSloganSize = styled.div`
  --hc-sm-height: 488;
  --hc-sm-width: 375;
  --hc-md-height: 588;
  --hc-md-width: 744;
  --hc-lg-height: 564;
  --hc-lg-width: 1128;
`;

export const SloganFlexStyle = styled.div`
  --ac-sm-align-items: flex-start;
  --ac-sm-justify-content: flex-start;
  --ac-md-align-items: center;
  --ac-md-justify-content: flex-start;
  --ac-lg-align-items: center;
  --ac-lg-justify-content: flex-start;
  --ac-sm-tc-align-items: flex-start;
  --ac-sm-tc-text-align: start;
  --ac-md-tc-align-items: flex-start;
  --ac-md-tc-text-align: start;
  --ac-lg-tc-align-items: flex-start;
  --ac-lg-tc-text-align: start;
`;

export const SloganSpanHeadingStyle = styled.span`
  --tl-color: #222;
  --tl-font-size: 55px;
  --tl-font-weight: 700;
  --tl-letter-spacing: -0.02em;
  --tl-line-height: 62px;
`;

export const SloganSpanContentStyle = styled.span`
  --tl-color: #222;
  --tl-font-size: 18px;
  --tl-font-weight: 400;
  --tl-letter-spacing: -0.01em;
  --tl-line-height: 22px;
`;

export const SloganTargetStyle = styled.div`
  --ehcta-background-color: #222;
  --ehcta-background-style: #222;
  --ehcta-background-color-highlighted: #222;
  --ehcta-background-style-highlighted: #222;
`;

export const SloganTargetSpanStyle = styled.span`
  --tl-color: #fff;
  --tl-font-size: 14px;
  --tl-font-weight: 600;
  --tl-line-height: 18px;
`;

// Section
export const SectionStyle = styled.div`
  --exp-pdw-sm-bot: 48px;
  --exp-pdw-sm-top: 4px;
  --exp-pdw-md-bot: 8px;
  --exp-pdw-md-top: 40px;
  --exp-pdw-lg-bot: 24px;
  --exp-pdw-lg-top: 56px;
`;

export const SectionWrapper = styled(SectionStyle)`
  margin-bottom: var(--exp-pdw-sm-bot, 40px);
  margin-top: var(--exp-pdw-sm-top, 0px);
  padding-left: var(--exp-pdw-sm-lead, 0px);
  padding-right: var(--exp-pdw-sm-trail, 0px);

  @media ${({ theme }) => theme.M} {
    margin-bottom: var(--exp-pdw-md-bot, 40px);
    margin-top: var(--exp-pdw-md-top, 0px);
    padding-left: var(--exp-pdw-md-lead, 0px);
    padding-right: var(--exp-pdw-md-trail, 0px);
  }

  @media ${({ theme }) => theme.XL} {
    margin-bottom: var(--exp-pdw-lg-bot, 40px);
    margin-top: var(--exp-pdw-lg-top, 0px);
    padding-left: var(--exp-pdw-lg-lead, 0px);
    padding-right: var(--exp-pdw-lg-trail, 0px);
  }
`;

export const SectionContentWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1600px;

  @media ${({ theme }) => theme.M} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${({ theme }) => theme.XL} {
    margin: 0px auto;
    position: relative;
    max-width: 1760px;
    padding-right: 80px;
    padding-left: 80px;
  }
`;

// Main > Host
export const MainHostSize = styled.div`
  --exp-pdw-sm-bot: 24px;
  --exp-pdw-md-bot: 8px;
  --exp-pdw-lg-bot: 24px;
`;

// Footer
export const FooterSpan = styled.span`
  display: inline-block;
  text-align: center;
  width: 19px;
`;

export const FooterAnchor = styled.a`
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-variant: inherit;
  text-decoration: none;
  color: #222;
  font-size: 14px;
  line-height: 18px;
  font-weight: 300;
`;
