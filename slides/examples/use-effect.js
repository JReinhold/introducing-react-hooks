import React, { useEffect, useState } from 'react';

export function TitleSmilies({ pageTitle }) {
  const [smilies, setSmilies] = useState('😎');

  useEffect(() => {
    document.title = pageTitle + smilies;
  });

  return (
    <button onClick={() => setSmilies(smilies + '😎')}>
      Add smiley to titlebar!
    </button>

  );
}
