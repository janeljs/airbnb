import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  citySectionState,
  modalPrice,
  modalState,
  nearbyRoomList,
} from '../../../../../Recoil/ReservationState';
import CityCardPrice from './CityCardPrice';
import CityCardStar from './CityCardStar';
import CityCardTitle from './CityCardTitle';
import CityCardType from './CityCardType';
import RaccoonSlider from '@juddroid_raccoon/react-slider/dist/raccoonSlider/RaccoonSlider';
import ExtraAttach from './ExtraAttach';

const CityCardLong = ({ room, id, perNight }) => {
  const cityCard = useRef();
  const citySection = useRecoilValue(citySectionState);
  const setModal = useSetRecoilState(modalState);
  const roomList = useRecoilValue(nearbyRoomList);
  const setModalPrice = useSetRecoilState(modalPrice);

  const handleClickCityCard = (e) => {
    e.stopPropagation();
    if (e.target.closest('button')) return;
    if (cityCard?.current?.contains(e.target)) {
      setModal(true);
      setModalPrice(
        roomList.filter((room) => room.roomId === id)[0].pricePerNight
      );
      return;
    }
    setModal(false);
  };
  const type = citySection ? 'big' : 'small';
  const amenities = room && room.amenities.join(' · ');
  const option = {
    cardWidth: 300,
    cardHeight: 200,
    cardMargin: 0,
    dataType: 'img',
    displayCardCount: 1,
    buttonType: 'default',
    buttonSize: 24,
  };

  useEffect(() => {
    window.addEventListener('click', handleClickCityCard);

    return () => window.removeEventListener('click', handleClickCityCard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CityCardLongStyle
      ref={cityCard}
      id={id}
      onClick={(e) => handleClickCityCard(e, id)}
    >
      {room && (
        <>
          <ExtraAttach />
          <RaccoonSlider data={room.roomImages} option={option} />
          <CityCardRightBox>
            <CityTitleBox>
              <CityTitleDiv>
                <CityCardType
                  location={room.location}
                  propertyType={room.propertyType}
                  {...{ type }}
                />
                <CityCardTitle title={room.title} {...{ type }} />
                <ShortLine />
                <OptionUpperStyle>
                  <span>
                    최대 인원 {room.maximumNumberOfGuests}명 · 침실{' '}
                    {room.roomAndBedOption.beds}개 · 침대{' '}
                    {room.roomAndBedOption.bedRooms}개 · 욕실{' '}
                    {room.roomAndBedOption.bathRooms}개
                  </span>
                </OptionUpperStyle>
                <OptionBottomStyle>
                  <span>{amenities}</span>
                </OptionBottomStyle>
                <PriceBox>
                  <CityCardStar star={room.averageRating} {...{ type }} />
                  <CityCardPrice
                    price={room.pricePerNight}
                    {...{ type, perNight }}
                  />
                </PriceBox>
              </CityTitleDiv>
            </CityTitleBox>
          </CityCardRightBox>
        </>
      )}
    </CityCardLongStyle>
  );
};

export default CityCardLong;

const CityCardLongStyle = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const CityCardRightBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 200px;
  margin-left: 16px;
`;

const CityTitleBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

const CityTitleDiv = styled.div`
  flex: 1 1 0%;
  margin-right: 16px;
`;

const ShortLine = styled.div`
  margin-top: 11px;
  width: 32px;
  border-top: 1px solid rgb(221, 221, 221);
`;

const OptionUpperStyle = styled.div`
  margin-top: 9px;
  color: rgb(113, 113, 113);
  font-weight: 400;
  min-height: 18px;
  font-size: 14px;
  line-height: 18px;
  max-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const OptionBottomStyle = styled.div`
  margin-top: 4px;
  color: rgb(113, 113, 113);
  font-weight: 400;
  min-height: 18px;
  font-size: 14px;
  line-height: 18px;
  max-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  margin-top: 40px;
`;
