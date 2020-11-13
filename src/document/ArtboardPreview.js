import {Link} from '@reach/router';
import styled from 'styled-components';

const ArtboardPreviewCard = styled.div`
  background: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const ArtboardPreviewContent = styled.div`
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
`;

const ArtboardPreviewImg = styled.img`
    height: 100%;
    max-width: 100%;
`

const ArtboardPreviewName = styled.p`
    border-top: 1px solid #eaeaea;
    color: #333;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    padding: 10px 2px;
    margin: 0;
`;

const ArtboardPreview = ({artboard}) => {

    const {height, width, url} = artboard.files[0].thumbnails[0];

    return (
        <Link to='' style={{'text-decoration': 'none'}}>
            <ArtboardPreviewCard>
                <ArtboardPreviewContent>
                    <ArtboardPreviewImg src={url} alt='Artboard preview'/>
                </ArtboardPreviewContent>
                <ArtboardPreviewName>{artboard.name}</ArtboardPreviewName>
            </ArtboardPreviewCard>
        </Link>
    )
};

export default ArtboardPreview;
