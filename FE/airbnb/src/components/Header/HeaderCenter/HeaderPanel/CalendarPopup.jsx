import { useState } from 'react';
import styled from 'styled-components';
import { CALENDAR, FREE } from '../../../../const';
import CalendarTabsButton from './Calendar/CalendarTabsButton';
import CalendarList from './Calendar/CalendarList';
import { Calendar as S } from '../../../../styles/styles';

const CalendarPopup = ({ calendarPopup }) => {
  const [tabState, setTabState] = useState(true);

  return (
    <S.CalendarPopup {...{ calendarPopup }}>
      <CalendarSection>
        <CalendarWrapper>
          <CalendarTabsWrapper>
            <CalendarTabsBox>
              <CalendarTabsButton
                {...{ setTabState }}
                buttonName={CALENDAR}
                selected={tabState}
              />
              <CalendarTabsButton
                {...{ setTabState }}
                buttonName={FREE}
                selected={!tabState}
              />
            </CalendarTabsBox>
          </CalendarTabsWrapper>
          <CalendarListWrapper>
            <CalendarList />
          </CalendarListWrapper>
        </CalendarWrapper>
      </CalendarSection>
    </S.CalendarPopup>
  );
};

export default CalendarPopup;

const CalendarSection = styled.section`
  padding-top: 16px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarWrapper = styled.div``;

const CalendarTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
`;

const CalendarTabsBox = styled.div`
  background-color: rgb(235, 235, 235);
  border-radius: 100px;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
`;

const CalendarListWrapper = styled.div``;
