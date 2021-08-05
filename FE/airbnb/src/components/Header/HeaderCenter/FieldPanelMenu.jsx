import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { FieldPanel as S } from '../../../styles/styles';
import {
  calendarPopupState,
  fieldPanelMenuActiveState,
} from '../../../Recoil/HeaderFieldsetState';
import CalendarPopup from './HeaderPanel/CalendarPopup';
import FieldPanelMenuNearby from './FieldPanelMenuNearby';
import FieldPanelMenuCheckInButton from './FieldPanelMenuCheckInButton';
import FieldPanelMenuCheckOutButton from './FieldPanelMenuCheckOutButton';
import FieldPanelMenuGuest from './FieldPanelMenuGuest';

const FieldPanelMenu = () => {
  const setFieldPanelMenuActive = useSetRecoilState(fieldPanelMenuActiveState);
  const calendarPopup = useRecoilValue(calendarPopupState);

  const handleClickClose = () =>
    setFieldPanelMenuActive((state) => state.map((el) => (el = false)));

  useEffect(() => {
    document.addEventListener('click', handleClickClose);
    return () => {
      document.removeEventListener('click', handleClickClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.FieldPanelMenu>
      <FieldPanelMenuNearby />
      <S.FieldPanelMenuSeparator />
      <S.FieldPanelMenuCalendar>
        <FieldPanelMenuCheckInButton />
        {calendarPopup && <CalendarPopup />}
        <S.FieldPanelMenuSeparator />
        <FieldPanelMenuCheckOutButton />
      </S.FieldPanelMenuCalendar>
      <S.FieldPanelMenuSeparator />
      <FieldPanelMenuGuest />
    </S.FieldPanelMenu>
  );
};

export default FieldPanelMenu;
