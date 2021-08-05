import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { INPUT_DATE_PLACEHOLDER } from '../../../../const';
import {
  checkInField,
  checkOutDeleteButtonState,
  checkOutField,
} from '../../../../Recoil/HeaderFieldsetState';
import DeleteButtonIcon from '../../../../svg/DeleteButtonIcon';

const CheckOutDeleteButton = () => {
  const setCheckOutDeleteButton = useSetRecoilState(checkOutDeleteButtonState);
  const [checkOutFieldState, setCheckOutField] = useRecoilState(checkOutField);
  const [checkInFieldState, setCheckInField] = useRecoilState(checkInField);

  const handleClickDeleteButton = (e) => {
    e.stopPropagation();
    setCheckOutDeleteButton(false);

    if (checkOutFieldState.state && checkInFieldState.state) {
      setCheckInField({
        value: INPUT_DATE_PLACEHOLDER,
        state: false,
      });
      setCheckOutField({
        value: INPUT_DATE_PLACEHOLDER,
        state: false,
      });
    }

    if (checkOutFieldState.state)
      return setCheckOutField({
        value: INPUT_DATE_PLACEHOLDER,
        state: false,
      });
  };

  return (
    <CheckOutDeleteButtonStyle onClick={handleClickDeleteButton}>
      <CheckOutDeleteButtonBox>
        <CheckOutDelButton>
          <CheckOutDelButtonIconSpan>
            <DeleteButtonIcon />
          </CheckOutDelButtonIconSpan>
        </CheckOutDelButton>
      </CheckOutDeleteButtonBox>
    </CheckOutDeleteButtonStyle>
  );
};

export default CheckOutDeleteButton;

const CheckOutDeleteButtonStyle = styled.div`
  flex: 0 0 0%;
  position: relative;
  z-index: 5;
`;

const CheckOutDeleteButtonBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
`;

const CheckOutDelButton = styled.button`
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

const CheckOutDelButtonIconSpan = styled.span`
  position: relative;
`;
