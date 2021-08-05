import { Calendar as S } from '../../../../../styles/styles';
import CalendarMain from './CalendarMain';
import CalendarWeeks from './CalendarWeeks';

const CalendarListWrapper = () => {
  return (
    <S.CalendarListWrapper>
      <S.CalendarListStyle>
        <S.CalendarListWrapper>
          <S.CalendarListBox>
            <CalendarWeeks />
            <CalendarMain />
          </S.CalendarListBox>
        </S.CalendarListWrapper>
      </S.CalendarListStyle>
    </S.CalendarListWrapper>
  );
};

export default CalendarListWrapper;
