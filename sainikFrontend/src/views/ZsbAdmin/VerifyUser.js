import React, { Component } from "react";
import "./ZsbAdmin.css";
import TableData from "../../components/TableData/TableData";

class VerifyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <TableData>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <a href="#" className="vuViewDoc"> <span class="material-icons">visibility</span>VIEW</a>
                </td>
                <td>Pending</td>
                <td>
                  <button className="btn actBlock"><span class="material-icons">block</span>Block</button>
                  <button className="btn actReject"><span class="material-icons">person_remove</span>Reject</button>
                  <button className="btn actApprove"><span class="material-icons">how_to_reg</span>Approve</button>
                </td>
              </TableData>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default VerifyUser;
