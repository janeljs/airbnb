import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { modalPrice } from '../../../Recoil/ReservationState';
import { moneyComma, getPerNight } from '../../../util';

const Price = () => {
  const searchData = JSON.parse(localStorage.getItem('search'));

  const checkInDate = searchData.checkIn.date;
  const checkOutDate = searchData.checkOut.date;
  const price = useRecoilValue(modalPrice);

  const perNight = getPerNight(checkInDate, checkOutDate);
  const totalPrice = moneyComma(price * perNight);

  return (
    <PriceStyle>
      <PriceWrapper>
        <PriceText>{`총 합계`}</PriceText>
        <PriceNumber>{`₩${totalPrice}`}</PriceNumber>
      </PriceWrapper>
    </PriceStyle>
  );
};

export default Price;

const PriceStyle = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  list-style-type: none;
  margin: 16px 0px 0px;
  padding: 24px 0px 12px;
`;

const PriceWrapper = styled.div`
  display: flex;
  padding-bottom: 0px;
`;

const PriceText = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  white-space: normal;
  font-weight: 800;
`;

const PriceNumber = styled.div`
  padding-left: 16px;
  white-space: nowrap;
  font-weight: 800;
`;
