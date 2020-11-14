import React from 'react';
import { useParams } from '@reach/router';
import { useQuery } from '@apollo/client';
import { DocumentQuery, mapResponse } from '../api/documentQuery';
import ArtboardContent from './ArtboardContent';
import Header from '../ui/Header';
import LoadingIndicator from '../common/LoadingIndicator';
import ErrorIndicator from '../common/ErrorIndicator';
import I18n from '../i18n'

const Artboard = () => {
  const { documentId, artboardId } = useParams();

  const { loading, error, data } = useQuery(DocumentQuery, {
    variables: {
      shortId: documentId,
    },
  });

  if (loading) {
    return <LoadingIndicator text={I18n.artboard.loading} />;
  }
  if (error) {
    return <ErrorIndicator text={I18n.document.error} />;
  }

  const { artboards } = mapResponse(data);
  const artboardIndex = artboards.findIndex((artboard) => artboard.id === artboardId);
  const artboard = artboards[artboardIndex];

  return (
    <>
      {artboard ? (
        <ArtboardContent artboards={artboards} activeArtboard={artboard} activeArtboardIndex={artboardIndex} />
      ) : (
        <>
          <Header title={I18n.artboard.missing.header} />
          <ErrorIndicator text={I18n.artboard.missing.details} />
        </>
      )}
    </>
  );
};

export default Artboard;
