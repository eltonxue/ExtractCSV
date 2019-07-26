import React from 'react';
import PropTypes from 'prop-types';
import CSVReader from 'react-csv-reader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Home = ({ onUpload }) => {
  return (
    <div className="home">
      <div className="home__header">Extract CSV</div>
      <div className="home__sub-header">Prettify your CSV</div>
      <div className="home__body">
        <label className="home__body__uploader" htmlFor="file">
          <FontAwesomeIcon icon={faUpload} />
          <span>UPLOAD</span>
        </label>
        <CSVReader
          cssClass="home__body--hide"
          inputId="file"
          onFileLoaded={onUpload}
        />
      </div>
    </div>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
