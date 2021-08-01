import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { v4 as uuidv4 } from 'uuid';
import { BLOCK, NONE } from '../../../../const';
import { guestField } from '../../../../Recoil/HeaderFieldsetState';
import { modalGuestPopupState } from '../../../../Recoil/ReservationState';
import GuestSection from '../../../Header/HeaderCenter/HeaderPanel/Guest/GuestSection';

const ModlaBodyGuestPopup = () => {
  const modalGuestPopup = useRecoilValue(modalGuestPopupState);
  const guestData = useRecoilValue(guestField);

  return (
    <GuestPopupStyle {...{ modalGuestPopup }} id={'modal-guest-popup'}>
      <GuestPopupWrapper>
        {guestData.value.map(({ header, info, count, id }) => (
          <GuestSection {...{ header, info, count, id }} key={uuidv4()} />
        ))}
      </GuestPopupWrapper>
    </GuestPopupStyle>
  );
};

export default ModlaBodyGuestPopup;

const GuestPopupStyle = styled.div`
  left: 0px;
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: 4;

  display: ${({ modalGuestPopup }) => (modalGuestPopup ? BLOCK : NONE)};
`;

const GuestPopupWrapper = styled.div`
  margin-left: -22px;

  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 1;
  background: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
  margin-top: 12px;
  max-height: calc(100vh - 220px);
  overflow: hidden auto;
  padding: 16px 32px;
`;
