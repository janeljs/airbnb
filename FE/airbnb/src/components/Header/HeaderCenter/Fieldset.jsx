import styled from 'styled-components';
import { EXPERIENCE, ONLINE, STAYS } from '../../../const';
import FieldsetDiv from './FieldsetDiv';
import FieldsetLabel from './FieldsetLabel';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  headerFieldset,
  headerScrollState,
} from '../../../Recoil/HeaderFieldsetState';

const Fieldset = () => {
  const [isSelected, setIsSelected] = useRecoilState(headerFieldset);
  const headerState = useRecoilValue(headerScrollState);

  const handleClickLabel = (e) => {
    const currentID = e.currentTarget.id;
    switch (currentID) {
      case isSelected.stays.id:
        return setIsSelected({
          ...isSelected,
          stays: {
            ...isSelected.stays,
            state: true,
          },
          experience: {
            ...isSelected.experience,
            state: false,
          },
          online: {
            ...isSelected.online,
            state: false,
          },
        });
      case isSelected.experience.id:
        return setIsSelected({
          ...isSelected,
          stays: {
            ...isSelected.stays,
            state: false,
          },
          experience: {
            ...isSelected.experience,
            state: true,
          },
          online: {
            ...isSelected.online,
            state: false,
          },
        });
      case isSelected.online.id:
        return console.log('online');

      default:
        break;
    }
  };

  return (
    <FieldsetStyle>
      <FieldsetWrapper role="tablist" aria-label="무엇을 찾고 계신가요?">
        <FieldsetLabel
          id={isSelected.stays.id}
          dataText={STAYS}
          isSelected={isSelected.stays.state}
          {...{ handleClickLabel }}
        />
        <FieldsetLabel
          id={isSelected.experience.id}
          dataText={EXPERIENCE}
          isSelected={isSelected.experience.state}
          {...{ handleClickLabel }}
        />
        <FieldsetDiv
          id={isSelected.online.id}
          dataText={ONLINE}
          isSelected={isSelected.online.state}
          {...{ handleClickLabel }}
        />
      </FieldsetWrapper>
    </FieldsetStyle>
  );
};

export default Fieldset;

const FieldsetStyle = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;

  /* ${({ headerState }) =>
    headerState
      ? `
    visibility: hidden;
    opacity: 0;`
      : `
    visibility: visible;
    opacity: 1;`} */
`;

const FieldsetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;
