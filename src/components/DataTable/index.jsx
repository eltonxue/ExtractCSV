import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Row from './Row';

const DataTable = ({ results }) => {
  const rowData = results.filter((_, index) => index !== 0);

  const Rows = rowData.map(row => <Row key={row[0]} data={row} />);

  return <div className="data-table">{Rows}</div>;
};

DataTable.defaultProps = {};

DataTable.propTypes = {};

export default DataTable;
