import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../../../customHooks/useFetch';
import { v4 as uuidv4 } from 'uuid';
import CityInfo from './CityInfo/CityInfo';
import { URL_HOME } from '../../../const';
import Loader from '../../Loader';

const MainSuburbSectionContent = () => {
  const data = useFetch(URL_HOME, []);
  const [nearby, setNearby] = useState(null);

  useEffect(() => {
    setNearby(data.nearbyDestinations);
  }, [data.nearbyDestinations]);

  if (!nearby) return <Loader />;

  return (
    <MainSuburbSectionContentStyle>
      {nearby.map((city) => (
        <CityInfo key={uuidv4()} {...{ city }} />
      ))}
    </MainSuburbSectionContentStyle>
  );
};

export default MainSuburbSectionContent;

const MainSuburbSectionContentStyle = styled.div`
  --column-count: 4;
  overflow-x: auto;
  display: grid;
  gap: 12px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns:
    repeat(calc(var(--column-count) - 1), calc(100% - 108px))
    100%;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;

  @media ${({ theme }) => theme.M} {
    padding-left: 0px;
    scroll-padding: 0px;
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.XL} {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
  }
`;
