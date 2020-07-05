import React, { Component } from "react";
import axios from "axios";
import store from "../../redux/store";
import CustomModal from "../../components/CustomModal/CustomModal";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: props.data,
      error: "",
      loading: "",
      isShown: false,
    };
  }

  approveUser = () => {
    let { userDetails } = store.getState().user;
    this.setState({
      loading: true,
    });
    axios
      .put(
        `/api/admin/${this.state.userDetails.slno}/`,
        {
          approvalStatus: "A",
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Token ${userDetails.authToken}`,
          },
        }
      )
      .then((res) => {
        this.setState({
          userDetails: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log("There was an error : ", err);
        this.setState({
          userDetails: this.props.data,
          error: "There was an error",
          loading: false,
        });
      });
  };

  render() {
    let data = this.state.userDetails;
    return (
      <>
        <td>{data.email}</td>
        <td>{data.username}</td>
        <td>{data.mobileNumber}</td>
        <td>
          <a
            href="#"
            onClick={() => this.setState({ isShown: !this.state.isShown })}
            className="vuViewDoc"
          >
            <span class="material-icons">visibility</span>VIEW
          </a>
        </td>
        <td>{data.approvalStatus === "P" ? "PENDING" : "APPROVED"}</td>
        <td>
          {data.approvalStatus === "A" ? (
            <button className="btn actBlock">
              <span class="material-icons">block</span>Block
            </button>
          ) : (
            <>
              <button className="btn actReject">
                <span class="material-icons">person_remove</span>Reject
              </button>
              <button className="btn actApprove" onClick={this.approveUser}>
                <span class="material-icons">how_to_reg</span>Approve
              </button>
            </>
          )}
        </td>
        <CustomModal
          isModalOpen={this.state.isShown}
          onUserClose={() => {
            this.setState({ isShown: !this.state.isShown });
          }}
          modalTitle="Verify Documents"
        >
          <img className="userUpdDoc" src={data.documents} />
        </CustomModal>
      </>
    );
  }
}

export default TableData;
