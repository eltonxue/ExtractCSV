import React from 'react';
import PropTypes from 'prop-types';

const SMALL_LENGTH_LIMIT = 10;
const MEDIUM_LENGTH_LIMIT = 25;
const LARGE_LENGTH_LIMIT = 50;
const XLARGE_LENGTH_LIMIT = 100;

const Row = ({ data }) => {
  const Cells = data.map(cellData => {
    const { length } = cellData;
    console.log(length);

    if (length < SMALL_LENGTH_LIMIT) {
      return (
        <div className="data-table__row__cell" style={{ flex: 1 }}>
          {cellData}
        </div>
      );
    } else if (length < MEDIUM_LENGTH_LIMIT) {
      return (
        <div className="data-table__row__cell" style={{ flex: 2 }}>
          {cellData}
        </div>
      );
    } else if (length < LARGE_LENGTH_LIMIT) {
      return (
        <div className="data-table__row__cell" style={{ flex: 4 }}>
          {cellData}
        </div>
      );
    } else if (length < XLARGE_LENGTH_LIMIT) {
      return (
        <div className="data-table__row__cell" style={{ flex: 8 }}>
          {cellData}
        </div>
      );
    }

    const Cell = cellData.split(/  +/).map(paragraph => <p>{paragraph}</p>);

    return (
      <div className="data-table__row__cell" style={{ flex: 16 }}>
        {Cell}
        <textarea
          className="data-table__row__cell__notes"
          placeholder="IMPORTANT: Notes do not save when you leave the page!!!"
        />
      </div>
    );
  });

  return <div className="data-table__row">{Cells}</div>;
};

Row.defaultProps = {};

Row.propTypes = {};

export default Row;
