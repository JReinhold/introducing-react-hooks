import React, { useEffect, useState } from 'react';

export function AlertSmilies({ message }) {
  const [smilies, setSmilies] = useState('😎');

  return (
    <div className="alert-smilies">
      AlertSmilies - {smilies}<br/>
      Message: {message}
      <button onClick={() => setSmilies(smilies + '😎')}>
        Add smiley and alert
      </button>
    </div>
  );
}
