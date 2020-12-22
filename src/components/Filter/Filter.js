import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filterValue, filterData }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      value={filterValue}
      onChange={filterData}
      className={s.input}
    />
  </label>
);

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterData: PropTypes.func.isRequired,
};

export default Filter;
