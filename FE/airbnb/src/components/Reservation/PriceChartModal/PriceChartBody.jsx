import styled from 'styled-components';
// import useFetch from '../../../customHooks/useFetch';
import PriceChart from './PriceChart';
import PriceRange from './PriceRange';

const PriceChartBody = () => {
  // const priceList = useFetch(
  //   'https://codesquad-2021-api.herokuapp.com/airbnb/price',
  //   []
  // );

  // console.log(priceList.list);

  return (
    <PriceChartBodyStyle>
      <PriceChart />
      <PriceRange />
    </PriceChartBodyStyle>
  );
};

export default PriceChartBody;

const PriceChartBodyStyle = styled.div`
  margin: auto;
  width: 90%;
`;
