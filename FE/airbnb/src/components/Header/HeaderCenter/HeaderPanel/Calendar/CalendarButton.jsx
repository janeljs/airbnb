import { useRecoilState, useSetRecoilState } from 'recoil';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  animation,
  calendarPositionState,
  todayData,
} from '../../../../../Recoil/CalendarState';
import { Calendar as S } from '../../../../../styles/styles';
import { LEFT, RIGHT } from '../../../../../const';

const CalendarButton = ({ direction }) => {
  const [calendarData, setCalendarData] = useRecoilState(todayData);
  const setAnimationState = useSetRecoilState(animation);
  const setCalendarPosition = useSetRecoilState(calendarPositionState);

  const handleClickButton = () => {
    if (direction === LEFT) {
      setCalendarData({
        ...calendarData,
        month: calendarData.month - 1,
      });

      setAnimationState(true);
      setCalendarPosition((position) => position + 391);

      setTimeout(() => {
        setAnimationState(false);
        setCalendarPosition(-391);
      }, 200);

      return;
    }
    if (direction === RIGHT) {
      setCalendarData({
        ...calendarData,
        month: calendarData.month + 1,
      });

      setAnimationState(true);
      setCalendarPosition((position) => position - 391);

      setTimeout(() => {
        setAnimationState(false);
        setCalendarPosition(-391);
      }, 200);

      return;
    }
  };

  return (
    <S.ButtonWrapper onClick={handleClickButton}>
      <S.ButtonBox {...{ direction }}>
        <S.ButtonStyle>
          <span>
            {direction === LEFT ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
          </span>
        </S.ButtonStyle>
      </S.ButtonBox>
    </S.ButtonWrapper>
  );
};
export default CalendarButton;
