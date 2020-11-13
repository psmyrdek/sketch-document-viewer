import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Button } from '../ui/Button';

const DEFAULT_SHORT_ID = 'Y8wDM';

const DocumentSelector = () => {
  const [shortId, setShortId] = useState(DEFAULT_SHORT_ID);

  return (
    <div>
      <input required value={shortId} onChange={(e) => setShortId(e.target.value)} />
      <Link to={`/document/${shortId}`}>
        <Button primary disabled={!Boolean(shortId)}>
          Open Document
        </Button>
      </Link>
    </div>
  );
};

export default DocumentSelector;
