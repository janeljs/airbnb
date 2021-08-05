import { atom, selector } from 'recoil';
import { Calendar } from '../calendar';

export const calendarPositionState = atom({
  key: 'calendarPositionState',
  default: -391,
});

export const current = atom({
  key: 'current',
  default: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
  },
});

export const todayData = atom({
  key: 'todayDate',
  default: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
  },
});

export const getCalendar = selector({
  key: 'getCalendar',
  get: ({ get }) => {
    const calendar = get(todayData);
    const currentCalendar = new Calendar(
      calendar.year,
      calendar.month
    ).getCalendarList();
    return currentCalendar;
  },
});

export const calendarWrapperSize = atom({
  key: 'calendarWrapperSize',
  default: 0,
});

export const prevMonthBox = atom({
  key: 'prevMontohBox',
  default: true,
});

export const nextNextMonthBox = atom({
  key: 'nextNextMonthBox',
  default: true,
});

export const animation = atom({
  key: 'animation',
  default: false,
});

export const selectedCheckInDate = atom({
  key: 'selectedCheckInDate',
  default: null,
});
export const selectedCheckOutDate = atom({
  key: 'selectedCheckOutDate',
  default: null,
});
