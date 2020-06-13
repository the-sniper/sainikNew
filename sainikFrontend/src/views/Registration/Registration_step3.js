import React, { Component } from "react";
import "./Registration.css";
import InputBox from "../../components/Input/InputBox/InputBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import RadioBox from "../../components/Input/RadioBox/RadioBox";

class Registration_step3 extends Component {
  render() {
    return (
      <div className="regStep">
        <div className="row">
          <div className="col-12">
            <h3 className="regSubTitle">Upload Documents</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="RegDocUpd" className="regDocUpd d-flex justify-content-center flex-wrap">
              <span className="material-icons">publish</span>
              <p>UPLOAD DOCUMENT TO PROVE YOUR IDENTITY</p>
              <span className="rduHelp">e.x: Copy of your discharge book</span>
              <input type="file" id="RegDocUpd" hidden />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration_step3;
