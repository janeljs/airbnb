import { Calendar as S } from '../../../../../styles/styles';
import CalendarDateTabButton from './CalendarDateTabButton';
import CalendarFreeTabButton from './CalendarFreeTabButton';

const CalendarTabsWrapper = ({ tabState, setTabState }) => {
  return (
    <S.CalendarTabsWrapper>
      <S.CalendarTabsBox>
        <CalendarDateTabButton {...{ tabState, setTabState }} />
        <CalendarFreeTabButton {...{ tabState, setTabState }} />
      </S.CalendarTabsBox>
    </S.CalendarTabsWrapper>
  );
};

export default CalendarTabsWrapper;
