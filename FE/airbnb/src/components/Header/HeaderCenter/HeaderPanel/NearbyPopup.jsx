import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  CITY_LIST,
  NEARBY_POPUP_ICON,
  SECTION_SUBURB,
} from '../../../../const';
import {
  nearbyPopupState,
  searchData,
  nearbyField,
  fieldPanelMenuActiveState,
} from '../../../../Recoil/HeaderFieldsetState';
import { getRandom } from '../../../../utils/util';
import { NearbyPopup as S } from '../../../../styles/styles';
import updatePanelMenuState from '../../../../utils/updatePanelMenuState';

const NearbyPopup = () => {
  const nearbyPopup = useRecoilValue(nearbyPopupState);
  const [userSearchData, setUserSearchData] = useRecoilState(searchData);
  const nearbyValue = useRecoilValue(nearbyField);
  const setFieldPanelMenuActive = useSetRecoilState(fieldPanelMenuActiveState);

  const handleClickNearbyPopupSection = (e) => {
    e.stopPropagation();

    const getCity = () => {
      const idx = getRandom(0, CITY_LIST.length, true);
      return CITY_LIST[idx];
    };
    const city = getCity();
    // navigator.geolocation.getCurrentPosition(console.log);
    console.log('city', city, 'nearby', nearbyValue);
    setUserSearchData({
      ...userSearchData,
      location: nearbyValue ? nearbyValue : city,
    });

    updatePanelMenuState(1, setFieldPanelMenuActive);
  };

  const handleClickNearbyPopup = (e) => e.stopPropagation();

  return (
    <S.NearbyPopup {...{ nearbyPopup }} onClick={handleClickNearbyPopup}>
      <S.NearbyPopupBox>
        <S.NearbyPopupSection onClick={handleClickNearbyPopupSection}>
          <ul>
            <li>
              <S.NearbyIcon>
                <img alt={NEARBY_POPUP_ICON} src={NEARBY_POPUP_ICON} />
              </S.NearbyIcon>
              <S.NearbyMsg>{SECTION_SUBURB}</S.NearbyMsg>
            </li>
          </ul>
        </S.NearbyPopupSection>
      </S.NearbyPopupBox>
    </S.NearbyPopup>
  );
};

export default NearbyPopup;
