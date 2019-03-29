import React, { useState } from 'react';

export function SmileyList() {
  const [smilies, setSmilies] = useState('😎');

  return (
    <div>
      {smilies}
      <button onClick={() => setSmilies(smilies + '😎')}>
	    Add smiley!
	  </button>
    </div>
  );
}