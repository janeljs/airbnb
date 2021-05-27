import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  BLOCK,
  GUEST,
  GUEST_PLACEHOLDER,
  LOCATION,
  LOCATION_PLACEHOLDER,
  NONE,
} from '../../../const';
import {
  calendarPopupState,
  checkInButtonState,
  checkOutButtonState,
  guestPopupState,
  nearbyPopupState,
  panelState,
  searchButtonState,
  searchTextState,
} from '../../../Recoil/HeaderFieldsetState';
import CalendarPopup from './HeaderPanel/CalendarPopup';
import GuestPopup from './HeaderPanel/Guest/GuestPopup';
import NearbyPopup from './HeaderPanel/NearbyPopup';
import CheckInPanelButton from './HeaderPanel/CheckInPanelButton';
import CheckOutPanelButton from './HeaderPanel/CheckOutPanelButton';
import PanelLast from './HeaderPanel/PanelLast';
import PanelMenu from './HeaderPanel/PanelMenu';
import Search from './Search';

const FieldPanelMenu = () => {
  const nearby = useRef();
  const calendar = useRef();
  const checkIn = useRef();
  const checkOut = useRef();
  const guest = useRef();
  const setNearbyPopup = useSetRecoilState(nearbyPopupState);
  const setCalendarPopup = useSetRecoilState(calendarPopupState);
  const setGuestPopup = useSetRecoilState(guestPopupState);
  const setSearchState = useSetRecoilState(searchButtonState);
  const setSearchTextState = useSetRecoilState(searchTextState);
  const setPanelState = useSetRecoilState(panelState);
  const setCheckInButton = useSetRecoilState(checkInButtonState);
  const setCheckOutButton = useSetRecoilState(checkOutButtonState);
  const calendarState = useRecoilValue(calendarPopupState);

  const handleClickNearbyPopup = () => {
    setNearbyPopup(true);
    setSearchTextState(true);
    setPanelState(true);
    setCalendarPopup(false);
    setGuestPopup(false);
    setCheckInButton(false);
    setSearchState(false);
  };

  const handleClickCheckInPopup = () => {
    setCalendarPopup(true);
    setSearchTextState(true);
    setCheckInButton(true);
    setCheckOutButton(false);
    setNearbyPopup(false);
    setGuestPopup(false);
    setSearchState(false);
  };

  const handleClickCheckOutPopup = () => {
    setCalendarPopup(true);
    setSearchTextState(true);
    setCheckOutButton(true);
    setCheckInButton(false);
    setNearbyPopup(false);
    setGuestPopup(false);
    setSearchState(false);
  };

  const handleClickGuestPopup = () => {
    setGuestPopup(true);
    setSearchState(true);
    setSearchTextState(true);
    setPanelState(true);
    setNearbyPopup(false);
    setCalendarPopup(false);
    setCheckInButton(false);
    setCheckOutButton(false);
  };

  const handleClickClose = () => {
    setNearbyPopup(false);
    setCalendarPopup(false);
    setGuestPopup(false);
    setSearchState(false);
    setSearchTextState(false);
    setPanelState(false);
    setCheckInButton(false);
    setCheckOutButton(false);
  };

  const handleClickPopup = (e) => {
    if (calendar?.current?.contains(e.target)) return;
    if (nearby?.current?.contains(e.target)) handleClickNearbyPopup();
    else if (checkIn?.current?.contains(e.target)) handleClickCheckInPopup();
    else if (checkOut?.current?.contains(e.target)) handleClickCheckOutPopup();
    else if (guest?.current?.contains(e.target)) handleClickGuestPopup();
    else handleClickClose();
  };

  const handleMouseDownNearby = () => {
    setNearbyPopup(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickPopup, true);
    return () => {
      window.removeEventListener('click', handleClickPopup, true);
    };
  }, []);

  return (
    <FieldPanelMenuStyle>
      <FieldPanelMenuLeft ref={nearby} onMouseDown={handleMouseDownNearby}>
        <PanelMenu name={LOCATION} placeholder={LOCATION_PLACEHOLDER} />
        <NearbyPopup />
      </FieldPanelMenuLeft>
      <FieldPanelMenuSeparator />
      <FieldPanelMenuCenter>
        <CheckInPanelButtonStyle ref={checkIn}>
          <CheckInPanelButton />
        </CheckInPanelButtonStyle>
        <CalendarPopupStyle {...{ calendarState }} ref={calendar}>
          <CalendarPopup />
        </CalendarPopupStyle>
        <FieldPanelMenuSeparator />
        <CheckOutPanelButtonStyle ref={checkOut}>
          <CheckOutPanelButton />
        </CheckOutPanelButtonStyle>
      </FieldPanelMenuCenter>
      <FieldPanelMenuSeparator />
      <FieldPanelMenuRight ref={guest}>
        <PanelLast name={GUEST} placeholder={GUEST_PLACEHOLDER} />
        <GuestPopup />
        <Search />
      </FieldPanelMenuRight>
    </FieldPanelMenuStyle>
  );
};

export default FieldPanelMenu;

const FieldPanelMenuStyle = styled.div`
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  min-width: 0px;
  pointer-events: auto;
`;

const FieldPanelMenuLeft = styled.div`
  display: flex;
  flex: 1 0 0%;
  min-width: 0px;

  @media ${({ theme }) => theme.L} {
    flex: 1.5 0 0%;
  }
`;
const FieldPanelMenuCenter = styled.div`
  display: flex;
  flex: 2 0 0%;
  min-width: 0px;
`;

const FieldPanelMenuRight = styled.div`
  align-items: center;
  display: flex;
  margin: -1px;
  min-width: 0px;
  position: relative;
  flex: 0.95 0 auto;
`;

const FieldPanelMenuSeparator = styled.div`
  align-self: center;
  border-right: 1px solid #ddd;
  flex: 0 0 0px;
  height: 32px;
`;

const CheckInPanelButtonStyle = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  margin: -1px;
  min-width: 0px;
`;

const CheckOutPanelButtonStyle = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  margin: -1px;
  min-width: 0px;
`;

const CalendarPopupStyle = styled.div`
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
  right: 0px;

  display: ${({ calendarState }) => (calendarState ? BLOCK : NONE)};
`;