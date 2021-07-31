import styled from 'styled-components';
import TypeCityContent from './TypeCityContent';
// import TypeCityTitle from './TypeCityTitle';

const TypeCity = ({ room, id }) => {
  return (
    <TypeCityStyle>
      <TypeCityWrapper>
        <TypeCityContainer>
          <TypeCityBox>
            {/* {cityName && <TypeCityTitle {...{ cityName }} />} */}
            <TypeCityContent {...{ room, id }} />
          </TypeCityBox>
        </TypeCityContainer>
      </TypeCityWrapper>
    </TypeCityStyle>
  );
};

export default TypeCity;

const TypeCityStyle = styled.div`
  ::before {
    display: flex;
    content: '';
  }
  ::after {
    display: flex;
    content: '';
  }
`;

const TypeCityWrapper = styled.div`
  background-color: transparent;
  padding-left: 24px;
  padding-right: 24px;
  max-width: none;

  @media (min-width: 1128px) {
    margin: 0px auto;
    position: relative;
  }
`;

const TypeCityContainer = styled.div``;

const TypeCityBox = styled.div`
  position: relative;
  z-index: 0;
`;
