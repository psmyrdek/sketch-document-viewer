import React, { useState } from 'react';
import { Link } from '@reach/router';
import Button from '../ui/Button';
import { TextInput } from '../ui/Forms';
import styled from 'styled-components';

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background: white;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  margin-top: 20px;

  @media (min-width: 640px) {
    width: 75%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const SelectorContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  button {
    margin-top: 10px;

    @media (min-width: 640px) {
      margin-top: 0;
      margin-left: 10px;
    }
  }
`;

const DEFAULT_SHORT_ID = 'Y8wDM';

const DocumentSelector = () => {
  const [shortId, setShortId] = useState(DEFAULT_SHORT_ID);

  return (
    <SelectorWrapper>
      <div>
        <h3>Please provide the document id (shortId)</h3>
        <SelectorContent>
          <TextInput
            required
            value={shortId}
            placeholder={DEFAULT_SHORT_ID}
            onChange={(e) => setShortId(e.target.value)}
          />
          <Link to={`/document/${shortId}`}>
            <Button primary disabled={!Boolean(shortId)}>
              Open Document
            </Button>
          </Link>
        </SelectorContent>
      </div>
    </SelectorWrapper>
  );
};

export default DocumentSelector;
