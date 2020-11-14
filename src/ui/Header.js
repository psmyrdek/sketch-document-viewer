import styled from 'styled-components';
import SketchLogo from './assets/sketch-logo.svg';
import { Link } from '@reach/router';
import I18n from '../i18n';

const PageHeader = styled.header`
  background: white;
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  align-items: center;
`;

const PageTitle = styled.p`
  margin: 0;
  margin-left: 10px;
`;

const Header = ({title}) => (
  <PageHeader>
    <Link to='/'>
      <img src={SketchLogo} alt={I18n.common.header} />
    </Link>
    <PageTitle>{title}</PageTitle>
  </PageHeader>
);

export default Header;
