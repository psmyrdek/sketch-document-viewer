import styled from 'styled-components';

const HEADER_HEIGHT = '65px';

const ArtboardPreviewFrame = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% - ${HEADER_HEIGHT});
    left: 0;
`

const ArtboardImg = styled.img`
    max-height: 100%;
    display: block;
    margin: 0 auto;
`

export const ArtboardPreview = ({artboard}) => {

    const lastFile = artboard.files[artboard.files.length - 1]
    const {url: artboardUrl} = lastFile.thumbnails[lastFile.thumbnails.length - 1];

    return (
        <ArtboardPreviewFrame>
            <ArtboardImg src={artboardUrl} />
        </ArtboardPreviewFrame>
    )
}

export default ArtboardPreview;