import React, { Component } from "react";
import "./ZsbAdmin.css";

class VerifyUser extends Component {
  render() {
    return (
      <div className="verifyUser customContainer">
          {/* <h1 className="vuTitle">VERIFY USERS</h1> */}
        <table className="table vuTable">
          <thead className="thead-dark">
            <tr>
              <th>Email Address</th>
              <th>Username</th>
              <th>Mobile Number</th>
              <th>Documents</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                  <a href="#">VIEW</a>
              </td>
              <td>
                  <button className="btn actReject">Reject</button>
                  <button className="btn actApprove">Approve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default VerifyUser;
