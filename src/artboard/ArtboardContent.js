import React, { useState } from 'react';
import ArtboardHeader from './ArtboardHeader';
import ArtboardPreview from './ArtboardPreview';

const ArtboardContent = ({ artboards, activeArtboard, activeArtboardIndex }) => {
  const [allArtboards] = useState(artboards);
  const [artboard, setArtboard] = useState(activeArtboard);
  const [index, setIndex] = useState(activeArtboardIndex);

  function onPrevClicked() {
    setArtboard(allArtboards[index - 1]);
    setIndex(index - 1);
  }

  function onNextClicked() {
    setArtboard(allArtboards[index + 1]);
    setIndex(index + 1);
  }

  return (
    <>
      <ArtboardHeader
        index={index}
        itemsTotal={allArtboards.length}
        onPrev={onPrevClicked}
        onNext={onNextClicked}></ArtboardHeader>
      <ArtboardPreview artboard={artboard} />
    </>
  );
};

export default ArtboardContent;
