import * as React from "react";

interface IProps {
  style? : object;
}

class Logo extends React.Component<IProps> {
  render() {
    return (
      <div style={this.props.style}>
        Logo1
      </div>
    )
  }
}

export default Logo;