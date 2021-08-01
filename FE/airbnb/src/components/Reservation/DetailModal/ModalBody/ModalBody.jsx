import styled from 'styled-components';
import {
  CHECK_IN,
  CHECK_OUT,
  GUEST,
  GUEST_PLACEHOLDER,
  INPUT_DATE_PLACEHOLDER,
} from '../../../../const';

const ModalBody = () => {
  const searchData = JSON.parse(localStorage.getItem('search'));
  const checkInData = searchData?.checkIn;
  const checkOutData = searchData?.checkOut;
  const guestData = searchData?.guest;
  const checkIn = checkInData
    ? `${checkInData.year}. ${checkInData.month + 1}. ${checkInData.date}.`
    : `${INPUT_DATE_PLACEHOLDER}`;
  const checkOut = checkOutData
    ? `${checkOutData.year}. ${checkOutData.month + 1}. ${checkOutData.date}.`
    : `${INPUT_DATE_PLACEHOLDER}`;
  const guest = guestData
    ? `게스트 ${guestData.adult + guestData.child}명, 유아 ${
        guestData.infant
      }명`
    : `${GUEST_PLACEHOLDER}`;

  return (
    <ModalBodyStyle>
      <ModalBodyWrapper>
        <ModalBodyContainer>
          <ModalBodyBox>
            <ModalBodyUpper>
              <div>
                <div>
                  <ModalBodyCheckBox>
                    <CheckInBoxStyle>
                      <div>{CHECK_IN}</div>
                      <div>{checkIn}</div>
                    </CheckInBoxStyle>
                    <CheckOutBoxStyle>
                      <div>{CHECK_OUT}</div>
                      <div>{checkOut}</div>
                    </CheckOutBoxStyle>
                  </ModalBodyCheckBox>
                </div>
              </div>
            </ModalBodyUpper>
          </ModalBodyBox>
          <ModalBodyBox>
            <ModalBodyBottom>
              <div>
                <GuestLabel>
                  <div>{GUEST}</div>
                  <div>{guest}</div>
                </GuestLabel>
              </div>
            </ModalBodyBottom>
          </ModalBodyBox>
        </ModalBodyContainer>
      </ModalBodyWrapper>
    </ModalBodyStyle>
  );
};

export default ModalBody;

const ModalBodyStyle = styled.div`
  margin-bottom: 16px;
`;

const ModalBodyWrapper = styled.div`
  position: relative;
`;

const ModalBodyContainer = styled.div`
  border-radius: 8px;
  border: 1px solid rgb(176, 176, 176);
`;

const ModalBodyBox = styled.div`
  display: flex;
`;

const ModalBodyUpper = styled.div`
  width: 100%;

  div {
    flex: 1 1 0%;

    div {
      position: relative;
    }
  }
`;

const ModalBodyCheckBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0px;
  border: none transparent;
  color: rgb(34, 34, 34);
  background-color: transparent;
  border-radius: 0px;
  box-shadow: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  outline: 0px;
`;

const CheckBox = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 0px;
  width: 100%;

  div:first-child {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    margin: 0px;
    padding: 0px;
    pointer-events: none;
    font-size: 10px;
    line-height: 12px;
    color: rgb(34, 34, 34);
    text-transform: uppercase;
    font-weight: 800;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div:last-child {
    height: 56px;
    width: 100%;
    border: none;
    outline: none;
    margin: 0px;
    padding: 26px 12px 10px;
    background-color: transparent;
    font-family: inherit;
    font-size: 14px;
    font-weight: inherit;
    line-height: 18px;
    appearance: none;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(113, 113, 113);
  }
`;

const CheckInBoxStyle = styled(CheckBox)`
  overflow: hidden;
`;
const CheckOutBoxStyle = styled(CheckBox)`
  overflow: hidden;
  border-left: 1px solid rgb(176, 176, 176);
`;

const ModalBodyBottom = styled.div`
  position: relative;
  width: 100%;

  border-top: 1px solid rgb(176, 176, 176);

  div {
    flex: 1 1 0%;
  }
`;

const GuestLabel = styled(CheckBox)`
  overflow: hidden;
`;
