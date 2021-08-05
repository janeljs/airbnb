import styled from 'styled-components';
import StarLogo from '../../../../../svg/StarLogo';
import { getRandom } from '../../../../../utils/util';

const CityCardStarBig = ({ star }) => {
  const randomStar = getRandom(1, 5, false);
  const randomReview = getRandom(20, 150, true);

  return (
    <CityCardStarStyle>
      <SpanBig>
        <StarLogo />
        {star ? (
          <StarScore>{star}</StarScore>
        ) : (
          <StarScore>{randomStar}</StarScore>
        )}
        <Review>&nbsp;(후기 {randomReview}개)</Review>
      </SpanBig>
    </CityCardStarStyle>
  );
};

const CityCardStarSmall = ({ star }) => {
  const randomStar = getRandom(1, 5, false);
  const randomReview = getRandom(20, 150, true);
  return (
    <CityCardStarStyle>
      <CityCardStarWrapper>
        <SpanBox>
          <StarLogo />
          {star ? (
            <StarScore>{star}</StarScore>
          ) : (
            <StarScore>{randomStar}</StarScore>
          )}
          <Review>&nbsp;(후기 {randomReview}개)</Review>
        </SpanBox>
      </CityCardStarWrapper>
    </CityCardStarStyle>
  );
};

const CityCardStar = ({ star, type }) => {
  return {
    big: <CityCardStarBig {...{ star, type }} />,
    small: <CityCardStarSmall {...{ star, type }} />,
  }[type];
};

export default CityCardStar;

const CityCardStarStyle = styled.div`
  flex: 1 0 auto;
  margin-right: 12px;
`;

const CityCardStarWrapper = styled.div`
  margin-right: 10px;
  opacity: 1;
`;

const SpanBox = styled.span`
  align-items: center;
  display: flex;
  font-size: 14px;
  line-height: 18px;
`;

const StarScore = styled.span`
  color: rgb(34, 34, 34);
`;

const Review = styled.span`
  color: rgb(113, 113, 113);
`;

const SpanBig = styled.span`
  align-items: center;
  display: flex;
  font-size: 14px;
  line-height: 18px;
`;
