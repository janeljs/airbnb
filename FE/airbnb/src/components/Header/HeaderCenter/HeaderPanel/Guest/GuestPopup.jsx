import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { BLOCK, GUEST_PLACEHOLDER, NONE } from '../../../../../const';
import {
  guestField,
  guestPopupState,
  searchData,
} from '../../../../../Recoil/HeaderFieldsetState';
import GuestSection from './GuestSection';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const GuestPopup = () => {
  const guestState = useRecoilValue(guestPopupState);
  const [guestData, setGuestData] = useRecoilState(guestField);
  const search = useRecoilValue(searchData);
  console.log(search.guest);
  const handleClickGuestPopup = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const userGuestData = {
      initValue: GUEST_PLACEHOLDER,
      value: [
        {
          id: 0,
          header: '성인',
          info: '만 13세 이상',
          count: search.guest.adult,
          max: 16,
        },
        {
          id: 1,
          header: '어린이',
          info: '만 2~12세',
          count: search.guest.child,
          max: 5,
        },
        {
          id: 2,
          header: '유아',
          info: '만 2세 미만',
          count: search.guest.infant,
          max: 5,
        },
      ],
      state: false,
    };

    setGuestData(userGuestData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <GuestPopupStyle {...{ guestState }} onClick={handleClickGuestPopup}>
      <GuestPopupWrapper>
        {guestData.value.map(({ header, info, count, id }) => (
          <GuestSection {...{ header, info, count, id }} key={uuidv4()} />
        ))}
      </GuestPopupWrapper>
    </GuestPopupStyle>
  );
};

export default GuestPopup;

const GuestPopupStyle = styled.div`
  left: 0px;
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: 4;

  display: ${({ guestState }) => (guestState ? BLOCK : NONE)};
`;

const GuestPopupWrapper = styled.div`
  margin-left: -140px;

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
