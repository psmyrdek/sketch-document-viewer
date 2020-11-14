import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from '@reach/router';
import DocumentContent from './DocumentContent';
import EmptyDocument from './EmptyDocument';
import { DocumentQuery, mapResponse } from '../api/documentQuery';
import Header from '../ui/Header';
import LoadingIndicator from '../common/LoadingIndicator';
import ErrorIndicator from '../common/ErrorIndicator';
import I18n from '../i18n'

const Document = () => {
  const { documentId } = useParams();
  const { loading, error, data } = useQuery(DocumentQuery, {
    variables: {
      shortId: documentId,
    },
  });

  if (loading) {
    return <LoadingIndicator text={I18n.document.loading} />;
  }
  if (error) {
    return <ErrorIndicator text={I18n.document.error} />;
  }

  const { documentName, artboards } = mapResponse(data);

  return (
    <div>
      <Header title={documentName}></Header>
      {artboards.length ? <DocumentContent artboards={artboards} /> : <EmptyDocument />}
    </div>
  );
};

export default Document;
