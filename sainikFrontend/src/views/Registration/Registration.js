import React, { Component } from "react";
import "./Registration.css";
import InputBox from "../../components/Input/InputBox/InputBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import { Link } from "react-router-dom";
import { registerUser, resetForm } from "../../redux";
import { connect } from "react-redux";
import { Routes } from "../../RouteConstants";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (registerDetails) => dispatch(registerUser(registerDetails)),
    resetForm: () => dispatch(resetForm()),
  };
};

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      cnfPassword: "",
      document: "",
      mobileNumber: "",
      errors: {
        email: "",
        username: "",
        password: "",
        cnfPassword: "",
        document: "",
        mobileNumber: "",
      },
      stateList: "",
      user_categories: "",
      loading: true,
      state: "",
      zila: "",
      category: "",
    };
  }

  componentDidMount() {
    fetch("/api/registration_essentials/")
      .then((res) => {
        // this.setState()
        res
          .json()
          .then((data) => {
            let state = Object.keys(data.sd_dict)[0];
            this.setState({
              stateList: data.sd_dict,
              user_categories: data.user_categories,
              state: state,
              zila: this.getDistList(state, data.sd_dict)[0],
              category: data.user_categories[0].label,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  getDistList(stateName, stateList) {
    if (stateList) {
      return Object.keys(stateList[stateName].districts);
    } else {
      return Object.keys(this.state.stateList[stateName].districts);
    }
  }

  Reg_Details = () => {
    let districtList = "",
      user_categories = "";

    if (this.state.stateList) {
      districtList = [];
      let state;
      if (this.state.state) {
        state = this.state.state;
      } else {
        state = Object.keys(this.state.stateList)[0];
      }
      districtList = this.getDistList(state);
    }

    if (this.state.user_categories) {
      user_categories = [];
      for (let i = 0; i < this.state.user_categories.length; i++) {
        user_categories.push(this.state.user_categories[i].label);
      }
    }

    return [
      {
        inplabel: "Email address",
        type: "email",
        name: "email",
        required: "required",
        errorText: this.state.errors.email,
      },
      {
        inplabel: "Username",
        type: "text",
        name: "username",
        required: "required",
        errorText: this.state.errors.username,
      },
      {
        inplabel: "Password",
        type: "password",
        name: "password",
        minLength: "5",
        required: "required",
        errorText: this.state.errors.password,
      },
      {
        inplabel: "Confirm Password",
        type: "password",
        name: "cnfPassword",
        minLength: "5",
        required: "required",
        errorText: this.state.errors.cnfPassword,
      },
      {
        inplabel: "Mobile Number",
        type: "tel",
        name: "mobileNumber",
        required: "required",
        errorText: this.state.errors.mobileNumber,
        pattern: "[0-9]{3}[0-9]{3}[0-9]{4}",
      },
      {
        sellabel: "State",
        type: "select",
        selOption: Object.keys(this.state.stateList),
        name: "state",
        value: this.state.state,
      },
      {
        sellabel: "District",
        type: "select",
        selOption: districtList,
        name: "zila",
        value: this.state.zila,
      },
      {
        sellabel: "User Category",
        type: "select",
        selOption: user_categories,
        name: "category",
        value: this.state.category,
      },
    ];
  };

  createElements = (dataParam) => {
    let radioElementsArray = [];
    let selectElementsArray = [];

    if (dataParam.type === "radio") {
      for (let i = 0; i < dataParam.radOpt.length; i++) {
        radioElementsArray.push(
          <>
            <input
              type="radio"
              id={`servRad_${dataParam.radOpt[i]}`}
              name={dataParam.group}
              checked
            />
            <label for={`servRad_${dataParam.radOpt[i]}`}>
              {dataParam.radOpt[i]}
            </label>
          </>
        );
      }
      return radioElementsArray;
    } else if (dataParam.type === "select") {
      for (let i = 0; i < dataParam.selOption.length; i++) {
        selectElementsArray.push(<option>{dataParam.selOption[i]}</option>);
      }
      return selectElementsArray;
    }
  };

  changeHandler = (event) => {
    console.log("This is the name : ", event.target.name);
    let value = event.target.value;
    if (event.target.name === "document") {
      value = event.target.files[0];
    }
    if (event.target.name === "state") {
      this.setState({
        [event.target.name]: value,
        zila: this.getDistList(value)[0],
      });
    } else {
      this.setState({
        [event.target.name]: value,
      });
    }
  };

  submitForm = (event) => {
    let form = document.getElementById("registerForm");
    console.log(
      `This is the form element : ${form.checkValidity()}${Object.keys(form)}`
    );
    if (form.checkValidity && form.checkValidity()) {
      event.preventDefault();
      console.log("This is the state : ", this.state);
      let {
        username,
        password,
        email,
        cnfPassword,
        document,
        mobileNumber,
        zila,
        category,
        state,
      } = this.state;

      console.log(
        "This are the values : ",
        username,
        password,
        email,
        cnfPassword,
        document,
        mobileNumber
      );

      if (cnfPassword != password) {
        console.log(
          "This is the password : ",
          password,
          "and confirm password : ",
          cnfPassword
        );
        this.setState({
          errors: {
            cnfPassword: "Password and Confirm Password must be same.",
          },
        });
        return;
      }
      if (mobileNumber.length < 10) {
        this.setState({
          errors: {
            mobileNumber: "Mobile number should be atleast 10 digits long. ",
          },
        });
        return;
      }
      let userCategory;
      this.state.user_categories.map((data) => {
        if (data.label === category) {
          userCategory = data.value;
        }
      });

      let formData = new FormData();
      formData.append("documents", document);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("cnfPassword", cnfPassword);
      formData.append("email", email);
      formData.append("mobileNumber", mobileNumber);
      formData.append("state", this.state.stateList[state].S_Id);
      formData.append("zila", this.state.stateList[state].districts[zila].D_Id);
      formData.append("userCategory", userCategory);

      this.props.register(formData);
      // this.props.login(loginDetails);
    }
  };

  success_redirect = async () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.props.resetForm();
      this.props.history.push("/");
    }, 5000);
  };

  render() {
    const { register } = this.props.state;
    if (register.registrationSuccess) {
      this.success_redirect();
    }
    console.log(this.state);
    return (
      <div className="regMain">
        <h2>REGISTER</h2>
        <p>
          Welcome ! <br /> Register an account today{" "}
        </p>
        <div className="regStep">
          <div className="row">
            <div className="col-12">
              <h3 className="regSubTitle">Login Information</h3>
            </div>
          </div>
          <form id="registerForm">
            {register.registrationSuccess ? (
              <div className="successCnt">
                <span class="material-icons">check_circle</span>
                <p>Successfully registered.</p>
              </div>
            ) : (
              ""
            )}
            {this.Reg_Details().map((data, index) => {
              return (
                <div className="row">
                  <div className="col-12">
                    {(() => {
                      if (
                        data.type === "text" ||
                        data.type === "date" ||
                        data.type === "password" ||
                        data.type === "number" ||
                        data.type === "tel" ||
                        data.type === "email"
                      ) {
                        return (
                          <InputBox
                            id={`servInp_${index}`}
                            label={data.inplabel}
                            type={data.type}
                            optional={data.optional}
                            required={data.required}
                            name={`${data.name}`}
                            minLength={data.minLength}
                            changeHandler={this.changeHandler}
                            errorText={data.errorText}
                            pattern={data.pattern}
                          />
                        );
                      } else if (data.type === "select") {
                        return (
                          <SelectBox
                            id={`servSel_${index}`}
                            label={data.sellabel}
                            optional={data.optionalCheck}
                            name={`${data.name}`}
                            required={data.required}
                            changeHandler={this.changeHandler}
                            value={data.value}
                          >
                            {this.createElements(data)}
                          </SelectBox>
                        );
                      } else if (data.type === "radio") {
                        return (
                          <div className="formRadio">
                            <p className="radioLabel">{data.radLabel}</p>
                            <RadioBox>{this.createElements(data)}</RadioBox>
                          </div>
                        );
                      }
                    })()}
                  </div>
                </div>
              );
            })}
            <div className="row">
              <div className="col-12">
                <h3 className="regSubTitle" style={{ marginTop: "0px" }}>
                  Upload Documents
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label
                  htmlFor="RegDocUpd"
                  className="regDocUpd d-flex justify-content-center flex-wrap"
                >
                  <span className="material-icons">publish</span>
                  <p>UPLOAD DOCUMENT TO PROVE YOUR IDENTITY</p>
                  <span className="rduHelp">
                    e.x: Copy of your discharge book
                  </span>
                  <input
                    type="file"
                    required
                    multiple
                    id="RegDocUpd"
                    name="document"
                    onChange={this.changeHandler}
                    hidden
                  />
                </label>
                
                  {this.state.document
                  ? <div className="updDocLoc"> <p className="d-flex align-items-center"><span class="material-icons">insert_photo</span> Uploaded : <span className="fName">{this.state.document.name}</span></p></div>
                  : ""}
                
              </div>
            </div>
            <div className="regAct d-flex justify-content-center align-items-center">
              <PrimaryButton
                label={
                  register.loading || register.registrationSuccess
                    ? [
                        <object
                          className="swBtnLoader"
                          type="image/svg+xml"
                          data="./images/three-dots.svg"
                        />,
                      ]
                    : "SUBMIT"
                }
                name="submit"
                type="submit"
                actionFunction={this.submitForm}
              />
            </div>
          </form>
          <div className="haveAcc text-center">
            <p>Already have an account ?</p>
            <span>Login</span> <Link to={Routes.login.url}>here</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
