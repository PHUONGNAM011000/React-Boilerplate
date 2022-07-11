/**
 *
 * FormTest
 *
 */

import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { valueChanged, onSubmit, onRemove, loadings } from './actions';
import {
  makeDataSelectFormTest,
  makeListSelectFormTest,
  makeSelectFormTest,
} from './selectors';

export function FormTest({
  value,
  list,
  fetchAPI,
  valueChangeHandler,
  submitHandler,
  removeItemList,
  data,
}) {
  useInjectReducer({ key: 'formTest', reducer });
  useInjectSaga({ key: 'formTest', saga });

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          value={value}
          onChange={(e) => valueChangeHandler(e.target.value)}
        />
        <button>submit</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            style={{
              width: '200px',
              display: 'flex',
              justifyContent: 'space-between',
              listStyle: 'none',
            }}
          >
            {item} <span onClick={() => removeItemList(item)}>X</span>
          </li>
        ))}
      </ul>
      <h1>data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

FormTest.propTypes = {};

const mapStateToProps = createStructuredSelector({
  value: makeSelectFormTest(),
  list: makeListSelectFormTest(),
  data: makeDataSelectFormTest(),
});

function mapDispatchToProps(dispatch) {
  return {
    valueChangeHandler: (value) => dispatch(valueChanged(value)),
    submitHandler: (e) => {
      e.preventDefault();

      dispatch(onSubmit());
    },
    removeItemList: (item) => dispatch(onRemove(item)),
    fetchAPI: () => dispatch(loadings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(FormTest);
