import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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
          <li>
            <Link
              to={Routes.search.url}
              className="d-flex justify-content-start align-items-center"
            >
              <span class="material-icons">search</span> {Routes.search.label}
            </Link>
          </li>
          <li>
            <Link
              to={Routes.zsbDashboard.url}
              className="d-flex justify-content-start align-items-center"
            >
              <span class="material-icons">dashboard</span>{" "}
              {Routes.zsbDashboard.label}
            </Link>
          </li>
          {user.userDetails.isAuthenticated ? (
            <li>
              <Link
                to={Routes.logout.url}
                className="d-flex justify-content-start align-items-center"
              >
                <span class="material-icons">power_settings_new</span>{" "}
                {Routes.logout.label}
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to={Routes.login.url}
                  className="d-flex justify-content-start align-items-center"
                >
                  <span class="material-icons">login</span> {Routes.login.label}
                </Link>
              </li>
              <li className="active">
                <Link
                  to={Routes.reg.url}
                  className="d-flex justify-content-start align-items-center"
                >
                  <span class="material-icons">person_add</span>{" "}
                  {Routes.reg.label}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
