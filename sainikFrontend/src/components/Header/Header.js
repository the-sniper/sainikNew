import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header container-fluid d-flex justify-content-between align-items-center">
        <h3>Zilla Sainik Board, Puduchery</h3>
        <a
          href="#"
          className="d-flex justify-content-start align-items-center"
        >
          Logout <span class="material-icons">power_settings_new</span>
        </a>
      </div>
    );
  }
}

export default Header;
