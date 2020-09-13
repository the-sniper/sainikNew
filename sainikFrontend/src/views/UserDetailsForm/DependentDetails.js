import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";

class DependentDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      dependentId: 0,
    };
  }

  addMore = () => {
    let dependentDet = document.getElementById("dependentDet");
    let newDependent = document.createElement("div");
    let removeDependent = document.createElement("a");
    let dependentList = document.getElementById("dependentList");

    this.setState({
      dependentId: this.state.dependentId + 1,
    });

    console.log(this.state.dependentId);
    newDependent.classList.add("newDependent");
    newDependent.innerHTML = dependentDet.innerHTML;
    dependentList.appendChild(newDependent);

    removeDependent.id = "removeDependent";
    removeDependent.innerHTML = "<span class='material-icons'>delete</span>";
    newDependent.appendChild(removeDependent);

    removeDependent.addEventListener("click", function deleteDependent() {
      dependentList.removeChild(newDependent);
    });
  };

  render() {
    return (
      <form>
        <h3 className="formTitle">Dependent details</h3>
        <div className="row text-left" id="dependentDet">
          <div className="col-6">
            <InputBox
              id={`${this.state.dependentId}_dependentName`}
              label="Name of dependent"
              type="text"
              name={`${this.state.dependentId}_dependentName`}
            />
          </div>
          <div className="col-6">
            <SelectBox
              id={`${this.state.dependentId}_depEsmRelation`}
              label="Relation to ESM"
              name={`${this.state.dependentId}_depEsmRelation`}
            >
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <InputBox
              id={`${this.state.dependentId}_depDOB`}
              label="Date of birth"
              type="date"
              name={`${this.state.dependentId}_depDOB`}
            />
          </div>
          <div className="col-6">
            <InputBox
              id={`${this.state.dependentId}_depQualCourse`}
              label="Qualification with course/class"
              type="text"
              name={`${this.state.dependentId}_depQualCourse`}
            />
          </div>
          <div className="col-6">
            <InputBox
              id={`${this.state.dependentId}_depAcademicYear`}
              label="Academic year"
              type="text"
              name={`${this.state.dependentId}_depAcademicYear`}
            />
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Employment status</p>
              <input
                type="radio"
                id={`employed_${this.state.dependentId}`}
                value="Employed"
                name={`depEmpStatus_${this.state.dependentId}`}
              />
              <label for={`employed_${this.state.dependentId}`}>Employed</label>
              <input
                type="radio"
                id={`unEmployed_${this.state.dependentId}`}
                value="Un-employed"
                name={`depEmpStatus_${this.state.dependentId}`}
              />
              <label for={`unEmployed_${this.state.dependentId}`}>
                Un-employed
              </label>
            </RadioBox>
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Marital status</p>
              <input
                type="radio"
                id={`Married_${this.state.dependentId}`}
                value="Married"
                name={`depMarStatus_${this.state.dependentId}`}
              />
              <label for={`Married_${this.state.dependentId}`}>Married</label>
              <input
                type="radio"
                id={`single_${this.state.dependentId}`}
                value="Single"
                name={`depMarStatus_${this.state.dependentId}`}
              />
              <label for={`single_${this.state.dependentId}`}>Single</label>
              <input
                type="radio"
                id={`UnMarried_${this.state.dependentId}`}
                value="Un-married"
                name={`depMarStatus_${this.state.dependentId}`}
              />
              <label for={`UnMarried_${this.state.dependentId}`}>
                Un-married
              </label>
            </RadioBox>
          </div>
        </div>

        <div className="d-flex flex-wrap text-left" id="dependentList"></div>

        <div className="addMoreBtn">
          <a
            href="#currentPos"
            className="d-flex align-items-center"
            onClick={this.addMore}
            id="currentPos"
          >
            <span className="material-icons">add_circle</span>Add More
          </a>
        </div>
      </form>
    );
  }
}

export default DependentDetails;
