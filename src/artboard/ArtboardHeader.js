import Close from './assets/close.svg';
import LeftArr from './assets/arrow-left.svg';
import RightArr from './assets/arrow-right.svg';
import Breadcrumb from './assets/breadcrumb.svg';
import styled from 'styled-components';
import Button from '../ui/Button';
import I18n from '../i18n';

const ArtboardHeaderWrapper = styled.header`
  background: white;
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  align-items: center;
`;

const ActionButtons = styled.div`
  margin-left: 40px;

  & span {
    margin: 0 5px;
    color: #333;
  }
`;

const ArtboardHeader = ({ index, itemsTotal, onClose, onPrev, onNext }) => {
  return (
    <ArtboardHeaderWrapper>
      <Button transparent onClick={() => onClose()}>
        <img src={Close} alt={I18n.artboard.actions.close} />
      </Button>
      <ActionButtons>
        {index > 0 && (
          <Button transparent onClick={() => onPrev()}>
            <img src={LeftArr} alt={I18n.artboard.actions.prev} />
          </Button>
        )}
        <span>{index + 1}</span>
        <img src={Breadcrumb} aria-hidden='true' alt='' />
        <span>{itemsTotal}</span>
        {index < itemsTotal - 1 && (
          <Button transparent onClick={() => onNext()}>
            <img src={RightArr} alt={I18n.artboard.actions.next} />
          </Button>
        )}
      </ActionButtons>
    </ArtboardHeaderWrapper>
  );
};

export default ArtboardHeader;
