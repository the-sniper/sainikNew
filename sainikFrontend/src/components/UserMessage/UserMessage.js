import React, { Component } from "react";
import "./UserMessage.css";

class UserMessage extends Component {
  render() {
    return (
      <div className="userMessage d-flex justify-content-center align-items-center flex-wrap">
        <div>
        <h1>You HAVE SUCCESSFULlY REGiSTERED.</h1>
        <p>yOU WILL BE NOTIFIED ONCE YOUR ACCOUNT HAS BEEN APPROVED.</p>
        </div>
      </div>
    );
  }
}

export default UserMessage;
