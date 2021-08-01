import styled from 'styled-components';
// import GoogleMap from './GoogleMap';
import KakaoMap from './KakaoMap';

const SectionMap = () => {
  return (
    <SectionMapStyle>
      <SectionMapAside>
        {/* <GoogleMap /> */}
        <KakaoMap />
      </SectionMapAside>
    </SectionMapStyle>
  );
};

export default SectionMap;

const SectionMapStyle = styled.div`
  top: 0px;

  inset: -5px 0px 0px;
  display: none;
  position: absolute;
  transition: none 0s ease 0s;

  @media (min-width: 1128px) {
    display: block;
    left: auto;
    width: calc(100% - 58vw);
  }
`;

const SectionMapAside = styled.aside`
  height: 100vh;
  padding-top: 80px;
  margin-top: -80px;
  position: sticky;
  top: 0px;

  width: 100%;
  contain: content;
`;
