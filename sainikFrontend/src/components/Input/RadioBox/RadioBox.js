import React, { Component } from "react";
import "./RadioBox.css";

class RadioBox extends Component {
  render() {
    return (
      <div className="radioBox" onChange={this.props.onChange}>
          {this.props.children}
      </div>
    );
  }
}

export default RadioBox;
