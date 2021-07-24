import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { BLOCK, CITY_LIST, NONE, SECTION_SUBURB } from '../../../../const';
import {
  calendarPopupState,
  checkInButtonState,
  nearbyPopupState,
  searchData,
  nearbyButtonState,
  nearbyField,
} from '../../../../Recoil/HeaderFieldsetState';
import { getRandom } from '../../../../util';

const NearbyPopup = () => {
  const [nearbyPopup, setNearbyPopup] = useRecoilState(nearbyPopupState);
  const [userSearchData, setUserSearchData] = useRecoilState(searchData);
  const setNearbyButton = useSetRecoilState(nearbyButtonState);
  const setCheckInButton = useSetRecoilState(checkInButtonState);
  const setCalendarPopup = useSetRecoilState(calendarPopupState);
  const nearbyValue = useRecoilValue(nearbyField);

  const handleClickNearbyPopup = (e) => {
    e.stopPropagation();

    const getCity = () => {
      const idx = getRandom(0, CITY_LIST.length, true);
      return CITY_LIST[idx];
    };
    const city = getCity();
    // navigator.geolocation.getCurrentPosition(console.log);
    console.log('city', city, 'nearby', nearbyValue);
    !nearbyValue
      ? setUserSearchData({
          ...userSearchData,
          location: city,
        })
      : setUserSearchData({
          ...userSearchData,
          location: nearbyValue,
        });

    setNearbyPopup(false);
    setNearbyButton(false);
    setCalendarPopup(true);
    setCheckInButton(true);
  };

  return (
    <NearbyPopupStyle {...{ nearbyPopup }} onClick={handleClickNearbyPopup}>
      <PopupBox>
        <PopupSection>
          <ul>
            <li>
              <NearbyIcon>
                <img
                  alt=""
                  src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&amp;im_q=lowq"
                />
              </NearbyIcon>
              <NearbyMsg>{SECTION_SUBURB}</NearbyMsg>
            </li>
          </ul>
        </PopupSection>
      </PopupBox>
    </NearbyPopupStyle>
  );
};

export default NearbyPopup;

const NearbyPopupStyle = styled.div`
  left: 0px;
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: 4;

  display: ${({ nearbyPopup }) => (nearbyPopup ? BLOCK : NONE)};
`;

const PopupBox = styled.div`
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 1;
  background: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
  margin-top: 12px;
  max-height: calc(100vh - 220px);
  overflow: hidden auto;
  padding: 16px 32px;
`;

const PopupSection = styled.section`
  ul {
    padding: 8px 0px;
    margin: 0px -32px -8px;
    width: 500px;
    li {
      cursor: pointer;
      list-style-type: none;
      width: 100%;
      display: flex;
      padding: 8px 16px 8px 32px;

      :hover {
        background-color: rgb(247, 247, 247);
      }
    }
  }
`;

const NearbyIcon = styled.div`
  font-size: 17px;
  background-color: rgb(247, 247, 247);
  border: 1px solid rgba(176, 176, 176, 0.2);
  border-radius: 8px;
  min-width: 48px;
  height: 48px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
`;

const NearbyMsg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(34, 34, 34);
    max-height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
