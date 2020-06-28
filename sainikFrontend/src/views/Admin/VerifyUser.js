import React, { Component } from "react";
import "./ZsbAdmin.css";
import TableData from "./TableData";
import { ListUser } from "../../redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listUsers: () => dispatch(ListUser()),
  };
};

class VerifyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.listUsers();
  }

  render() {
    return (
      <div className="verifyUser customContainer">
        {/* <h1 className="vuTitle">VERIFY USERS</h1> */}
        <table className="table-hover table vuTable">
          <thead className="thead-dark">
            <tr>
              <th>Email Address</th>
              <th>Username</th>
              <th>Mobile Number</th>
              <th>Documents</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <TableData />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyUser);
