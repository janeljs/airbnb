import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { BLOCK, GUEST_PLACEHOLDER, NONE } from '../../../../const';
import {
  modalGuestFieldState,
  modalGuestPopupState,
} from '../../../../Recoil/ReservationState';
import GuestSection from '../../../Header/HeaderCenter/HeaderPanel/Guest/GuestSection';

const ModlaBodyGuestPopup = () => {
  const modalGuestPopup = useRecoilValue(modalGuestPopupState);
  const [modalGuestField, setModalGuestField] =
    useRecoilState(modalGuestFieldState);
  const searchData = JSON.parse(localStorage.getItem('search'));
  const guestData = searchData.guest;

  useEffect(() => {
    const userGuestData = {
      initValue: GUEST_PLACEHOLDER,
      value: [
        {
          id: 0,
          header: '성인',
          info: '만 13세 이상',
          count: guestData.adult,
          max: 16,
        },
        {
          id: 1,
          header: '어린이',
          info: '만 2~12세',
          count: guestData.child,
          max: 5,
        },
        {
          id: 2,
          header: '유아', //
          info: '만 2세 미만',
          count: guestData.infant,
          max: 5,
        },
      ],
      state: false,
    };

    setModalGuestField(userGuestData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GuestPopupStyle {...{ modalGuestPopup }} id={'modal-guest-popup'}>
      <GuestPopupWrapper>
        {modalGuestField.value.map(({ header, info, count, id }) => (
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
