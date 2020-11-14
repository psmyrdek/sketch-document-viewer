import {Link} from '@reach/router';
import styled from 'styled-components';

const DocumentArtboardCard = styled.div`
  background: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const DocumentArtboardContent = styled.div`
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
`;

const DocumentArtboardImg = styled.img`
    height: 100%;
    max-width: 100%;
`

const DocumentArtboardName = styled.p`
    border-top: 1px solid #eaeaea;
    color: #333;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    padding: 10px 2px;
    margin: 0;
`;

const DocumentArtboard = ({artboard}) => {

    const {url} = artboard.files[0].thumbnails[0];

    return (
        <Link to={`artboard/${artboard.id}`} style={{textDecoration: 'none'}}>
            <DocumentArtboardCard>
                <DocumentArtboardContent>
                    <DocumentArtboardImg loading={'lazy'} src={url} alt={artboard.name}/>
                </DocumentArtboardContent>
                <DocumentArtboardName>{artboard.name}</DocumentArtboardName>
            </DocumentArtboardCard>
        </Link>
    )
};

export default DocumentArtboard;
