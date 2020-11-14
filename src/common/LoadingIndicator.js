import Loading from './assets/loading.svg';
import styled from 'styled-components';
import I18n from '../i18n';

const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  p {
    margin-left: 10px;
    color: #009fff;
    font-weight: 600;
  }
`;

const LoadingIndicator = ({ text }) => {
  return (
    <IndicatorWrapper>
      <img src={Loading} aria-hidden='true' alt='' />
      <p>{text || I18n.defaults.loading}</p>
    </IndicatorWrapper>
  );
};

export default LoadingIndicator;
