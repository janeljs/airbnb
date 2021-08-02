import styled from 'styled-components';
import { MODAL_TITLE } from '../../../../const';

const HeaderTitle = () => {
  return (
    <HeaderTitleStyle>
      <span>{MODAL_TITLE}</span>
    </HeaderTitleStyle>
  );
};

export default HeaderTitle;

const HeaderTitleStyle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;

  span {
    border: 0px;
    /* clip: rect(0 0 0 0);
    clip-path: inset(100%); */
    height: 1px;
    /* overflow: hidden; */
    padding: 0px;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    font-size: 22px;
    font-weight: 500;
  }
`;
