import React, { Component } from "react";
import InputBox from "../../components/Input/InputBox/InputBox";
import InputCheckbox from "../../components/Input/InputCheckbox/InputCheckbox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import "./Login.css";
import { connect } from "react-redux";
import { fetchUser } from "../../redux";
import { Link } from "react-router-dom";
import { Routes } from "../../RouteConstants";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginDetails) => dispatch(fetchUser(loginDetails)),
  };
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userNameErrorText: "",
      passwordErrorText: "Incorrect username or password",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitForm = (event) => {
    let form = document.getElementById("LoginForm");
    console.log(
      `This is the form element : ${form.checkValidity()}${Object.keys(form)}`
    );
    if (form.checkValidity && form.checkValidity()) {
      event.preventDefault();
      let { username, password } = this.state;
      let loginDetails = {
        username: username,
        password: password,
      };
      this.props.login(loginDetails);
    }
  };
  Login_Input = () => {
    return [
      {
        inpLabel: "Username",
        inpType: "text",
        inpRequired: "required",
        name: "username",
        errorText: this.state.userNameErrorText,
      },
      {
        inpLabel: "Password",
        inpType: "password",
        inpRequired: "required",
        minLength: "5",
        name: "password",
        errorText: this.state.PasswordErrorText,
      },
    ];
  };

  success_redirect = async () => {
    if (
      this.props.state.user.userDetails.profileDetails.approvalStatus === "P"
    ) {
      setTimeout(
        () => this.props.history.push(Routes.userNotification.url),
        2000
      );
    } else {
      setTimeout(() => this.props.history.push(Routes.userForm.url), 2000);
    }
  };

  render() {
    const { user } = this.props.state;
    if (user.userDetails.isAuthenticated) {
      this.success_redirect();
    }
    return (
      <div className="swLogin">
        <div className="logoContainer">
          {/* <img src="./images/logo.png" className="img-fluid" alt="" /> */}
        </div>
        <div className="loginGreet">
          <h3>LOGIN</h3>
          <p>Welcome</p>
          <p>Login back to your account</p>
        </div>
        <div className="swLoginInputContainer">
          <form id="LoginForm">
            {user.error ? (
              <div className="errorCnt">
                <span class="material-icons">error</span>
                <p>
                  {user.error === "Unable to log in with provided credentials."
                    ? "Username or Password Incorrect"
                    : user.error}
                </p>
              </div>
            ) : (
              ""
            )}
            {user.userDetails.isAuthenticated ? (
              <div className="successCnt">
                <span class="material-icons">check_circle</span>
                <p>User successfully logged in</p>
              </div>
            ) : (
              ""
            )}
            {this.Login_Input().map((data, index) => (
              <InputBox
                label={data.inpLabel}
                type={data.inpType}
                id={`loginInp_${index}`}
                placeholder={data.inpPlaceholder}
                required={data.inpRequired}
                minLength={data.minLength}
                name={data.name}
                changeHandler={this.changeHandler}
                key={data.name}
                errorText={data.errorText}
              />
            ))}
            <div className="d-flex justify-content-between align-items-center">
              <InputCheckbox label="Remember me" />
              <a href="#">Forgot password?</a>
            </div>
            <PrimaryButton
              type="submit"
              label={
                user.loading || user.userDetails.isAuthenticated
                  ? [
                      <object
                        className="swBtnLoader"
                        type="image/svg+xml"
                        data="./images/three-dots.svg"
                      />,
                    ]
                  : "LOGIN"
              }
              actionFunction={this.submitForm}
            />
          </form>
          <p style={{ marginBottom: "5px", marginTop: "15px" }}>
            Don't have an account yet ?
          </p>
          <Link to="/reg">Register here</Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
