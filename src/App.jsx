import React, { useState, useCallback } from 'react';

import Home from './components/Home';
import Results from './components/Results';

import './scss/_modules.scss';

const App = () => {
  const [results, setResults] = useState([]);

  const onUpload = data => setResults(data);

  const onReset = () => setResults(null);

  return results.length > 0 ? (
    <Results results={results} onReset={onReset} />
  ) : (
    <Home onUpload={onUpload} />
  );
};

export default App;
