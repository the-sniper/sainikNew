import React, { Component } from "react";
import "./UserDetailsForm.css";
import ServiceDetails from "./ServiceDetails";
import PersonalDetails from "./PersonalDetails";
import FamilyDetails from "./FamilyDetails";
import PensionDetails from "./PensionDetails";
import DependentDetails from "./DependentDetails";
import ContactDetails from "./ContactDetails";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";

class UserDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.submitValue = "";
    this.formLists = [
      <ServiceDetails />,
      <PensionDetails />,
      <PersonalDetails />,
      <ContactDetails />,
      <FamilyDetails />,
      <DependentDetails />,
    ];

    this.state = {
      currentFormIndex: 0,
      completionMsg : ''
    };
  }

  changeFormNext = () => {
    let currentIndex = this.state.currentFormIndex + 1;
    if (currentIndex >= 6) {
      // currentIndex = 0;
      return (this.setState({completionMsg : 'Submitted Successfully !'}));
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
      <div className="userDetailsForm">
        <h3 className="mb-5">ADD USER DETAILS</h3>
        <div className="customContainer d-flex justify-content-between align-items-start">
          <div className="ltPanel">
            <ul class="nav d-flex justify-content-between">
              <li class="nav-item completed">
                <span class="checkpoint">01</span>
                <a class="nav-link active" href="#">
                  Service Details
                </a>
              </li>
              <li class="nav-item active">
                <span class="checkpoint">02</span>
                <a class="nav-link" href="#" onClick={this.openSlide}>
                  Pension Details
                </a>
              </li>
              <li class="nav-item">
                <span class="checkpoint">03</span>
                <a class="nav-link" href="#">
                  Personal Details
                </a>
              </li>
              <li class="nav-item">
                <span class="checkpoint">04</span>
                <a class="nav-link" href="#">
                  Contact Details
                </a>
              </li>
              <li class="nav-item">
                <span class="checkpoint">05</span>
                <a class="nav-link" href="#">
                  Family Details
                </a>
              </li>
              <li class="nav-item">
                <span class="checkpoint">06</span>
                <a class="nav-link" href="#">
                  Dependent Details
                </a>
              </li>
            </ul>
          </div>

          <div className="rtPanel">
            {this.formLists[this.state.currentFormIndex]}
            <h1> {this.state.completionMsg} </h1>
            <h1>{this.submitValue}</h1>
            <TertButton
              type="submit"
              actionFunction={this.changeFormPrevious}
              label="Previous"
            />

            <PrimaryButton
              type="submit"
              actionFunction={this.changeFormNext}
              label="Next"
            />

            {/* <button onClick={this.changeForm}>Click</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetailsForm;
