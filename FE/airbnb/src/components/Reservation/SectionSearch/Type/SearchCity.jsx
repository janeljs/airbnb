import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { citySectionState } from '../../../../Recoil/ReservationState';
// import TypeContent from './TypeContent';
import TypeContentCity from './TypeContentCity';
import TypeHeader from './TypeHeader';

const SearchCity = () => {
  const [citySection, setCitySection] = useRecoilState(citySectionState);

  useEffect(() => {
    setCitySection(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!citySection) return null;
  return (
    <>
      <TypeHeader />
      <TypeContentCity />
    </>
  );
};

export default SearchCity;
