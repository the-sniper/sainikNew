import React, { Component } from "react";
import "./SelectBox.css";

class SelectBox extends Component {
  render() {
    return (
      <div class="form-group customSelectBox">
        <label for={this.props.id}>
          {this.props.label}
          <span className="optionalTag">{this.props.optional}</span>
        </label>
        <select
          class="form-control"
          required={this.props.required}
          name={this.props.name}
          id={this.props.id}
          onChange={this.props.changeHandler}
          value={this.props.value}
        >
          {this.props.children}
        </select>
      </div>
    );
  }
}

export default SelectBox;
