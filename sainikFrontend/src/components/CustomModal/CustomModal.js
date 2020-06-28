import React, { Component } from "react";
import "./CustomModal.css";

class CustomModal extends Component {
  state = {
    shown: this.props.currentState,
  };
  render() {
    return (
      <div className="customModal">
        <button
          onClick={() => {
            document.body.classList.add("noScroll");
            this.setState({ shown: !this.state.shown });
          }}
        >
          Open Modal
        </button>
        {this.state.shown ? (
          <div className="cmCnt">
            <div className="cmBody">
              <div className="cmHead d-flex justify-content-between align-items-center">
                <h3 className="cmTitle">Test</h3>
                <a href="#" onClick={() => this.setState({ shown: false })}>
                  <span className="material-icons">close</span>
                </a>
              </div>
              <div className="cmContent">Test again</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CustomModal;
