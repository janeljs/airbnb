import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
// import { markerState } from '../../../../Recoil/MapState';
import { modalState } from '../../../../Recoil/ReservationState';

const ModalBottom = () => {
  const setModal = useSetRecoilState(modalState);
  // const mapData = useRecoilValue(markerState);

  const handleClickReservationButton = () => {
    const jwt = localStorage.getItem('jwt');

    // const localData = localStorage.getItem('search');
    // const checkIn = localData.checkIn;
    // const checkOut = localData.checkOut;

    // const checkInMonth =
    //   localData && localData.checkIn?.month?.toString().legnth === 2
    //     ? localData.checkIn?.month
    //     : '0' + localData.checkIn?.month.toString();
    // const checkOutMonth =
    //   localData && localData.checkOut?.month?.toString().legnth === 2
    //     ? localData.checkOut?.month
    //     : '0' + localData.checkOut?.month.toString();

    const body = {
      // checkIn: `${checkIn?.year}-${checkInMonth}-${checkIn?.date}`,
      // checkOut: `${checkOut?.year}-${checkOutMonth}-${checkOut?.date}`,
      checkIn: `2021-07-03`,
      checkOut: `2021-07-07`,
      adults: 1,
      children: 2,
      infants: 0,
      totalPrice: 200000,
    };
    fetch('http://travel.airbnb.kro.kr/api/book/rooms/15', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(body),
    });
    setModal(false);
  };

  return (
    <ModalBottomStyle onClick={handleClickReservationButton}>
      <ReservationButtonStyle>
        <SpanButtonBox>
          <SpanButton>
            <span>{`예약하기`}</span>
          </SpanButton>
        </SpanButtonBox>
      </ReservationButtonStyle>
    </ModalBottomStyle>
  );
};

export default ModalBottom;

const ModalBottomStyle = styled.div`
  flex-shrink: 0;
`;

const ReservationButtonStyle = styled.button`
  background: linear-gradient(to right, #e61e4d 0%, #e31c5f 50%, #d70466 100%);
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;

  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  border: none;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  color: rgb(255, 255, 255);
  width: 100%;
`;

const SpanButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const SpanButton = styled.div`
  position: relative;
  pointer-events: none;
`;
