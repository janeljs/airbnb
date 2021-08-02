import styled from 'styled-components';
import HeaderSearch from './HeaderCenter/HeaderSearch/HeaderSearch';
import HeaderLittleSearch from './HeaderCenter/HeaderLittleSearch/HeaderLittleSearch';

const HeaderCenter = () => {
  return (
    <HeaderCenterStyle>
      <HeaderLittleSearch />
      <HeaderSearch />
    </HeaderCenterStyle>
  );
};

export default HeaderCenter;

const HeaderCenterStyle = styled.div`
  flex: 0 1 auto;
  min-width: 0px;
  padding: 0 24px;

  /* @media (min-width: 950px) {
    text-align: center;
  } */
`;
