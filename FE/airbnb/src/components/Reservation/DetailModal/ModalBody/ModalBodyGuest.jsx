import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { GUEST, GUEST_PLACEHOLDER } from '../../../../const';
import { modalGuestPopupState } from '../../../../Recoil/ReservationState';

const ModalBodyGuest = () => {
  const setModalGuestPopup = useSetRecoilState(modalGuestPopupState);

  const searchData = JSON.parse(localStorage.getItem('search'));
  const guestData = searchData.guest;

  const guest = guestData
    ? `게스트 ${guestData.adult + guestData.child}명, 유아 ${
        guestData.infant
      }명`
    : `${GUEST_PLACEHOLDER}`;

  const handleClickModalGuest = (e) => {
    e.stopPropagation();
    setModalGuestPopup((prev) => !prev);
  };

  return (
    <ModalBodyBox onClick={handleClickModalGuest}>
      <ModalBodyBottom>
        <div>
          <GuestLabel>
            <div>{GUEST}</div>
            <div>{guest}</div>
          </GuestLabel>
        </div>
      </ModalBodyBottom>
    </ModalBodyBox>
  );
};

export default ModalBodyGuest;

const ModalBodyBox = styled.div`
  display: flex;
`;

const ModalBodyBottom = styled.div`
  position: relative;
  width: 100%;

  border-top: 1px solid rgb(176, 176, 176);

  div {
    flex: 1 1 0%;
  }
`;

const CheckBox = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 0px;
  width: 100%;

  div:first-child {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    margin: 0px;
    padding: 0px;
    pointer-events: none;
    font-size: 10px;
    line-height: 12px;
    color: rgb(34, 34, 34);
    text-transform: uppercase;
    font-weight: 800;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div:last-child {
    height: 56px;
    width: 100%;
    border: none;
    outline: none;
    margin: 0px;
    padding: 26px 12px 10px;
    background-color: transparent;
    font-family: inherit;
    font-size: 14px;
    font-weight: inherit;
    line-height: 18px;
    appearance: none;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(113, 113, 113);
  }
`;

const GuestLabel = styled(CheckBox)`
  overflow: hidden;
`;
