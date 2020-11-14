import DocumentArtboard from './DocumentArtboard';
import styled from 'styled-components';

const DocumentContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 30px;
  padding: 20px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const DocumentContent = ({artboards}) => (
  <DocumentContentGrid>
    {artboards.map(artboard => <DocumentArtboard key={artboard.id} artboard={artboard} />)}
  </DocumentContentGrid>
)

export default DocumentContent;
