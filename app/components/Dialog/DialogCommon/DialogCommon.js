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
import { Avatar, Grid, TextField } from '@material-ui/core';

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
  flexProduct: {
    flexGrow: 1,

    '@media (max-width: 800px)': {
      flexDirection: 'column',
    },
  },
  imageModal: {
    width: '15rem',
    height: '15rem',
    borderRadius: '5px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    margin: '2rem auto',
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

export default function DialogCommon(props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <div
            style={{
              flexProduct: {
                flexGrow: 1,

                '@media (max-width: 800px)': {
                  flexDirection: 'column',
                },
              },
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Avatar
                  style={{
                    width: '15rem',
                    height: '15rem',
                    borderRadius: '5px',
                    margin: '2rem auto',
                  }}
                  variant="square"
                  src={props.itemEdit.image}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-helperText"
                  label="Tên sách"
                  variant="outlined"
                  fullWidth={true}
                  value={props.itemEdit.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-helperText"
                  label="giá"
                  variant="outlined"
                  value={props.itemEdit.price}
                  fullWidth={true}
                  InputProps={{
                    endAdornment: (
                      <span position="end" style={{ width: '40px' }}>
                        đồng
                      </span>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-helperText"
                  label="Mô tả"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth={true}
                  value={props.itemEdit.desc}
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Đóng
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
