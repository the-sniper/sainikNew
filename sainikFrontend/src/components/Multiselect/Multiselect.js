import React, { Component } from 'react';
import Select from 'react-select';
import { decorations } from './data';
import "./Multiselect.css"

class Multiselect extends Component {
  render() {
    return (
      <div className="multiSelect">
      <span className="label">Label</span>
      <Select
        isMulti
        options={decorations}
      />
      </div>
    );
  }
}

export default Multiselect