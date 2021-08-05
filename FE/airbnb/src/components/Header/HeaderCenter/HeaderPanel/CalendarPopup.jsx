import { useState } from 'react';
import styled from 'styled-components';
import CalendarList from './Calendar/CalendarList';
import { Calendar as S } from '../../../../styles/styles';
import CalendarTabsWrapper from './Calendar/CalendarTabsWrapper';

const CalendarPopup = () => {
  const [tabState, setTabState] = useState(true);
  const handleClickCalendarPopup = (e) => e.stopPropagation();

  return (
    <S.CalendarPopup onClick={handleClickCalendarPopup}>
      <S.CalendarSection>
        <S.CalendarWrapper>
          <CalendarTabsWrapper {...{ tabState, setTabState }} />
          <CalendarListWrapper>
            <CalendarList />
          </CalendarListWrapper>
        </S.CalendarWrapper>
      </S.CalendarSection>
    </S.CalendarPopup>
  );
};

export default CalendarPopup;

const CalendarListWrapper = styled.div``;
