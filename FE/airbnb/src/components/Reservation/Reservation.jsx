import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { CITY_LIST, PLACE_ID } from '../../const';
import useFetch from '../../customHooks/useFetch';
import { markerState } from '../../Recoil/MapState';
import { modalState, nearbyRoomList } from '../../Recoil/ReservationState';
import { moneyComma } from '../../util';
import ModalBox from './DetailModal/ModalBox';
import SectionMap from './SectionMap/SectionMap';
import SectionSearch from './SectionSearch/SectionSearch';
import { roomData } from '../../shared/mock';
import { useLocation } from 'react-router-dom';

const Reservation = () => {
  const setRoomList = useSetRecoilState(nearbyRoomList);
  const setMapData = useSetRecoilState(markerState);
  const [modal, setModal] = useRecoilState(modalState);
  const searchData = JSON.parse(localStorage.getItem('search'));
  console.log(searchData);

  const getPlaceId = (city) => {
    const idx = CITY_LIST.indexOf(city);
    const id = PLACE_ID[idx];
    return id;
  };
  const locationData = getPlaceId(searchData.location);
  const placeId = locationData && `placeId=${locationData}`;
  // const rooms = useFetch(
  //   `http://travel.airbnb.kro.kr/api/ios/rooms?${placeId}`,
  //   []
  // );
  const rooms = roomData;
  // console.log(rooms);

  // const pagingRooms = rooms.splice(0, 10);
  // setRoomList(pagingRooms);

  const mapDataList = roomData['인천'].map((el) => {
    const price = moneyComma(el.pricePerNight);
    return (el = {
      latitude: el.latitude,
      longitude: el.longitude,
      title: `₩${price.toString()}`,
    });
  });

  useEffect(() => {
    setMapData(mapDataList);
  }, []);

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
