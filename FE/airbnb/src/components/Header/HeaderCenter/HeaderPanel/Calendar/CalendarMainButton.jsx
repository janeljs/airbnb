import { LEFT, RIGHT } from '../../../../../const';
import { Calendar as S } from '../../../../../styles/styles';
import CalendarButton from './CalendarButton';

const CalendarMainButton = () => {
  return (
    <S.CalendarMainButtonStyle>
      <CalendarButton direction={LEFT} />
      <CalendarButton direction={RIGHT} />
    </S.CalendarMainButtonStyle>
  );
};

export default CalendarMainButton;
