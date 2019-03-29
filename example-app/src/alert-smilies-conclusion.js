import React, { useEffect, useState } from 'react';

export function AlertSmilies({ message }) {
  const [smilies, setSmilies] = useState('😎');

  useEffect(() => {
    alert(message + smilies);
  }, [smilies]);

  return (
    <div className="alert-smilies">
      AlertSmilies - {smilies}
      <button onClick={() => setSmilies(smilies + '😎')}>
        Add smiley and alert
      </button>
    </div>
  );
}
