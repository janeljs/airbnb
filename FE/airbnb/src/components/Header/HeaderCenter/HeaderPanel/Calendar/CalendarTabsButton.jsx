import styled from 'styled-components';

const CalendarTabsButton = ({ buttonName, selected, setTabState }) => {
  const handleClickTabsButton = (e) => {
    e.stopPropagation();
    setTabState((prev) => !prev);
  };

  return (
    <CalendarTabsButtonStyle
      {...{ selected }}
      disabled={selected}
      onClick={handleClickTabsButton}
    >
      {buttonName}
    </CalendarTabsButtonStyle>
  );
};

export default CalendarTabsButton;

const CalendarTabsButtonStyle = styled.button`
  border-radius: 100px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  border: none;
  background: ${({ selected }) => (selected ? `#fff` : `none`)};
  color: rgb(34, 34, 34);
  padding: 5px 14px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 6px;
  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  position: relative;
  outline: none;
  cursor: pointer;

  :hover {
    background: rgb(247, 247, 247);
  }

  :active {
    transform: scale(0.96);
  }

  :disabled {
    background: #fff;
    cursor: default;
  }

  :last-child {
    margin-right: 0;
  }
`;
