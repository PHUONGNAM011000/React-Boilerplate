/**
 *
 * ListSellBooks
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectListBooks } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { loadingApi, removeItemBook } from './actions';
import { Avatar, Button, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { v4 as uuidv4 } from 'uuid';
import DialogShow from '../../components/Dialog/DialogShow/DialogShow';
import ModalNotification from '../../components/Modal/ModalNotification';
import { useState } from 'react';
import DialogCommon from '../../components/Dialog/DialogCommon/DialogCommon';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  search: {
    margin: '32px 0',
    display: 'flex',
    alignItems: 'center',

    '& button': {
      marginLeft: '16px',
    },
  },
  formControl: {
    margin: '8px',
    minWidth: 300,
  },
});

export function ListSellBooks({ dataBooks, fetchApiBooks, handleRemove }) {
  const classes = useStyles();
  const [idRemove, setIdRemove] = useState(-1);
  const [itemShow, setItemShow] = useState({});
  const [modalRemove, setModalRemove] = useState(false);
  const [dialogShow, setDialogShow] = useState(false);
  const [itemEdit, setItemEdit] = useState({});
  const [dialogEdit, setDialogEdit] = useState(false);

  useInjectReducer({ key: 'listSellBooks', reducer });
  useInjectSaga({ key: 'listSellBooks', saga });

  const handleCloseModal = () => {
    setModalRemove(false);
  };

  const handleCloseDialogShow = () => {
    setDialogShow(false);
  };

  const handleCloseDialogEdit = () => {
    setDialogEdit(false);
  };

  const handleEditBook = (item) => {
    setDialogEdit(true);
    setItemEdit(item);
  };

  const handleShowBook = (item) => {
    setDialogShow(true);
    setItemShow(item);
  };

  useEffect(() => {
    fetchApiBooks();
  }, []);

  return (
    <div>
      {dialogShow && (
        <DialogShow
          itemShow={itemShow}
          setDialogShow={setDialogShow}
          onClose={handleCloseDialogShow}
          setItemShow={setItemShow}
        />
      )}
      {modalRemove && (
        <ModalNotification
          idRemove={idRemove}
          handleRemove={handleRemove}
          onClose={handleCloseModal}
          setIdRemove={setIdRemove}
        />
      )}

      {dialogEdit && (
        <DialogCommon
          itemEdit={itemEdit}
          title="Sửa sản phẩm"
          onClose={handleCloseDialogEdit}
        />
      )}

      <h1>Quản lí Bán Sách</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Sắp xếp theo tên hoặc id sách</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Sắp xếp theo tên hoặc id sách"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <div className={classes.search}>
          <TextField
            id="outlined-textarea"
            label="Tìm kiếm"
            placeholder="Tìm kiếm sản phẩm theo tên"
            multiline
            variant="outlined"
            style={{ width: '300px' }}
          />
          <Button variant="outlined" style={{ marginRight: '10px' }}>
            Tìm kiếm
          </Button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" style={{ width: '70px' }}>
                STT
              </StyledTableCell>
              <StyledTableCell align="left" style={{ width: '200px' }}>
                Tên Sách
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '200px' }}>
                Ảnh
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: '200px' }}>
                Mô tả
              </StyledTableCell>
              <StyledTableCell align="right" style={{ width: '150px' }}>
                Giá&nbsp;(đồng)
              </StyledTableCell>
              <StyledTableCell align="center" style={{ width: '300px' }}>
                Hành động
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataBooks.length > 0 &&
              dataBooks.map((row) => (
                <StyledTableRow key={uuidv4()}>
                  <StyledTableCell align="left" style={{ width: '70px' }}>
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: '200px' }}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: '200px' }}>
                    <Avatar
                      variant="square"
                      src={row.image}
                      alt={row.name}
                      style={{ width: '150px', height: '150px' }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: '200px' }}>
                    {row.desc}
                  </StyledTableCell>
                  <StyledTableCell align="right" style={{ width: '150px' }}>
                    {row.price}
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ width: '300px' }}>
                    <Button
                      variant="outlined"
                      style={{ marginRight: '10px' }}
                      onClick={() => handleShowBook(row)}
                    >
                      Xem
                    </Button>
                    <Button
                      variant="outlined"
                      style={{ marginRight: '10px' }}
                      onClick={() => {
                        setModalRemove(true);
                        setIdRemove(row.id);
                      }}
                    >
                      Xoá
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleEditBook(row)}
                    >
                      Sửa
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {dataBooks.length === 0 && (
              <div style={{ width: '300px', margin: '8px' }}>
                Hiện không có sản phẩm nào
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

ListSellBooks.propTypes = {
  fetchApiBooks: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  dataBooks: makeSelectListBooks(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchApiBooks: () => dispatch(loadingApi()),
    handleRemove: (id) => dispatch(removeItemBook(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(ListSellBooks);
