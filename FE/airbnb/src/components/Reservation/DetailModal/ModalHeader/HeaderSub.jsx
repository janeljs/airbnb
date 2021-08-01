import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedRoomInfoState } from '../../../../Recoil/ReservationState';
import ModalStarLogo from '../../../../svg/ModalStarLogo';

const HeaderSub = () => {
  const selectedRoomInfo = useRecoilValue(selectedRoomInfoState);

  return (
    <HeaderSubStyle>
      <SpanBox>
        <StarSpan>
          <ModalStarLogo />
        </StarSpan>
        <ScoreSpan>{selectedRoomInfo.starScore}</ScoreSpan>
        <ReviewAnchor>
          <span>(후기 20개)</span>
        </ReviewAnchor>
      </SpanBox>
    </HeaderSubStyle>
  );
};

export default HeaderSub;

const HeaderSubStyle = styled.div`
  margin-top: 8px;
`;

const SpanBox = styled.span`
  align-items: baseline;
  display: flex;
  font-size: 14px;
  line-height: 18px;
`;

const StarSpan = styled.span`
  font-size: 12px;
  text-align: center;
  color: #ff385c;
`;

const ScoreSpan = styled.span`
  color: rgb(34, 34, 34);
  padding-left: 4px;
  font-weight: 600;
`;

const ReviewAnchor = styled.a`
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-variant: inherit;
  line-height: inherit;
  color: rgb(34, 34, 34);
  text-decoration: none;
  outline: none;

  span {
    color: rgb(113, 113, 113);
    padding-left: 4px;
    font-weight: 600;
    text-decoration: underline;
  }
`;
