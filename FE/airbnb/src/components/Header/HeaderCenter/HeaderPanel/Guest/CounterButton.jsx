import styled from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  guestDeleteButton,
  guestField,
  searchData,
} from '../../../../../Recoil/HeaderFieldsetState';

const MinusButton = ({ count, id }) => {
  const [guestCount, setGuestCount] = useRecoilState(guestField);
  const [disabled, setDisabled] = useState(false);
  const setGuestDeleteButton = useSetRecoilState(guestDeleteButton);

  const handleClickMinusButton = (e, id) => {
    e.stopPropagation();

    if (
      id === 0 &&
      guestCount.value[0].count === 1 &&
      (guestCount.value[1].count !== 0 || guestCount.value[2].count !== 0)
    )
      return;

    setGuestCount({
      ...guestCount,
      value: guestCount.value.map((guest) =>
        guest.id === id ? { ...guest, count: guest.count - 1 } : guest
      ),
    });

    guestCount.value.map(
      (guest) =>
        guest.id === id &&
        guest.count === 0 &&
        setGuestCount({
          ...guestCount,
          state: false,
        })
    );
  };

  const checkCount = (count) => {
    guestCount.value.map(
      (guest) => guest.id === id && count === 0 && setDisabled(true)
    );
  };

  const checkDeleteButton = () => {
    guestCount.value.filter((guest) => guest.count === 0).length === 3 &&
      setGuestDeleteButton(false);
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
  const setGuestDeleteButton = useSetRecoilState(guestDeleteButton);
  const [search, setSearch] = useRecoilState(searchData);

  const handleClickPlusButton = (e, id) => {
    e.stopPropagation();

    setGuestDeleteButton(true);

    setGuestCount({
      ...guestCount,
      value: guestCount.value.map((guest) =>
        guest.id === id ? { ...guest, count: guest.count + 1 } : guest
      ),
      state: true,
    });

    if ((id === 1 || id === 2) && guestCount.value[0].count === 0) {
      setGuestCount({
        ...guestCount,
        value: guestCount.value.map((guest) =>
          guest.id === id
            ? { ...guest, count: guest.count + 1 }
            : guest && guest.id === 0
            ? { ...guest, count: guest.count + 1 }
            : guest
        ),
        state: true,
      });
    }
  };

  const checkCount = () => {
    guestCount.value.map(
      (guest) => guest.id === id && guest.max === count && setDisabled(true)
    );

    setSearch({
      ...search,
      guest: {
        ...search.guest,
        adult: guestCount.value[0].count,
        child: guestCount.value[1].count,
        infant: guestCount.value[2].count,
      },
    });
  };

  useEffect(() => {
    // console.log(count);
    // console.log(guestCount.value);
    // console.log(search);
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
