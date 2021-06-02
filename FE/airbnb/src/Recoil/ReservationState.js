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
