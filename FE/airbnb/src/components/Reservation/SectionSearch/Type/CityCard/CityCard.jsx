import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  citySectionState,
  // modalState,
} from '../../../../../Recoil/ReservationState';
import CityCardImage from './CityCardImage';
import CityCardStar from './CityCardStar';
import CityCardTitle from './CityCardTitle';
import CityCardType from './CityCardType';

const CityCard = ({ city }) => {
  const cityCard = useRef();
  const citySection = useRecoilValue(citySectionState);
  // const setModal = useSetRecoilState(modalState);
  const handleClickCityCard = (e) => {
    e.stopPropagation();

    // if (cityCard?.current?.contains(e.target)) return setModal(true);
    // setModal(false);
  };
  const type = citySection ? 'big' : 'small';
  useEffect(() => {
    window.addEventListener('click', handleClickCityCard);

    return () => window.removeEventListener('click', handleClickCityCard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CityCardStyle ref={cityCard} onClick={handleClickCityCard}>
      <CityCardWrapper>
        <CityCardContainer>
          <CityCardBox>
            <CityCardAnchor />
            {city ? (
              <div className="row">
                <CityCardImage roomImages={city.roomImages} {...{ type }} />
                <CityCardStar star={city.averageRating} />
                <CityCardType
                  location={city.location}
                  type={city.propertyType}
                />
                <CityCardTitle title={city.title} />
              </div>
            ) : (
              <>
                <CityCardImage />
                <CityCardStar />
                <CityCardType />
                <CityCardTitle />
              </>
            )}
          </CityCardBox>
        </CityCardContainer>
      </CityCardWrapper>
    </CityCardStyle>
  );
};

export default CityCard;

const CityCardStyle = styled.div`
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  width: 100%;

  @media (min-width: 744px) {
    width: 50%;
  }

  @media (min-width: 1128px) {
    width: 33.3333%;
  }
`;

const CityCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 6px;
  padding-right: 6px;

  @media (min-width: 744px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;
const CityCardContainer = styled.div`
  margin-bottom: 16px;
`;
const CityCardBox = styled.div`
  position: relative;
`;

const CityCardAnchor = styled.a`
  display: block;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  border-radius: 12px;
`;
