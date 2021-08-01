import styled from 'styled-components';
import TypeHeaderFilter from './TypeHeaderFilter';
import TypeHeaderTitle from './TypeHeaderTitle';

const TypeHeader = () => {
  return (
    <TypeHeaderStyle>
      <TypeHeaderTitle />
      <TypeHeaderFilter />
    </TypeHeaderStyle>
  );
};

export default TypeHeader;

const TypeHeaderStyle = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  max-width: none;

  @media (min-width: 1128px) {
    margin: 0px auto;
    position: relative;
  }
`;
