import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  nearbyButtonState,
  nearbyField,
  searchData,
} from '../../../../Recoil/HeaderFieldsetState';

const PanelMenuLabel = ({ name, placeholder }) => {
  const nearbyButton = useRecoilValue(nearbyButtonState);
  const [nearbyValue, setNearbyValue] = useRecoilState(nearbyField);
  const [search, setSearch] = useRecoilState(searchData);

  const handleOnChange = (e) => {
    setNearbyValue(e.target.value);
  };

  useEffect(() => {
    setSearch({
      ...search,
      location: nearbyValue,
    });
  }, [nearbyValue]);

  return (
    <PanelMenuLabelStyle {...{ nearbyButton }}>
      <PanelMenuLabelWrapper>
        <PanelMenuDiv>{name}</PanelMenuDiv>
        {search.location && !nearbyButton ? (
          <div>{search.location}</div>
        ) : (
          <PanelMenuInput
            placeholder={placeholder}
            onChange={handleOnChange}
            value={nearbyValue}
          />
        )}
      </PanelMenuLabelWrapper>
    </PanelMenuLabelStyle>
  );
};

export default PanelMenuLabel;

const PanelMenuLabelStyle = styled.label`
  cursor: pointer;
  display: block;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 32px;
  flex: 1 0 0%;
  min-width: 0px;
  padding: 14px 32px;
  z-index: 2;

  :hover::before {
    display: block;
  }

  ::before {
    border-width: 0 1px;
    border-style: solid;
    content: '';
    display: none;
    height: 32px;
    margin-top: -16px;
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 0;
    border-left: 0px;
    border-color: ${({ nearbyButton }) => (nearbyButton ? `#f7f7f7` : `#fff`)};
  }

  ::after {
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 32px;
    bottom: 0px;
    content: '';
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 0;
  }

  :hover::after {
    background-color: #ebebeb;
  }

  ${({ nearbyButton }) =>
    nearbyButton &&
    `
  ::before {
    display: block;
  }

  ::after {
    background-color: #fff;
    border-color: #fff;
    box-shadow: 0px 6px 20px rgb(0 0 0 / 20%);
    left: 0px;
    right: 0px;
  }

  :hover::after {
    background-color: #fff;
  }
  `}
`;

const PanelMenuLabelWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const PanelMenuDiv = styled.div`
  font-weight: 800;
  letter-spacing: 0.04em;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 2px;
`;

const PanelMenuInput = styled.input`
  display: block;
  border: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  background: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #222;
  text-overflow: ellipsis;
  outline: none;
  cursor: default;
`;
