import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogShow(props) {
  const handleClose = () => {
    props.onClose();
    props.setItemShow({});
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Xem sản phẩm
        </DialogTitle>
        <DialogContent dividers>
          <div>
            <Avatar
              variant="square"
              src={props.itemShow.image}
              alt="#"
              style={{ width: '200px', height: '200px', paddingRight: '16px' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '130px',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <b>Tên sách</b> : {props.itemShow.name}
            </div>
            <div>
              <b>Mô tả</b> : {props.itemShow.desc}
            </div>
            <div>
              <b>Giá (đồng)</b> : {props.itemShow.price}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
