import { atom } from 'recoil';

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
