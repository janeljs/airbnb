import { useState } from 'react';
import { Calendar as S } from '../../../../styles/styles';
import CalendarListWrapper from './Calendar/CalendarListWrapper';
import CalendarTabsWrapper from './Calendar/CalendarTabsWrapper';

const CalendarPopup = () => {
  const [tabState, setTabState] = useState(true);
  const handleClickCalendarPopup = (e) => e.stopPropagation();

  return (
    <S.CalendarPopup onClick={handleClickCalendarPopup}>
      <S.CalendarSection>
        <S.CalendarWrapper>
          <CalendarTabsWrapper {...{ tabState, setTabState }} />
          <CalendarListWrapper />
        </S.CalendarWrapper>
      </S.CalendarSection>
    </S.CalendarPopup>
  );
};

export default CalendarPopup;
