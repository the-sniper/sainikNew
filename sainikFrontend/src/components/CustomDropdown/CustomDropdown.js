import React, { Component } from "react";
import "./CustomDropdown.css";

class CustomDropdown extends Component {
    state = {
        shown: false
    }
  render() {
    return (
      <div className="customDropdown">
        <button
          type="button"
          onClick={()=> this.setState({ shown: ! this.state.shown})}
          className="btn d-flex justify-content-between align-items-center"
        >{this.props.label} <span class="material-icons">arrow_drop_down</span>
        </button>
        {this.state.shown ? (<ul className="cdContent">
          {this.props.children}
        </ul>): null}
      </div>
    );
  }
}

export default CustomDropdown;
