import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ data }) => {
  console.log(data);

  const Cells = data.map(cellData => (
    <div className="data-table__header__cell">{cellData}</div>
  ));

  return <div className="data-table__header">{Cells}</div>;
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
