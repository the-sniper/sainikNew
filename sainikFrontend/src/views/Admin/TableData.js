import React, { Component } from "react";

class TableData extends Component {

  
  render() {
    return (
      <tr>
        <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <a href="#" className="vuViewDoc">
                  {" "}
                  <span class="material-icons">visibility</span>VIEW
                </a>
              </td>
              <td>Pending</td>
              <td>
                <button className="btn actBlock">
                  <span class="material-icons">block</span>Block
                </button>
                <button className="btn actReject">
                  <span class="material-icons">person_remove</span>Reject
                </button>
                <button className="btn actApprove">
                  <span class="material-icons">how_to_reg</span>Approve
                </button>
              </td>
      <tr/>
    );
  }
}

export default TableData;
