import { useRecoilValue } from 'recoil';
import { GUEST } from '../../../const';
import useClickPanelMenuButton from '../../../hooks/useClickPanelMenuButton';
import {
  guestDeleteButtonState,
  guestPopupState,
} from '../../../Recoil/HeaderFieldsetState';
import { FieldPanel as S } from '../../../styles/styles';
import GuestDeleteButton from './HeaderPanel/Guest/GuestDeleteButton';
import GuestPopup from './HeaderPanel/Guest/GuestPopup';
import PanelLast from './HeaderPanel/PanelLast';
import Search from './Search';

const FieldPanelMenuGuest = () => {
  const guestPopup = useRecoilValue(guestPopupState);
  const guestDeleteButton = useRecoilValue(guestDeleteButtonState);

  const { onClick } = useClickPanelMenuButton(3);

  return (
    <S.FieldPanelMenuGuest {...{ onClick }}>
      <PanelLast name={GUEST} />
      {guestDeleteButton && <GuestDeleteButton />}
      {guestPopup && <GuestPopup />}
      <Search />
    </S.FieldPanelMenuGuest>
  );
};

export default FieldPanelMenuGuest;
