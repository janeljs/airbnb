import styled from 'styled-components';
import CityCardLong from '../CityCard/CityCardLong';

const TypeCityContent = ({ room, id }) => {
  return (
    <TypeCityContentStyle>
      <TypeCityContentWrapper>
        <TypeCityUpperLine />
        <CityCardLong {...{ room, id }} />
        <TypeCityBottomLine />
      </TypeCityContentWrapper>
    </TypeCityContentStyle>
  );
};

export default TypeCityContent;

const TypeCityContentStyle = styled.div`
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  width: 100%;

  @media (min-width: 744px) {
    width: 100%;
  }
  @media (min-width: 1128px) {
    width: 100%;
  }
`;

const TypeCityContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 12px;

  @media (min-width: 744px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const TypeCityUpperLine = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;

  border-bottom-width: var(--border-rule-border-width, 1px);
  border-bottom-color: var(--color-divider, #ebebeb);
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const TypeCityBottomLine = styled.div`
  margin-top: 24px;
  margin-bottom: 4px;

  border-bottom-width: var(--border-rule-border-width, 1px);
  border-bottom-color: var(--color-divider, #ebebeb);
  border-bottom: 1px solid rgb(235, 235, 235);
`;
