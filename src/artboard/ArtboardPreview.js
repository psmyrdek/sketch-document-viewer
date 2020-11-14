import styled from 'styled-components';

const ArtboardPreviewWrapper = styled.div`
`

const ArtboardImg = styled.div`
    height: calc(100vh - 78px);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    margin: 0 auto;
`

export const ArtboardPreview = ({artboard}) => {

    const lastFile = artboard.files[artboard.files.length - 1]
    const {url: artboardUrl} = lastFile.thumbnails[lastFile.thumbnails.length - 1];

    return (
        <ArtboardPreviewWrapper>
            <ArtboardImg style={{backgroundImage: `url(${artboardUrl})`}}></ArtboardImg>
        </ArtboardPreviewWrapper>
    )
}

export default ArtboardPreview;