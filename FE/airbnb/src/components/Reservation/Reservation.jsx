import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import styled from 'styled-components';
import useFetch from '../../customHooks/useFetch';
// import { markerState } from '../../Recoil/MapState';
import {
  modalGuestPopupState,
  modalState,
  nearbyRoomList,
} from '../../Recoil/ReservationState';
import { getPlaceId, getRequestDate } from '../../util';
import ModalBox from './DetailModal/ModalBox';
import SectionMap from './SectionMap/SectionMap';
import SectionSearch from './SectionSearch/SectionSearch';

const Reservation = () => {
  const setRoomList = useSetRecoilState(nearbyRoomList);
  // const setMapData = useSetRecoilState(markerState);
  const [modal, setModal] = useRecoilState(modalState);
  const setModalGuestPopup = useSetRecoilState(modalGuestPopupState);
  const searchData = JSON.parse(localStorage.getItem('search'));
  console.log(searchData);
  const { location, checkIn, checkOut, guest } = searchData;

  const today = new Date();
  const year = today.getFullYear();
  const month = getRequestDate(today.getMonth() + 1);
  const date = getRequestDate(today.getDate());
  const nextDate = getRequestDate(today.getDate() + 1);
  const locationData = getPlaceId(location);
  const reqPlaceId = locationData && `placeId=${locationData}`;
  const reqCheckIn =
    checkIn === '날짜 입력'
      ? `&checkIn=${year}-${month}-${date}`
      : `&checkIn=${checkIn.year}-${getRequestDate(
          checkIn.month + 1
        )}-${getRequestDate(checkIn.date)}`;
  const reqCheckOut =
    checkOut === '날짜 입력'
      ? `&checkOut=${year}-${month}-${nextDate}`
      : `&checkOut=${checkOut.year}-${getRequestDate(
          checkOut.month + 1
        )}-${getRequestDate(checkOut.date)}`;

  const reqAdult = `&adult=${guest.adult}`;
  const reqChild = `&child=${guest.child}`;
  const reqInfant = `&infant=${guest.infant}`;

  const rooms = useFetch(
    `http://travel.airbnb.kro.kr/api/web/rooms?${reqPlaceId}${reqCheckIn}${reqCheckOut}${reqAdult}${reqChild}${reqInfant}`,
    null
  );

  const handleClickCloseModal = (e) => {
    if (!e.target.closest('#modal-guest-popup')) setModalGuestPopup(false);
    if (e.target.closest('button') || e.target.closest('#modal')) return;

    setModal(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickCloseModal, false);

    return () =>
      window.removeEventListener('click', handleClickCloseModal, false);
  }, []);

  useEffect(() => {
    rooms && setRoomList(rooms.filteredRooms[`${location}`]);

    // setMapData(mapDataList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rooms]);

  return (
    <>
      {modal && <ModalBox />}

      <ReservationStyle>
        <SectionSearch />
        <SectionMap />
      </ReservationStyle>
    </>
  );
};

export default Reservation;

const ReservationStyle = styled.div`
  inset: 105px 0px 0px;
  padding-bottom: 56px;
  padding-top: 80px;

  @media (min-width: 1128px) {
    padding-bottom: 0px;
  }
  ::before {
    content: ' ';
    display: table;
  }

  ::after {
    content: ' ';
    display: table;
    clear: both;
  }
`;
