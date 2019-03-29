import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [nextSmiley, setNextSmiley] = useState('😎');
  const [smilies, setSmilies] = useState('');

  return (
    <div className="App">
	<div>
		<button onClick={() => setNextSmiley('😎')}>😎</button>
		<button onClick={() => setNextSmiley('🙋‍♀️')}>🤷‍♀️</button>
		<button onClick={() => setNextSmiley('🚛')}>🚛</button>
	</div>
      <button onClick={() => setSmilies(smilies + nextSmiley)}>Add smiley!</button>
      {smilies}
    </div>
  );
}
