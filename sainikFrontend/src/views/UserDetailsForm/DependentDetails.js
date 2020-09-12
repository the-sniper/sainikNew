import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";

class DependentDetails extends Component {
  addMore = () => {
    let dependentDet = document.getElementById("dependentDet");
    let newDependent = document.createElement("div");
    let removeDependent = document.createElement("a");
    let dependentList = document.getElementById("dependentList");

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
              id="dependentName"
              label="Name of dependent"
              type="text"
              name="dependentName"
            />
          </div>
          <div className="col-6">
            <SelectBox
              id="depEsmRelation"
              label="Relation to ESM"
              name="depEsmRelation"
            >
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <InputBox
              id="depDOB"
              label="Date of birth"
              type="date"
              name="depDOB"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="depQualCourse"
              label="Qualification with course/class"
              type="text"
              name="depQualCourse"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="depAcademicYear"
              label="Academic year"
              type="text"
              name="depAcademicYear"
            />
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Employment status</p>
              <input
                type="radio"
                id="Employed"
                value="Employed"
                name="depEmpStatus"
              />
              <label for="Employed">Employed</label>
              <input
                type="radio"
                id="Un-employed"
                value="Un-employed"
                name="depEmpStatus"
              />
              <label for="Un-employed">Un-employed</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Marital status</p>
              <input
                type="radio"
                id="Married"
                value="Married"
                name="depMarStatus"
              />
              <label for="Married">Married</label>
              <input
                type="radio"
                id="Single"
                value="Single"
                name="depMarStatus"
              />
              <label for="Single">Single</label>
              <input
                type="radio"
                id="Un-married"
                value="Un-married"
                name="depMarStatus"
              />
              <label for="Un-married">Un-married</label>
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
