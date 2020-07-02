import React, { Component } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Routes } from "../../RouteConstants";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
class Header extends Component {
  render() {
    const { user } = this.props.state;
    return (
      <div className="header customContainer d-flex justify-content-between align-items-center">
        <h3>Zilla Sainik Board, Puduchery</h3>
        <ul className="headNav d-flex justify-content-between align-items-center">
          {this.props.state.user.userDetails.profileDetails.userType ===
          "ZSB" ? (
            <>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  to={Routes.search.url}
                  className="d-flex justify-content-start align-items-center"
                >
                  <span class="material-icons">search</span>
                  {Routes.search.label}
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to={Routes.zsbDashboard.url}
                  activeClassName="active"
                  className="d-flex justify-content-start align-items-center"
                >
                  <span class="material-icons">dashboard</span>
                  {Routes.zsbDashboard.label}
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}

          {user.userDetails.isAuthenticated ? (
            <li>
              <NavLink
                exact
                to={Routes.logout.url}
                activeClassName="active"
                className="d-flex justify-content-start align-items-center"
                onClick={() => {
                  user.userDetails.isAuthenticated = false;
                  setTimeout(() => (window.location = Routes.login.url), 1000);
                }}
              >
                <span class="material-icons">power_settings_new</span>
                {Routes.logout.label}
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  exact
                  to={Routes.login.url}
                  activeClassName="active"
                  className="d-flex justify-content-start align-items-center"
                >
                  <span class="material-icons">login</span> {Routes.login.label}
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to={Routes.reg.url}
                  className="d-flex justify-content-start align-items-center"
                >
                  <span class="material-icons">person_add</span>
                  {Routes.reg.label}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
