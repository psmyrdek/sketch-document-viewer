import styled from 'styled-components';
import SketchLogo from './assets/sketch-logo.svg';
import { Link } from '@reach/router';

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
      <img src={SketchLogo} alt='Sketch logo' />
    </Link>
    <PageTitle>{title}</PageTitle>
  </PageHeader>
);

export default Header;
