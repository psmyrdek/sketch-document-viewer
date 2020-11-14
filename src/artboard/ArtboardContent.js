import React, { useState } from 'react';
import ArtboardHeader from './ArtboardHeader';
import ArtboardPreview from './ArtboardPreview';
import { useHotkeys } from 'react-hotkeys-hook';
import { navigate } from '@reach/router';

const ArtboardContent = ({ artboards, activeArtboard, activeArtboardIndex }) => {
  const [allArtboards] = useState(artboards);
  const [artboard, setArtboard] = useState(activeArtboard);
  const [index, setIndex] = useState(activeArtboardIndex);
  
  useHotkeys('left', showPreviousArtboard, {}, [index]);
  useHotkeys('right', showNextArtboard, {}, [index]);
  useHotkeys('esc', closeArtboard, {}, [index]);

  function showPreviousArtboard() {
    if (index > 0) {
      setArtboard(allArtboards[index - 1]);
      setIndex(index - 1);
    }
  }

  function showNextArtboard() {
    if (index < allArtboards.length - 1) {
      setArtboard(allArtboards[index + 1]);
      setIndex(index + 1);
    }
  }

  function closeArtboard() {
    navigate('..');
  }

  return (
    <>
      <ArtboardHeader
        index={index}
        itemsTotal={allArtboards.length}
        onClose={closeArtboard}
        onPrev={showPreviousArtboard}
        onNext={showNextArtboard}></ArtboardHeader>
      <ArtboardPreview artboard={artboard} />
    </>
  );
};

export default ArtboardContent;
