import styled from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  guestDeleteButtonState,
  guestField,
  searchData,
} from '../../../../../Recoil/HeaderFieldsetState';
import {
  modalGuestFieldState,
  modalState,
} from '../../../../../Recoil/ReservationState';

const MinusButton = ({ count, id }) => {
  const [guestCount, setGuestCount] = useRecoilState(guestField);
  const [disabled, setDisabled] = useState(false);
  const setIsGuestDeleteButton = useSetRecoilState(guestDeleteButtonState);
  const modal = useRecoilValue(modalState);
  const [modalGuestCount, setModalGuestCount] =
    useRecoilState(modalGuestFieldState);
  const [search, setSearch] = useRecoilState(searchData);

  const handleClickMinusButton = (e, id) => {
    e.stopPropagation();

    const state = modal ? modalGuestCount : guestCount;

    const updateCallbackFunc = modal ? setModalGuestCount : setGuestCount;

    if (
      id === 0 &&
      state.value[0].count === 1 &&
      (state.value[1].count !== 0 || state.value[2].count !== 0)
    )
      return;

    updateCallbackFunc({
      ...state,
      value: state.value.map((guest) =>
        guest.id === id ? { ...guest, count: guest.count - 1 } : guest
      ),
    });

    state.value.map(
      (guest) =>
        guest.id === id &&
        guest.count === 0 &&
        updateCallbackFunc({
          ...state,
          state: false,
        })
    );
    setSearch({
      ...search,
      guest: {
        ...search.guest,
        adult: state.value[0].count,
        child: state.value[1].count,
        infant: state.value[2].count,
      },
    });
  };

  const checkCount = (count) => {
    const state = modal ? modalGuestCount : guestCount;

    state.value.map(
      (guest) => guest.id === id && count === 0 && setDisabled(true)
    );
  };

  const checkDeleteButton = () => {
    const state = modal ? modalGuestCount : guestCount;

    state.value.filter((guest) => guest.count === 0).length === 3 &&
      setIsGuestDeleteButton(false);
  };

  useEffect(() => {
    checkCount(count);
    checkDeleteButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <CounterButtonStyle
      disabled={disabled}
      onClick={(e) => handleClickMinusButton(e, id)}
    >
      <CounterIcon>
        <RemoveIcon />
      </CounterIcon>
    </CounterButtonStyle>
  );
};

const PlusButton = ({ count, id }) => {
  const [guestCount, setGuestCount] = useRecoilState(guestField);
  const [disabled, setDisabled] = useState(false);
  const setIsGuestDeleteButton = useSetRecoilState(guestDeleteButtonState);
  const [search, setSearch] = useRecoilState(searchData);
  const modal = useRecoilValue(modalState);
  const [modalGuestCount, setModalGuestCount] =
    useRecoilState(modalGuestFieldState);

  const handleClickPlusButton = (e, id) => {
    e.stopPropagation();

    const state = modal ? modalGuestCount : guestCount;

    const updateCallbackFunc = modal ? setModalGuestCount : setGuestCount;

    setIsGuestDeleteButton(true);

    updateCallbackFunc({
      ...state,
      value: state.value.map((guest) =>
        guest.id === id ? { ...guest, count: guest.count + 1 } : guest
      ),
      state: true,
    });

    if ((id === 1 || id === 2) && state.value[0].count === 0) {
      updateCallbackFunc({
        ...state,
        value: state.value.map((guest) =>
          guest.id === id
            ? { ...guest, count: guest.count + 1 }
            : guest && guest.id === 0
            ? { ...guest, count: guest.count + 1 }
            : guest
        ),
        state: true,
      });
    }

    setSearch({
      ...search,
      guest: {
        ...search.guest,
        adult: state.value[0].count,
        child: state.value[1].count,
        infant: state.value[2].count,
      },
    });
  };

  const checkCount = () => {
    const checkState = modal ? modalGuestCount : guestCount;

    checkState.value.map(
      (guest) => guest.id === id && guest.max === count && setDisabled(true)
    );
  };

  useEffect(() => {
    checkCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, search.guest.adult, search.guest.child, search.guest.infant]);

  return (
    <CounterButtonStyle
      disabled={disabled}
      onClick={(e) => handleClickPlusButton(e, id)}
    >
      <CounterIcon>
        <AddIcon />
      </CounterIcon>
    </CounterButtonStyle>
  );
};

const CounterButton = ({ type, count, id }) => {
  return {
    minus: <MinusButton {...{ count, id }} />,
    plus: <PlusButton {...{ count, id }} />,
  }[type];
};

export default CounterButton;

const CounterButtonStyle = styled.button`
  :disabled {
    cursor: not-allowed;
    color: rgb(235, 235, 235);
    border-color: rgb(235, 235, 235);
    background: rgb(255, 255, 255);
  }

  width: 32px;
  height: 32px;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  margin: 0px;
  padding: 0px;
  text-align: center;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(176, 176, 176);
  color: rgb(113, 113, 113);
  font-family: inherit;
  outline: none;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  border-radius: 50%;
`;

const CounterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 15px;
    width: 15px;
  }
`;
