import { gql } from '@apollo/client';

export const DocumentQuery = gql`
  query GetSketchDocument($shortId: String!) {
    share(shortId: $shortId) {
      shortId
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const mapResponse = (documentData) => {
  const {
    share: {
      version: {
        document: {
          name: documentName,
          artboards: { entries: artboards },
        },
      },
    },
  } = documentData;

  return { documentName, artboards };
};
