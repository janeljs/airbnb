import { useRecoilValue, useSetRecoilState } from 'recoil';
import useClickPanelMenuButton from '../../../hooks/useClickPanelMenuButton';
import { checkOutDeleteButtonState } from '../../../Recoil/HeaderFieldsetState';
import { FieldPanel as S } from '../../style/styles';
import CheckOutDeleteButton from './HeaderPanel/CheckOutDeleteButton';
import CheckOutPanelButton from './HeaderPanel/CheckOutPanelButton';

const FieldPanelMenuCheckOutButton = () => {
  const checkOutDeleteButton = useRecoilValue(checkOutDeleteButtonState);

  const { onClick } = useClickPanelMenuButton(2);

  return (
    <S.FieldPanelMenuCheckInButton {...{ onClick }}>
      <CheckOutPanelButton />
      {checkOutDeleteButton && <CheckOutDeleteButton />}
    </S.FieldPanelMenuCheckInButton>
  );
};

export default FieldPanelMenuCheckOutButton;
