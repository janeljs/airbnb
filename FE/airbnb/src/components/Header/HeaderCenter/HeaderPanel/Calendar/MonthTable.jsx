import styled from 'styled-components';
import EachDate from './EachDate';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

const MonthTable = ({ calendarBox }) => {
  const [eachMonth, setEachMonth] = useState(null);

  useEffect(() => {
    setEachMonth(calendarBox);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MonthTableStyle>
      <DateBoxWrapper>
        {eachMonth?.dateList.map((dateState) => (
          <EachDate
            {...{ eachMonth, setEachMonth, dateState }}
            key={uuidv4()}
          />
        ))}
      </DateBoxWrapper>
    </MonthTableStyle>
  );
};

export default MonthTable;

const MonthTableStyle = styled.div`
  border-spacing: 0px 2px;
  border-collapse: separate;
`;

const DateBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
