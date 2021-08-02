import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { BLOCK, NONE } from '../../../../../const';
import {
  guestField,
  guestPopupDataState,
  guestPopupState,
  searchData,
} from '../../../../../Recoil/HeaderFieldsetState';
import GuestSection from './GuestSection';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const GuestPopup = () => {
  const guestState = useRecoilValue(guestPopupState);
  const guestData = useRecoilValue(guestField);
  const [guestPopupData, setGuestPopupData] =
    useRecoilState(guestPopupDataState);
  const [search, setSearch] = useRecoilState(searchData);

  const handleClickGuestPopup = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setGuestPopupData({
      ...guestPopupData,
      value: guestPopupData.value.map((el, idx) => {
        return {
          ...el,
          count: guestData.value[idx].count,
        };
      }),
    });

    setSearch({
      ...search,
      guest: {
        ...search.guest,
        adult: guestData.value[0].count,
        child: guestData.value[1].count,
        infant: guestData.value[2].count,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guestData.value]);

  return (
    <GuestPopupStyle {...{ guestState }} onClick={handleClickGuestPopup}>
      <GuestPopupWrapper>
        {guestPopupData.value.map(({ header, info, count, id }) => (
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
