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
import { useAlert } from 'react-alert';

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
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ModalNotification(props) {
  const alert = useAlert();

  const handleRemoveModal = () => {
    props.handleRemove(props.idRemove);
    props.setIdRemove(-1);
    props.onClose();
    alert.success('Xoá sản phẩm thành công !');
  };

  return (
    <div>
      <Dialog
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
          Xoá sản phẩm
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Bạn có chắc muốn xoá sản phẩm này ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveModal} color="secondary">
            Xoá
          </Button>
          <Button onClick={props.onClose} color="primary">
            Huỷ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
