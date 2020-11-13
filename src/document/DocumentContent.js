import ArtboardPreview from './ArtboardPreview';
import styled from 'styled-components';

const DocumentContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  padding: 20px;
`

const DocumentContent = ({artboards}) => (
  <DocumentContentGrid>
    {artboards.map((artboard, index) => <ArtboardPreview key={`${artboard.name}-${index}`} artboard={artboard} />)}
  </DocumentContentGrid>
)

export default DocumentContent;
