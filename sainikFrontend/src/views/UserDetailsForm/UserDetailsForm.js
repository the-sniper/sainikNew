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
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
      completionMsg: "",
    };
  }

  changeFormNext = () => {
    let currentIndex = this.state.currentFormIndex + 1;
    if (currentIndex >= 6) {
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

  componentDidMount = () => {
    if (this.state.currentFormIndex === 0) {
      document.getElementById("actBtnForm").classList.add("hidePrev");
    }
  };

  componentDidUpdate = () => {
    if (this.state.currentFormIndex === 0) {
      document.getElementById("actBtnForm").classList.add("hidePrev");
    } else {
      document.getElementById("actBtnForm").classList.remove("hidePrev");
    }
  };

  render() {
    return (
      <div className="userDetailsForm">
        <h3 className="mb-5">ADD USER DETAILS</h3>
        <div className="customContainer">
          <Tabs
            className="d-flex justify-content-center align-items-start"
            selectedIndex={this.state.currentFormIndex}
            onSelect={(currentFormIndex) => this.setState({ currentFormIndex })}
          >
            <div className="ltPanel">
              <TabList className="d-flex justify-content-between flex-column">
                <Tab>
                  <div class="tabItem completed">
                    <span class="checkpoint">01</span>
                    <Link class="nav-link" to="#">
                      Service Details
                    </Link>
                  </div>
                </Tab>
                <Tab disabled={false}>
                  <div class="tabItem active">
                    <span class="checkpoint">02</span>
                    <Link class="nav-link" to="#">
                      Pension Details
                    </Link>
                  </div>
                </Tab>
                <Tab>
                  <div class="tabItem">
                    <span class="checkpoint">03</span>
                    <Link class="nav-link" to="#">
                      Personal Details
                    </Link>
                  </div>
                </Tab>
                <Tab>
                  <div class="tabItem">
                    <span class="checkpoint">03</span>
                    <Link class="nav-link" to="#">
                      Contact Details
                    </Link>
                  </div>
                </Tab>
                <Tab>
                  <div class="tabItem">
                    <span class="checkpoint">03</span>
                    <Link class="nav-link" to="#">
                      Family Details
                    </Link>
                  </div>
                </Tab>
                <Tab>
                  <div class="tabItem">
                    <span class="checkpoint">03</span>
                    <Link class="nav-link" to="#">
                      Dependent Details
                    </Link>
                  </div>
                </Tab>
              </TabList>
            </div>
            <div className="rtPanel">
              <div>
                <TabPanel>
                  <ServiceDetails />
                </TabPanel>
                <TabPanel>
                  <PensionDetails />
                </TabPanel>
                <TabPanel>
                  <PersonalDetails />
                </TabPanel>
                <TabPanel>
                  <ContactDetails />
                </TabPanel>
                <TabPanel>
                  <FamilyDetails />
                </TabPanel>
                <TabPanel>
                  <DependentDetails />
                </TabPanel>
              </div>
              <div id="actBtnForm">
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
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default UserDetailsForm;
