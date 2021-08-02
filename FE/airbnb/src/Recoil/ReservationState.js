import { atom, selector } from 'recoil';
import { GUEST_PLACEHOLDER } from '../const';

export const nearbyRoomList = atom({
  key: 'nearbyRoomList',
  default: null,
});

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const searchType = atom({
  key: 'searchType',
  default: null,
});

export const citySectionState = atom({
  key: 'citySectionState',
  default: false,
});

export const modalPrice = atom({
  key: 'modalPrice',
  default: 0,
});

export const filterPrice = atom({
  key: 'filterPrice',
  default: false,
});

export const currentPositionState = atom({
  key: 'currentPositionState',
  default: null,
});

export const stationRoomState = atom({
  key: 'stationRoomState',
  default: null,
});

export const selectedRoomInfoState = atom({
  key: 'selectedRoomInfoState',
  default: null,
});

export const modalGuestPopupState = atom({
  key: 'modalGuestPopupState',
  default: false,
});

export const modalGuestFieldState = atom({
  key: 'modalGuestFieldState',
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
        header: '유아',
        info: '만 2세 미만',
        count: 0,
        max: 5,
      },
    ],
    state: false,
  },
});

export const modalGuestPopupDataState = atom({
  key: 'modalGuestPopupDataState',
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
        header: '유아',
        info: '만 2세 미만',
        count: 0,
        max: 5,
      },
    ],
    state: false,
  },
});
