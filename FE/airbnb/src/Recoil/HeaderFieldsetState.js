import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { GUEST_PLACEHOLDER, INPUT_DATE_PLACEHOLDER } from '../const';

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

export const nearbyPopupState = atom({
  key: 'nearbyPopupState',
  default: false,
});

export const calendarPopupState = atom({
  key: 'calendarPopupState',
  default: false,
});

export const guestPopupState = atom({
  key: 'guestPopupState',
  default: false,
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

export const nearbyButtonState = atom({
  key: 'nearbyButtonState',
  default: false,
});

export const guestButtonState = atom({
  key: 'guestButtonState',
  default: false,
});

export const checkInButtonState = atom({
  key: 'checkInButtonState',
  default: false,
});
export const checkOutButtonState = atom({
  key: 'checkOutButtonState',
  default: false,
});

export const searchTextState = atom({
  key: 'searchTextState',
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

export const checkInDeleteButton = atom({
  key: 'checkInDeleteButton',
  default: false,
});
export const checkOutDeleteButton = atom({
  key: 'checkOutDeleteButton',
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

export const guestDeleteButton = atom({
  key: 'guestDeleteButton',
  default: false,
});

export const nearbyField = atom({
  key: 'nearbyField',
  default: ``,
});
