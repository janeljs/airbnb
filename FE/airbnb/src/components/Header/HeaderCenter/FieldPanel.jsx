import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  headerScrollState,
  guestButtonState,
  nearbyButtonState,
  checkInButtonState,
  checkOutButtonState,
} from '../../../Recoil/HeaderFieldsetState';
import FieldPanelMenu from './FieldPanelMenu';

const FieldPanel = () => {
  const headerState = useRecoilValue(headerScrollState);
  const guestButton = useRecoilValue(guestButtonState);
  const nearbyButton = useRecoilValue(nearbyButtonState);
  const checkInButton = useRecoilValue(checkInButtonState);
  const checkOutButton = useRecoilValue(checkOutButtonState);

  return (
    <FieldPanelStyle
      {...{
        guestButton,
        nearbyButton,
        checkInButton,
        checkOutButton,
      }}
    >
      <FieldPanelMenu />
    </FieldPanelStyle>
  );
};

export default FieldPanel;

const FieldPanelStyle = styled.div`
  border: 1px solid #ddd;
  border-radius: 32px;
  color: #222;
  display: flex;
  height: 66px;
  position: relative;
  width: 100%;
  background-color: #fff;
  transition: all ease 0.4s;

  /* ${({ headerState }) =>
    headerState
      ? `
    visibility: hidden;
    opacity: 0;
    top: 0;
    scale(0, 0);
    `
      : `
    visibility: visible;
    opacity: 1;`} */

  ${({ guestButton, checkInButton, checkOutButton, nearbyButton }) =>
    (guestButton || checkInButton || checkOutButton || nearbyButton) &&
    `
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(247, 247, 247);
    `}
`;
