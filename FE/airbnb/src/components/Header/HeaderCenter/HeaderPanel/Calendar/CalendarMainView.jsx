import Month from './Month';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  calendarPositionState,
  calendarWrapperSize,
  animation,
  getCalendar,
} from '../../../../../Recoil/CalendarState';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Calendar as S } from '../../../../../styles/styles';

const CalendarMainView = () => {
  // standard date (current)
  const calendarBoxList = useRecoilValue(getCalendar);
  const animationState = useRecoilValue(animation);
  const calendarPosition = useRecoilValue(calendarPositionState);
  const [boxHeight, setBoxHeight] = useRecoilState(calendarWrapperSize);

  setBoxHeight(
    calendarBoxList &&
      (calendarBoxList[1].dateList.length > 34 ||
        calendarBoxList[2].dateList.length > 34)
      ? 378
      : 340
  );

  return (
    <S.CalendarMainViewStyle {...{ boxHeight }}>
      <S.CalendarMainViewWrapper {...{ calendarPosition, animationState }}>
        {calendarBoxList.map((calendarBox) => (
          <Month {...{ calendarBox }} key={uuidv4()} />
        ))}
      </S.CalendarMainViewWrapper>
    </S.CalendarMainViewStyle>
  );
};

export default CalendarMainView;
