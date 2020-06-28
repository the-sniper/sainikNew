import React, { Component } from "react";

class TableData extends Component {
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

export default TableData;
