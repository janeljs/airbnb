import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nearbyRoomList } from '../../../../Recoil/ReservationState';
import TypeCity from './City/TypeCity';
import { v4 as uuidv4 } from 'uuid';
import { getPerNight } from '../../../../util';

const TypeContentCity = () => {
  const roomList = useRecoilValue(nearbyRoomList);
  const searchData = JSON.parse(localStorage.getItem('search'));

  const checkInDate = searchData.checkIn.date;
  const checkOutDate = searchData.checkOut.date;

  const perNight = getPerNight(checkInDate, checkOutDate);
  return (
    <TypeContentStyle>
      <TypeContentWrapper>
        {roomList &&
          roomList.map((room) => (
            <TypeCity key={uuidv4()} id={room.roomId} {...{ room, perNight }} />
          ))}
      </TypeContentWrapper>
    </TypeContentStyle>
  );
};

export default TypeContentCity;

const TypeContentStyle = styled.div`
  min-height: 400px;
  overflow: hidden;
`;

const TypeContentWrapper = styled.div`
  overflow-anchor: none;
`;
