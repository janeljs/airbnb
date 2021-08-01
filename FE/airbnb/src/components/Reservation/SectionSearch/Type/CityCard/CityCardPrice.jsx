import styled from 'styled-components';
import { moneyComma } from '../../../../../util';

const CityCardPrice = ({ price, perNight }) => {
  const perNightPrice = moneyComma(price);

  const totalPrice = moneyComma(perNight * price);

  return (
    <CityCardPriceStyle>
      <PriceWrapper>
        <PriceContainer>
          <div>{`₩${perNightPrice}`}</div> / 박
        </PriceContainer>
        <TotalPriceBox>
          <div>{`총액 ₩${totalPrice}`}</div>
        </TotalPriceBox>
      </PriceWrapper>
    </CityCardPriceStyle>
  );
};

export default CityCardPrice;

const CityCardPriceStyle = styled.div`
  margin-left: auto;
`;

const PriceWrapper = styled.div`
  font-size: 18px;
  line-height: 24px;
`;

const PriceContainer = styled.div`
  align-items: center;
  color: rgb(34, 34, 34);
  display: flex;
  font-weight: 400;
  flex-wrap: wrap;
  justify-content: flex-end;

  div {
    padding-right: 4px;
    font-weight: 800;
  }
`;

const TotalPriceBox = styled.div`
  margin-top: 2px;
  display: flex;
  justify-content: flex-end;

  div {
    font-size: 14px;
    line-height: 18px;
    color: rgb(113, 113, 113);
    font-weight: 400;
    text-decoration: underline;
  }
`;
