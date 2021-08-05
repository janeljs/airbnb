import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  CHECK_IN,
  CHECK_OUT,
  INPUT_DATE_PLACEHOLDER,
} from '../../../../../const';
import { current } from '../../../../../Recoil/CalendarState';
import {
  checkInButtonState,
  checkInField,
  checkOutButtonState,
  checkOutDeleteButtonState,
  checkOutField,
  searchData,
} from '../../../../../Recoil/HeaderFieldsetState';
import { getDate } from '../../../../../util';
import { setState } from '../../../../../util.ts';
// import { calendarMonthTriggerState } from '../../../../../Recoil/CalendarState';

const EachDate = ({ eachMonth, dateState }) => {
  const [selected, setSelected] = useState(false);
  const [isRange, setIsRange] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [disable, setDisable] = useState(false);
  const [checkInDate, setCheckInDate] = useRecoilState(checkInField);
  const [checkOutDate, setCheckOutDate] = useRecoilState(checkOutField);
  const [hoverBox, setHoverBox] = useState(null);
  const now = useRecoilValue(current);
  const setCheckInButton = useSetRecoilState(checkInButtonState);
  const [checkOutButton, setCheckOutButton] =
    useRecoilState(checkOutButtonState);
  const setCheckOutDeleteButton = useSetRecoilState(checkOutDeleteButtonState);
  const [search, setSearch] = useRecoilState(searchData);

  // 컴포넌트 날짜
  const currentComponentDate = new Date(
    eachMonth.year,
    eachMonth.month,
    dateState.date
  );

  const currentDate = {
    year: eachMonth.year,
    month: eachMonth.month,
    date: dateState.date,
  };

  // 선택된 체크인 날짜
  const selectedCheckInDate = {
    year: checkInDate.value.year,
    month: checkInDate.value.month,
    date: checkInDate.value.date,
  };

  // 선택된 체크아웃 날짜
  const selectedCheckOutDate = {
    year: checkOutDate.value.year,
    month: checkOutDate.value.month,
    date: checkOutDate.value.date,
  };

  const componentDate = getDate(currentDate);
  const selectedCheckIn = getDate(selectedCheckInDate);
  const selectedCheckOut = getDate(selectedCheckOutDate);

  const activeDate = (setCallback) =>
    setCallback({
      value: currentDate,
      state: true,
    });

  const resetDate = (setCallback) =>
    setCallback({
      value: INPUT_DATE_PLACEHOLDER,
      state: false,
    });

  const selectCheckIn = () => {
    if (componentDate > selectedCheckOut) {
      activeDate(setCheckInDate);
      resetDate(setCheckOutDate);
      setCheckInButton(false);
      setCheckOutButton(true);
      setCheckOutDeleteButton(false);
      return;
    }
    if (checkOutDate.state) {
      checkSelected();
      setCheckOutDeleteButton(true);
    }
    if (checkInDate.state) return;
    activeDate(setCheckInDate);
    setCheckInButton(false);
    setCheckOutButton(true);
  };

  const selectCheckOut = () => {
    if (checkOutDate.state) return;
    if (!checkInDate.state) {
      setCheckInButton(true);
      setCheckOutButton(false);
      activeDate(setCheckOutDate);
      return;
    }
    activeDate(setCheckOutDate);
    setCheckOutDeleteButton(true);
  };

  const checkPanelTab = () => {
    if (checkInDate.state && checkOutDate.state) return thirdDate();

    if (!checkInDate.state && !checkOutDate.state && checkOutButton)
      return CHECK_OUT;
    if (!checkInDate.state && !checkOutDate.state) return CHECK_IN;
    if (checkInDate.state && !checkOutDate.state) return thirdDate();
    if (!checkInDate.state && checkOutDate.state) return CHECK_IN;
  };

  const thirdDate = () => {
    if (componentDate < selectedCheckIn) {
      activeDate(setCheckInDate);
      resetDate(setCheckOutDate);
      setCheckOutDeleteButton(false);
      return;
    }
    if (componentDate > selectedCheckIn) {
      activeDate(setCheckOutDate);
      setCheckOutDeleteButton(true);
      checkSelected();
      return;
    }
  };

  const handleClickDate = () => {
    setState(setSelected, true);

    if (checkPanelTab() === CHECK_IN) return selectCheckIn();
    if (checkPanelTab() === CHECK_OUT) return selectCheckOut();
  };
  const todayDate = new Date(now.year, now.month, now.date);

  const checkSelected = () => {
    if (
      selectedCheckInDate.year === eachMonth.year &&
      selectedCheckInDate.month === eachMonth.month &&
      selectedCheckInDate.date === dateState.date
    ) {
      return setSelected(true);
    }
    if (
      selectedCheckOutDate.year === eachMonth.year &&
      selectedCheckOutDate.month === eachMonth.month &&
      selectedCheckOutDate.date === dateState.date
    ) {
      return setSelected(true);
    }
    setSelected(false);
  };

  const handleOnMouseEnter = () => {
    setIsHover(true);

    // 체크인 데이터가 없으면 리턴
    // 체크인 데이터가 있으면
    // 체크아웃 데이터를 임시로 저장

    setHoverBox(getDate(currentDate));
  };

  const handleOnMouseLeave = () => {
    // setIsRange(
    //   selectedCheckIn < currentComponentDate &&
    //     selectedCheckOut > currentComponentDate
    // );
    setIsHover(false);
  };

  useEffect(() => {
    setIsRange(
      selectedCheckIn < currentComponentDate &&
        selectedCheckOut > currentComponentDate
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHover]);

  useEffect(() => {
    setDisable(todayDate > currentComponentDate || dateState.date === null);
    checkSelected();
    setSearch({
      ...search,
      checkIn: checkInDate.value,
      checkOut: checkOutDate.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkInDate, checkOutDate]);

  return (
    <DateStyle {...{ checkInDate, checkOutDate, selected }}>
      <DateBox
        {...{ selected, isRange }}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onMouseDown={handleClickDate}
        disabled={disable}
      >
        <DateBoxDiv {...{ disable }}>
          <DateNum>{dateState.date}</DateNum>
        </DateBoxDiv>
      </DateBox>
    </DateStyle>
  );
};

export default EachDate;

const DateStyle = styled.div`
  width: 48px;
  height: 47px;
  border: 0px;
  padding: 0px;
  border-radius: 4px;
  margin: 1px 0px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  cursor: default;

  ${({ checkInDate, selected }) =>
    selected &&
    checkInDate.state &&
    `
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    background: rgb(247, 247, 247);
  `};
`;

const DateBox = styled.button`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;

  :disabled {
    cursor: default;

    :hover {
      background: #fff;
      border: none;
    }
  }

  :hover {
    border: 1px solid #222;
    background: #222;
    color: #fff;
    border-radius: 50%;
  }

  ${({ isRange }) =>
    isRange &&
    `
    
    background:rgb(247, 247, 247);
    
  `}

  ${({ selected }) =>
    selected &&
    `
  background: #222;
  color: #fff;
  border-radius: 50%;`}
`;

const DateBoxDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ disable }) =>
    disable &&
    `
    color: rgb(72, 72, 72);
  opacity: 0.25;`}
`;

const DateNum = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
`;
