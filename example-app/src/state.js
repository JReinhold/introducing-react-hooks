import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [smilies, setSmilies] = useState('😎');

  return (
    <div className="App">
      <button onClick={() => setSmilies(smilies + '😎')}>
        Add smiley!
      </button>
      {smilies}
    </div>
  );
}
