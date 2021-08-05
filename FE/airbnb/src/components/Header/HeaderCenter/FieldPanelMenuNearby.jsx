import { LOCATION, LOCATION_PLACEHOLDER } from '../../../const';
import NearbyPopup from './HeaderPanel/NearbyPopup';
import PanelMenu from './HeaderPanel/PanelMenu';
import { FieldPanel as S } from '../../../styles/styles';
import { useRecoilValue } from 'recoil';
import { nearbyPopupState } from '../../../Recoil/HeaderFieldsetState';
import useClickPanelMenuButton from '../../../hooks/useClickPanelMenuButton';

const FieldPanelMenuNearby = () => {
  const nearbyPopup = useRecoilValue(nearbyPopupState);

  const { onClick } = useClickPanelMenuButton(0);

  return (
    <S.FieldPanelMenuNearby {...{ onClick }}>
      <PanelMenu name={LOCATION} placeholder={LOCATION_PLACEHOLDER} />
      {nearbyPopup && <NearbyPopup />}
    </S.FieldPanelMenuNearby>
  );
};

export default FieldPanelMenuNearby;
