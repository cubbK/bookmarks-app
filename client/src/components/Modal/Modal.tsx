import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  cancelText?: string;
  okText?: string;
  description?: string;
  title?: string;
}

class Modal extends React.Component<IProps> {
  static defaultProps: Partial<IProps> = {
    cancelText: "Cancel",
    okText: "Ok",
    description: "",
    title: "Action"
  };

  render() {
    const props = this.props;
    return (
      <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary" autoFocus={true}>
            {props.cancelText}
          </Button>
          <Button onClick={props.onSuccess} color="primary">
            {props.okText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default Modal;
