import { useRecoilValue, useSetRecoilState } from 'recoil';
import useClickPanelMenuButton from '../../../hooks/useClickPanelMenuButton';

import {
  checkInDeleteButtonState,
  fieldPanelMenuActiveState,
} from '../../../Recoil/HeaderFieldsetState';
import { FieldPanel as S } from '../../style/styles';
import CheckInDeleteButton from './HeaderPanel/CheckInDeleteButton';
import CheckInPanelButton from './HeaderPanel/CheckInPanelButton';

const FieldPanelMenuCheckInButton = () => {
  const checkInDeleteButton = useRecoilValue(checkInDeleteButtonState);

  const { onClick } = useClickPanelMenuButton(1);
  return (
    <S.FieldPanelMenuCheckInButton {...{ onClick }}>
      <CheckInPanelButton />
      {checkInDeleteButton && <CheckInDeleteButton />}
    </S.FieldPanelMenuCheckInButton>
  );
};

export default FieldPanelMenuCheckInButton;
