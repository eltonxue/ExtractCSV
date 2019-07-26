import React from 'react';
import DataTable from './DataTable';

const Results = ({ results }) => {
  return (
    <div className="results">
      <DataTable results={results} />
    </div>
  );
};

export default Results;
