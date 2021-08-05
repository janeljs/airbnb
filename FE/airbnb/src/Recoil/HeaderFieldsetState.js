import { atom, selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import {
  CHECK_IN,
  CHECK_OUT,
  GUEST,
  GUEST_PLACEHOLDER,
  INPUT_DATE_PLACEHOLDER,
  LOCATION,
} from '../const';

export const headerFieldset = atom({
  key: 'headerFieldset',
  default: {
    stays: {
      state: true,
      id: uuidv4(),
    },
    experience: {
      state: false,
      id: uuidv4(),
    },
    online: {
      state: false,
      id: uuidv4(),
    },
  },
});

export const registerPopupState = atom({
  key: 'registerPopupState',
  default: false,
});

export const headerScrollState = atom({
  key: 'headerScrollState',
  default: false,
});

export const reservationState = atom({
  key: 'reservationState',
  default: false,
});

export const searchButtonState = atom({
  key: 'searchButtonState',
  default: false,
});

export const checkInField = atom({
  key: 'checkInField',
  default: {
    value: INPUT_DATE_PLACEHOLDER,
    state: false,
  },
});
export const checkOutField = atom({
  key: 'checkOutField',
  default: {
    value: INPUT_DATE_PLACEHOLDER,
    state: false,
  },
});

export const checkInFieldStyle = atom({
  key: 'checkInFieldStyle',
  default: false,
});
export const checkOutFieldStyle = atom({
  key: 'checkOutFieldStyle',
  default: false,
});

export const guestField = atom({
  key: 'guestField',
  default: {
    initValue: GUEST_PLACEHOLDER,
    value: [
      {
        id: 0,
        header: '성인',
        info: '만 13세 이상',
        count: 0,
        max: 16,
      },
      {
        id: 1,
        header: '어린이',
        info: '만 2~12세',
        count: 0,
        max: 5,
      },
      {
        id: 2,
        header: '유아', //
        info: '만 2세 미만',
        count: 0,
        max: 5,
      },
    ],
    state: false,
  },
});

export const guestPopupDataState = atom({
  key: 'guestPopupDataState',
  default: {
    initValue: GUEST_PLACEHOLDER,
    value: [
      {
        id: 0,
        header: '성인',
        info: '만 13세 이상',
        count: 0,
        max: 16,
      },
      {
        id: 1,
        header: '어린이',
        info: '만 2~12세',
        count: 0,
        max: 5,
      },
      {
        id: 2,
        header: '유아', //
        info: '만 2세 미만',
        count: 0,
        max: 5,
      },
    ],
    state: false,
  },
});

export const guestPopupTriggerState = atom({
  key: 'guestPopupTriggerState',
  default: false,
});

export const checkInDeleteButtonState = atom({
  key: 'checkInDeleteButtonState',
  default: false,
});
export const checkOutDeleteButtonState = atom({
  key: 'checkOutDeleteButtonState',
  default: false,
});

export const gitHubLogin = atom({
  key: 'gitHubLogin',
  default: false,
});

export const searchData = atom({
  key: 'searchData',
  default: {
    location: undefined,
    checkIn: null,
    checkOut: null,
    guest: {
      adult: 0,
      child: 0,
      infant: 0,
    },
  },
});

export const guestDeleteButtonState = atom({
  key: 'guestDeleteButtonState',
  default: false,
});

export const nearbyField = atom({
  key: 'nearbyField',
  default: ``,
});

export const fieldPanelMenuActiveState = atom({
  key: 'fieldPanelMenuActiveState',
  default: [false, false, false, false],
});

export const nearbyButtonState = selector({
  key: 'nearbyButtonState',
  get: ({ get }) => {
    const activeState = get(fieldPanelMenuActiveState);
    const nearbyButtonState = activeState[0];
    return nearbyButtonState;
  },
});

export const nearbyPopupState = selector({
  key: 'nearbyPopupState',
  get: ({ get }) => {
    const nearbyButton = get(nearbyButtonState);
    const nearbyPopupState = nearbyButton ? true : false;
    return nearbyPopupState;
  },
});

export const checkInButtonState = selector({
  key: 'checkInButtonState',
  get: ({ get }) => {
    const activeState = get(fieldPanelMenuActiveState);
    const checkInButtonState = activeState[1];
    return checkInButtonState;
  },
});

export const checkOutButtonState = selector({
  key: 'checkOutButtonState',
  get: ({ get }) => {
    const activeState = get(fieldPanelMenuActiveState);
    const checkOutButtonState = activeState[2];
    return checkOutButtonState;
  },
});

export const calendarPopupState = selector({
  key: 'calendarPopupState',
  get: ({ get }) => {
    const checkInButton = get(checkInButtonState);
    const checkOutButton = get(checkOutButtonState);
    const calendarPopupState = checkInButton || checkOutButton ? true : false;
    return calendarPopupState;
  },
});

export const guestButtonState = selector({
  key: 'guestButtonState',
  get: ({ get }) => {
    const activeState = get(fieldPanelMenuActiveState);
    const guestButtonState = activeState[3];
    return guestButtonState;
  },
});

export const guestPopupState = selector({
  key: 'guestPopupState',
  get: ({ get }) => {
    const guestButton = get(guestButtonState);
    const guestPopupState = guestButton ? true : false;
    return guestPopupState;
  },
});

export const searchTextState = selector({
  key: 'searchTextState',
  get: ({ get }) => {
    const activeState = get(fieldPanelMenuActiveState);
    const searchTextState =
      activeState.filter((state) => state).length !== 0 ? true : false;
    return searchTextState;
  },
});
