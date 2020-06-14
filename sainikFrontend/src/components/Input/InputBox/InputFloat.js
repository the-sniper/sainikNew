import React, { Component } from "react";
import "./InputBox.css";

class InputFloat extends Component {
  render() {
    return (
      <div class="form-group customInputFloat">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type={this.props.type}
          class="form-control"
          name={this.props.name}
          id={this.props.id}
          aria-describedby="helpId"
          placeholder={this.props.placeholder}
          required={this.props.required}
        />
        {/* <small id="helpId" class="form-text text-muted">Help text</small> */}
      </div>
    );
  }
}

export default InputFloat;
