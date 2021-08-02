import styled from 'styled-components';
import AirbnbLogo from '../../svg/AirbnbLogo';
import AirbnbLogoSmall from '../../svg/AirbnbLogoSmall';

const HeaderLeft = () => {
  return (
    <HeaderLeftStyle>
      <HeaderLeftAnchor href="/">
        <AirbnbLogo />
        <AirbnbLogoSmall />
      </HeaderLeftAnchor>
    </HeaderLeftStyle>
  );
};

export default HeaderLeft;

const HeaderLeftStyle = styled.div`
  flex: 1 0 auto;

  @media (min-width: 950px) {
    flex: 1 0 140px;
  }
`;

const HeaderLeftAnchor = styled.a`
  outline: none;
  align-items: center;
  display: inline-flex;
  height: 80px;
  position: relative;
  vertical-align: middle;
  z-index: 1;
  color: #fff;

  ::before {
    border-radius: 12px;
    bottom: 8px;
    content: '';
    left: -8px;
    position: absolute;
    right: -8px;
    top: 8px;
  }
`;
