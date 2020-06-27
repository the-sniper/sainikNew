import React, { Component } from "react";
import "./Search.css";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import InputBox from "../../components/Input/InputBox/InputBox";
import InputCheckbox from "../../components/Input/InputCheckbox/InputCheckbox";

class Search extends Component {
  render() {
    return (
      <div className="sainikSearch container-fluid">
        <div className="row searchCnt">
          <div className="col-9 offset-sm-3 p-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="searchBox d-flex justify-content-between align-items-start">
                <input
                  className="form-control sbInput"
                  type="search"
                  placeholder="Search by name or service id"
                />
                <CustomDropdown label="Service">
                  <li>
                    <a href="#">Air force</a>
                  </li>
                  <li>
                    <a href="#">Army</a>
                  </li>
                  <li>
                    <a href="#">Navy</a>
                  </li>
                  <li>
                    <a href="#">All</a>
                  </li>
                </CustomDropdown>
              </div>
              <CustomDropdown label="Sort by">
                <li>
                  <a href="#">Newest</a>
                </li>
                <li>
                  <a href="#">Oldest</a>
                </li>
              </CustomDropdown>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="ssFilters">
              <div className="ssfTitle d-flex justify-content-between align-items-center">
                <h3>FILTERS</h3>
                <span class="material-icons">filter_alt</span>
              </div>
              <div className="ssfContent">
                <p>Board name</p>
                <InputCheckbox label="Puduchery" />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="table-responsive">
              <table class="table table-striped table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
