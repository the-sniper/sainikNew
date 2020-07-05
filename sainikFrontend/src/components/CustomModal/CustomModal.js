import React, { Component } from "react";
import "./CustomModal.css";

class CustomModal extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    return (
      <div className="customModal">
        {this.props.isModalOpen ? (
          <div className="cmCnt">
            {document.body.classList.add("noScroll")}
            <div className="cmBody">
              <div className="cmHead d-flex justify-content-between align-items-center">
                <h3 className="cmTitle">{this.props.modalTitle}</h3>
                <a href="#" onClick={this.props.onUserClose}>
                  <span className="material-icons">close</span>
                </a>
              </div>
              <div className="cmContent">{this.props.children}</div>
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
