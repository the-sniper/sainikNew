import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header container-fluid d-flex justify-content-between align-items-center">
        <h3>Zilla Sainik Board, Puduchery</h3>
        <ul className="headNav d-flex justify-content-between align-items-center">
          
          <li>
            <a href="#" className="d-flex justify-content-start align-items-center">
            <span class="material-icons">search</span> Search
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-start align-items-center">
            <span class="material-icons">dashboard</span> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="d-flex justify-content-start align-items-center">
            <span class="material-icons">login</span> Login
            </a>
          </li>
          <li className='active'>
            <a href="#" className="d-flex justify-content-start align-items-center">
            <span class="material-icons">person_add</span> Register
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex justify-content-start align-items-center"
            >
              <span class="material-icons">power_settings_new</span> Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
