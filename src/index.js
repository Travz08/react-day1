import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './wordcounter'
ReactDOM.render(
  <WordCounter targetWordCount={10}/>,
    document.getElementById('app')
);
