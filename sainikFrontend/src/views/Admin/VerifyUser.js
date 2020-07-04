import React, { Component } from "react";
import "./ZsbAdmin.css";
import TableData from "./TableData";
import { ListUser } from "../../redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
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
  }

  componentDidMount() {
    this.props.listUsers();
  }

  render() {
    let { userList } = this.props;
    if (userList.loading) {
      return <h1>loading</h1>;
    }
    if (userList.userList.length < 1) {
      return <div className="noPending">
         <h1>No Pending Users</h1></div>;
    }
    return (
      <div className="verifyUser customContainer">
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
            {userList.userList.map((data) => (
              <tr>
                <TableData data={data} approveHandler = {() => {
                  
                }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyUser);
