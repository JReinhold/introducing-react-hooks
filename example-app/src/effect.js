import React, { useState } from 'react';
import './App.css';
import { AlertSmilies } from './alert-smilies';

export default function App() {
  const [text, setText] = useState('hello!');

  return (
    <div className="App">
      App
      <input onChange={e => setText(e.target.value)} value={text} />
      <AlertSmilies message={text} />
    </div>
  );
}
