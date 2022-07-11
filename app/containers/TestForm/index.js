/**
 *
 * TestForm
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTestForm, {
  makeSelectDataTest,
  makeSelectValue,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  loadApiTest,
  removeItem,
  submitHandler,
  valueChangeHandler,
} from './actions';
import _map from 'lodash/map';

export function TestForm({
  data,
  value,
  valueChanged,
  handleSubmit,
  callApiTest,
  handleRemoveItem,
}) {
  useInjectReducer({ key: 'testForm', reducer });
  useInjectSaga({ key: 'testForm', saga });

  useEffect(() => {
    callApiTest();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Test Form</h1>
        <input
          value={value}
          onChange={(e) => valueChanged(e.target.value)}
          type="text"
          style={{ marginRight: '10px' }}
        />
        <button type="submit">submit</button>
      </form>
      <ul>
        {_map(data.slice(90, data.length), (item, index) => (
          <li key={index}>
            {item.title}{' '}
            <span
              style={{ cursor: 'pointer', marginLeft: '8px', color: 'blue' }}
              onClick={() => handleRemoveItem(item.id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

TestForm.propTypes = {};

const mapStateToProps = createStructuredSelector({
  testForm: makeSelectTestForm(),
  data: makeSelectDataTest(),
  value: makeSelectValue(),
});

function mapDispatchToProps(dispatch) {
  return {
    callApiTest: () => dispatch(loadApiTest()),
    handleRemoveItem: (id) => dispatch(removeItem(id)),
    valueChanged: (value) => dispatch(valueChangeHandler(value)),
    handleSubmit: (e) => {
      e.preventDefault();

      dispatch(submitHandler());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(TestForm);
