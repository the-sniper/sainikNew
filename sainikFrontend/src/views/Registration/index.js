import React, { Component } from "react";
import Registration_step1 from "./Registration_step1";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import { Link } from "react-router-dom";
import Registration_step2 from "./Registration_step2";
import Registration_step3 from "./Registration_step3";
import TertButton from "../../components/Input/Button/TertButton";

class index extends Component {
  constructor(props) {
    super(props);
    this.submitValue = "";
    this.formLists = [
      <Registration_step1 />,
      <Registration_step2 />,
      <Registration_step3 />,
    ];

    this.state = {
      currentFormIndex: 0,
      completionMsg: "",
      isButtonHidden: false,
    };
  }

  changeFormNext = () => {
    let currentIndex = this.state.currentFormIndex + 1;
    if (currentIndex >= 3) {
      // currentIndex = 0;
      return this.setState({ completionMsg: "Submitted Successfully !" });
    }
    this.setState((state) => ({
      currentFormIndex: currentIndex,
    }));
  };

  changeFormPrevious = () => {
    let currentIndex;
    if (currentIndex === 0) {
      // currentIndex = 0;
      // return this.submitValue= "Submitted Successfully !"
      return 0;
    }
    currentIndex = this.state.currentFormIndex - 1;
    this.setState((state) => ({
      currentFormIndex: currentIndex,
    }));
  };
  render() {
    return (
      <div className="regMain">
        <h2>REGISTER</h2>
        <p>
          Welcome ! <br /> Register an account today{" "}
        </p>

        <div className="regSteps">
          <ul class="nav d-flex justify-content-between">
            <li class="nav-item completed">
              <span class="checkpoint">01</span>
              <a class="nav-link active" href="#">
                Login Details
              </a>
            </li>
            <li class="nav-item active">
              <span class="checkpoint">02</span>
              <a class="nav-link" href="#" onClick={this.openSlide}>
                Personal Details
              </a>
            </li>
            <li class="nav-item">
              <span class="checkpoint">03</span>
              <a class="nav-link" href="#">
                Upload Docs
              </a>
            </li>
          </ul>
        </div>

        {this.formLists[this.state.currentFormIndex]}

        <h1> {this.state.completionMsg} </h1>

        <div className="regAct d-flex justify-content-between align-items-center">
          <TertButton
            label="PREVIOUS"
            name="previous"
            type="submit"
            actionFunction={this.changeFormPrevious}
            hidden={this.state.isButtonHidden}
          />
          <PrimaryButton
            label="NEXT"
            name="next"
            type="submit"
            actionFunction={this.changeFormNext}
          />
        </div>

        <div className="haveAcc text-center">
          <p>Already have an account ?</p>
          <span>Login</span> <Link to="/">here</Link>
        </div>
      </div>
    );
  }
}

export default index;
