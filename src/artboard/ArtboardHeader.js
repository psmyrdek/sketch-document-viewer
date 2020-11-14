import Close from './assets/close.svg';
import LeftArr from './assets/arrow-left.svg';
import RightArr from './assets/arrow-right.svg';
import Breadcrumb from './assets/breadcrumb.svg';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Button from '../ui/Button';

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

const ArtboardHeader = ({ index, itemsTotal, onPrev, onNext }) => {
  return (
    <ArtboardHeaderWrapper>
      <Link to='../..'>
        <img src={Close} alt='Close preview' />
      </Link>
      <ActionButtons>
        {index > 0 && (
          <Button transparent onClick={() => onPrev()}>
            <img src={LeftArr} alt='Show previous artboard' />
          </Button>
        )}
        <span>{index + 1}</span>
        <img src={Breadcrumb} aria-hidden='true' alt='' />
        <span>{itemsTotal}</span>
        {index < itemsTotal - 1 && (
          <Button transparent onClick={() => onNext()}>
            <img src={RightArr} alt='Show next artboard' />
          </Button>
        )}
      </ActionButtons>
    </ArtboardHeaderWrapper>
  );
};

export default ArtboardHeader;
