import styled from 'styled-components';

const HEADER_HEIGHT = '65px';

const ArtboardPreviewFrame = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - ${HEADER_HEIGHT});
  left: 0;
`;

const ArtboardImg = styled.img`
  max-height: 100%;
  display: block;
  margin: 0 auto;
`;

/* Unfortunately the relationship between document and artboard
is unclear for me at this point - I'm betting on
latest thumbnail from latest file as the biggest one. */
function getArtboardUrl(artboard) {
  const biggestFile = artboard.files[artboard.files.length - 1];
  const { url: artboardUrl } = biggestFile.thumbnails[biggestFile.thumbnails.length - 1];
  return artboardUrl;
}

export const ArtboardPreview = ({ artboard }) => {
  const artboardUrl = getArtboardUrl(artboard);

  return (
    <ArtboardPreviewFrame>
      <ArtboardImg src={artboardUrl} />
    </ArtboardPreviewFrame>
  );
};

export default ArtboardPreview;
