import styled from 'styled-components';
import ModalBody from './ModalBody/ModalBody';
import ModalBottom from './ModalBottom/ModalBottom';
import ModalHeader from './ModalHeader/ModalHeader';
import Price from './Price';
import PriceInfo from './PriceInfo';

const DetailModal = () => {
  return (
    <DetailModalStyle id={'modal'}>
      <DetailModalWrapper>
        <DetailModalContainer>
          <ModalHeader />
          <ModalBody />
          <ModalBottom />
          <PriceInfo />
          <Price />
        </DetailModalContainer>
      </DetailModalWrapper>
    </DetailModalStyle>
  );
};

export default DetailModal;

const DetailModalStyle = styled.div`
  margin-top: 48px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  background: #fff;
`;

const DetailModalWrapper = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const DetailModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
