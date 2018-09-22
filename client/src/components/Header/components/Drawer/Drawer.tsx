import * as React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

interface IProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

class Drawer extends React.Component<IProps> {
  render() {
    return (
      <SwipeableDrawer
        anchor="right"
        open={this.props.open}
        onClose={this.props.onClose}
        onOpen={this.props.onOpen}
      >
        {this.props.children}
      </SwipeableDrawer>
    );
  }
}

export default Drawer;
