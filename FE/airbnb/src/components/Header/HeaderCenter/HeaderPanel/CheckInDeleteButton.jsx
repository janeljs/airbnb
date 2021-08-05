import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { INPUT_DATE_PLACEHOLDER } from '../../../../const';
import {
  checkInDeleteButtonState,
  checkInField,
  checkOutField,
} from '../../../../Recoil/HeaderFieldsetState';
import DeleteButtonIcon from '../../../../svg/DeleteButtonIcon';

const CheckInDeleteButton = () => {
  const setCheckInDeleteButton = useSetRecoilState(checkInDeleteButtonState);
  const [checkOutFieldState, setCheckOutField] = useRecoilState(checkOutField);
  const [checkInFieldState, setCheckInField] = useRecoilState(checkInField);

  const handleClickDeleteButton = (e) => {
    e.stopPropagation();
    setCheckInDeleteButton(false);

    if (checkInFieldState.state && checkOutFieldState.state) {
      setCheckInField({
        value: INPUT_DATE_PLACEHOLDER,
        state: false,
      });
      setCheckOutField({
        value: INPUT_DATE_PLACEHOLDER,
        state: false,
      });
      return;
    }

    setCheckInField({
      value: INPUT_DATE_PLACEHOLDER,
      state: false,
    });
  };

  return (
    <CheckInDeleteButtonStyle onClick={handleClickDeleteButton}>
      <CheckInDeleteButtonBox>
        <CheckInDelButton>
          <CheckInDelButtonIconSpan>
            <DeleteButtonIcon />
          </CheckInDelButtonIconSpan>
        </CheckInDelButton>
      </CheckInDeleteButtonBox>
    </CheckInDeleteButtonStyle>
  );
};

export default CheckInDeleteButton;

const CheckInDeleteButtonStyle = styled.div`
  flex: 0 0 0%;
  position: relative;
  z-index: 5;
`;

const CheckInDeleteButtonBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
`;

const CheckInDelButton = styled.button`
  appearance: none;
  display: inline-block;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: relative;
  background: transparent;
  transition: transform 0.25s ease 0s;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgb(235, 235, 235);
  }

  :hover {
    color: rgb(0, 0, 0);
  }

  :hover::before {
    background: rgb(221, 221, 221);
  }
`;

const CheckInDelButtonIconSpan = styled.span`
  position: relative;
`;
