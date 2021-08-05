import styled from 'styled-components';
import {
  AGREEMENT,
  DETAIL_INFO,
  PRIVACY,
  REFUND,
  SITEMAP,
} from '../../../../const';

import { FooterAnchor } from '../../../../styles/CommonStyles';
import Dot from './Dot';

const CopyrightBoxRight = () => {
  return (
    <CopyrightBoxRightStyle>
      <DotStyle>
        <Dot />
      </DotStyle>
      <FooterAnchor>{PRIVACY}</FooterAnchor>
      <Dot />
      <FooterAnchor>{AGREEMENT}</FooterAnchor>
      <Dot />
      <FooterAnchor>{SITEMAP}</FooterAnchor>
      <Dot />
      <FooterAnchor>{REFUND}</FooterAnchor>
      <Dot />
      <FooterAnchor>{DETAIL_INFO}</FooterAnchor>
    </CopyrightBoxRightStyle>
  );
};

export default CopyrightBoxRight;

const CopyrightBoxRightStyle = styled.div`
  @media (min-width: 1128px) {
    display: inline-block;
    margin-left: -19px;
  }
`;

const DotStyle = styled.span`
  display: none;
  @media (min-width: 1128px) {
    display: inline-block;
  }
`;
