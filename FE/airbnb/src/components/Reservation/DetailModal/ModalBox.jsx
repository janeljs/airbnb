import styled from 'styled-components';
import DetailModal from './DetailModal';

const ModalBox = () => {
  return (
    <>
      <Background />
      <ModalBoxStyle>
        <ModalBoxWrapper>
          <DetailModal />
        </ModalBoxWrapper>
      </ModalBoxStyle>
    </>
  );
};

export default ModalBox;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

const ModalBoxStyle = styled.div`
  position: fixed;
  top: 160px;
  left: 40%;
  display: flex;
  justify-content: center;
  width: 400px;
  max-width: 400px;
  z-index: 101;
`;

const ModalBoxWrapper = styled.div`
  position: sticky;
  top: 80px;
  z-index: 1;
  display: inline-block;
  width: 100%;
  padding-right: 1px;
`;
