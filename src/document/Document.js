import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from '@reach/router';
import DocumentContent from './DocumentContent';
import EmptyDocument from './EmptyDocument';
import { DocumentQuery, mapResponse } from './documentQuery';
import Header from '../ui/Header';

const Document = () => {
  const { shortId } = useParams();
  const { loading, error, data } = useQuery(DocumentQuery, {
    variables: {
      shortId,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { documentName, artboards } = mapResponse(data);

  return (
    <div>
      <Header title={documentName}></Header>
      {artboards.length ? <DocumentContent artboards={artboards} /> : <EmptyDocument />}
    </div>
  );
};

export default Document;
