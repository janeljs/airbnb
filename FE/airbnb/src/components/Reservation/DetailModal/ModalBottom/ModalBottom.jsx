import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState, modalPrice } from '../../../../Recoil/ReservationState';
import { getRequestDate, getPerNight } from '../../../../util';

const ModalBottom = () => {
  const setModal = useSetRecoilState(modalState);

  const price = useRecoilValue(modalPrice);

  const handleClickReservationButton = () => {
    const token = localStorage.getItem('token');

    if (!token) return alert('로그인이 필요해요');

    const searchData = JSON.parse(localStorage.getItem('search'));
    const roomID = localStorage.getItem('roomID');
    const { checkIn, checkOut, guest } = searchData;

    const checkInDate = checkIn.date;
    const checkOutDate = checkOut.date;

    const perNight = getPerNight(checkInDate, checkOutDate);
    const totalPrice = price * perNight;

    const reqCheckIn = `${checkIn.year}-${getRequestDate(
      checkIn.month + 1
    )}-${getRequestDate(checkIn.date)}`;
    const reqCheckOut = `${checkOut.year}-${getRequestDate(
      checkOut.month + 1
    )}-${getRequestDate(checkOut.date)}`;

    const reqAdult = guest.adult;
    const reqChild = guest.child;
    const reqInfant = guest.infant;

    const body = {
      checkIn: reqCheckIn,
      checkOut: reqCheckOut,
      adults: reqAdult,
      children: reqChild,
      infants: reqInfant,
      totalPrice: totalPrice,
    };
    fetch(`http://travel.airbnb.kro.kr/api/book/rooms/${roomID}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => console.log('예약성공!', res));
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
