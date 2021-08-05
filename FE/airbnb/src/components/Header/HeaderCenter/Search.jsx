import styled from 'styled-components';
import { SEARCH_TEXT } from '../../../const';
import SearchLogo from '../../../svg/SearchLogo';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  headerScrollState,
  reservationState,
  searchData,
  searchTextState,
  fieldPanelMenuActiveState,
} from '../../../Recoil/HeaderFieldsetState';
import updatePanelMenuState from '../../../utils/updatePanelMenuState';

const Search = () => {
  const setHeaderState = useSetRecoilState(headerScrollState);
  const setReservation = useSetRecoilState(reservationState);
  const searchText = useRecoilValue(searchTextState);
  const search = useRecoilValue(searchData);

  const setFieldPanelMenuActive = useSetRecoilState(fieldPanelMenuActiveState);

  const handleClickSearchButton = (e) => {
    e.stopPropagation();

    if (!search.location)
      return updatePanelMenuState(0, setFieldPanelMenuActive);

    console.log(search);
    if (search.checkIn === '날짜 입력')
      return updatePanelMenuState(1, setFieldPanelMenuActive);

    if (search.checkOut === '날짜 입력')
      return updatePanelMenuState(2, setFieldPanelMenuActive);

    setReservation(true);
    setHeaderState(true);

    localStorage.setItem('search', JSON.stringify(search));
    window.location.href = '/reservation';
  };

  return (
    <SearchStyle onClick={handleClickSearchButton}>
      <SearchButton {...{ searchText }}>
        <UpperSpan>
          <InnerSpan />
        </UpperSpan>
        <BottomSpan>
          <SearchButtonBox>
            <SearchLogoBox>
              <SearchLogo />
            </SearchLogoBox>
            <SearchTextBox {...{ searchText }}>{SEARCH_TEXT}</SearchTextBox>
          </SearchButtonBox>
        </BottomSpan>
      </SearchButton>
    </SearchStyle>
  );
};

export default Search;

const SearchStyle = styled.div`
  flex: 0 0 auto;
  margin-left: -6px;
  padding-right: 9px;
  position: relative;
  z-index: 5;
`;

const SearchButton = styled.button`
  appearance: none;
  border: 0px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin: 0px;
  outline: none;
  overflow: hidden;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  background-color: #ff385c;
  border-radius: 24px;
  height: 48px;
  max-width: 48px;
  position: relative;
  transition: 0.2s max-width cubic-bezier(0.35, 0, 0.65, 1);
  vertical-align: middle;
  z-index: 0;

  ${({ searchText }) =>
    searchText
      ? `
  @media (min-width: 950px) {
    max-width: 200px;
    transition: none 0s ease 0s;
  }

  ::before {
    background: linear-gradient(
      to right,
      rgb(230, 30, 77) 0%,
      rgb(227, 28, 95) 50%,
      rgb(215, 4, 102) 100%
    );
    inset: 0px;
    content: '';
    position: absolute;
    transition: opacity 0.2s cubic-bezier(0.35, 0, 0.65, 1) 0s;
    will-change: opacity;
    z-index: 0;
  }
      `
      : `
    background-color:  #FF385C;

    ::before {
    background: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%);
    bottom: 0px;
    content: "";
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    transition: 0.2s opacity cubic-bezier(0.35, 0, 0.65, 1);
    will-change: opacity;
    z-index: 0;
    opacity: 0;
    }

    :hover::before {
    opacity: 1;
    }

  `};
`;

const SearchButtonBox = styled.div`
  display: inline-flex;
  padding: 16px;
  position: relative;
  z-index: 1;
`;

const SearchLogoBox = styled.div``;

const UpperSpan = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const InnerSpan = styled.span`
  background-position: calc((100 - var(--mouse-x, 0)) * 1%)
    calc((100 - var(--mouse-y, 0)) * 1%);
  --mouse-x: 43.0938;
  --mouse-y: 22.9167;

  display: block;
  width: 100%;
  height: 100%;
  min-width: 200px;
  background-size: 200% 200%;
  opacity: 0;
  transition: opacity 1.25s ease 0s;
  background-image: radial-gradient(
    circle at center center,
    rgb(255, 56, 92) 0%,
    rgb(230, 30, 77) 27.5%,
    rgb(227, 28, 95) 40%,
    rgb(215, 4, 102) 57.5%,
    rgb(189, 30, 89) 75%,
    rgb(189, 30, 89) 100%
  );
`;

const BottomSpan = styled.span`
  display: block;
  position: relative;
  pointer-events: none;
`;

const SearchTextBox = styled.div`
  opacity: 0;
  padding-left: 8px;
  padding-right: 4px;
  transition: opacity 0.1s cubic-bezier(0.35, 0, 0.65, 1) 0s;
  font-weight: 400;

  @media (min-width: 950px) {
    opacity: ${({ searchText }) => (searchText ? 1 : 0)};
    transition: none 0s ease 0s;
  }
`;
