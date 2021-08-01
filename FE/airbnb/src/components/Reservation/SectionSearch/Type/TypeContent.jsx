import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nearbyRoomList } from '../../../../Recoil/ReservationState';
import { v4 as uuidv4 } from 'uuid';
import TypeCityLong from './City/TypeCityLong';

const TypeContent = () => {
  const cityList = useRecoilValue(nearbyRoomList);

  const city = cityList && cityList[Object.keys(cityList)[0]];
  const cityName = cityList && Object.keys(cityList)[0];
  return (
    <TypeContentStyle>
      <TypeContentWrapper>
        {city &&
          city.map((city) => (
            <TypeCityLong key={uuidv4()} {...{ city, cityName }} />
          ))}
      </TypeContentWrapper>
    </TypeContentStyle>
  );
};

export default TypeContent;

const TypeContentStyle = styled.div`
  min-height: 400px;
  overflow: hidden;
`;

const TypeContentWrapper = styled.div`
  overflow-anchor: none;
`;
