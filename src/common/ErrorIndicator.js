import Error from './assets/error.svg';
import styled from 'styled-components';
import I18n from '../i18n';
import { Link } from '@reach/router';

const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  p {
    color: #333;
    font-weight: 600;
  }

  a {
    color: #4b9ee6;
    font-weight: 600;
  }
`;

const IndicatorDetails = styled.div`
  margin-left: 10px;
`;

const ErrorImg = styled.img`
  height: 100px;
`

const ErrorIndicator = ({ text }) => {
  return (
    <IndicatorWrapper>
      <ErrorImg src={Error} aria-hidden='true' />
      <IndicatorDetails>
        <p>{text || I18n.defaults.error}</p>
        <Link to='/'>Back to home</Link>
      </IndicatorDetails>
    </IndicatorWrapper>
  );
};

export default ErrorIndicator;
