import React, { Component } from "react";
import InputBox from "../../components/Input/InputBox/InputBox";
import InputCheckbox from "../../components/Input/InputCheckbox/InputCheckbox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import axios from "axios";
import "./Login.css";
import { connect } from "react-redux";
import { fetchUser } from "../../redux";
import { setIn } from "formik";

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
      passwordErrorText: "",
    };
  }

  changeHandler = (event) => {
    let username = this.state.username;
    let password = this.state.password;
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
        minLength: "2",
        name: "password",
        errorText: this.state.PasswordErrorText,
      },
    ];
  };

  success_redirect = async () => {
    setTimeout(() => this.props.history.push("/form"), 5000);
  };

  render() {
    const { user } = this.props.state;
    if (user.userDetails.isAuthenticated) {
      this.success_redirect();
    }
    return (
      <div className="swLogin">
        <div className="logoContainer">
          <img src="./images/logo.png" className="img-fluid" alt="" />
        </div>
        <div className="loginGreet">
          <h3>LOGIN</h3>
          <p>Welcome</p>
          <p>Login back to your account</p>
        </div>
        <div className="swLoginInputContainer">
          <form id="LoginForm">
            <p className="text-danger">{user.error}</p>
            {user.userDetails.isAuthenticated ? (
              <p className="text-success">User Successfully Logged-In.</p>
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
                errorText={this.state.errorText}
              />
            ))}
            <div className="d-flex justify-content-between align-items-center">
              <InputCheckbox label="Remember me" />
              <a href="#">Forgot password?</a>
            </div>
            <PrimaryButton
              type="submit"
              label="LOGIN"
              actionFunction={this.submitForm}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
