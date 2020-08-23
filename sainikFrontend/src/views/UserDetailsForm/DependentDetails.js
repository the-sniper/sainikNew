import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";

class DependentDetails extends Component {
  Form_Details = [
    {
      inplabel: "Name of dependent",
      type: "text",
      name: "dependentName",
    },
    {
      sellabel: "Relation to ESM",
      type: "select",
      selOption: ["A", "B", "C"],
      name: "EsmRelation",
    },
    {
      inplabel: "Date of birth",
      type: "date",
      name: "dob",
    },
    {
      inplabel: "Qualification with course/class",
      type: "text",
      name: "qualCourse",
    },
    {
      inplabel: "Academic year",
      type: "text",
      name: "academicYear",
    },
    {
      radLabel: "Employment status",
      radOpt: ["Employed", "Un-employed"],
      type: "radio",
      group: "depEmpStatus",
    },
    {
      radLabel: "Marital status",
      radOpt: ["Married", "Un-married"],
      type: "radio",
      group: "depMarStatus",
    },
  ];
  createElements = (dataParam) => {
    let radioElementsArray = [];
    let selectElementsArray = [];

    if (dataParam.type === "radio") {
      let randomValueName = Math.floor(Math.random() * 1000)
      for (let i = 0; i < dataParam.radOpt.length; i++) {
        let randomValue = Math.floor(Math.random() * 1000)
        radioElementsArray.push(
          <>
            <input
              type="radio"
              id={`servRad_${dataParam.radOpt[i]}${randomValue}`}
              name={dataParam.group+randomValueName}
              checked
            />
            <label for={`servRad_${dataParam.radOpt[i]}${randomValue}`}>
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
          {this.Form_Details.map((data, index) => (
            <div className="col-6">
              {(() => {
                if (
                  data.type === "text" ||
                  data.type === "date" ||
                  data.type === "number" ||
                  data.type === "email"
                ) {
                  return (
                    <InputBox
                      id={`servInp_${index}`}
                      label={data.inplabel}
                      type={data.type}
                      optional={data.optional}
                      name={data.name}
                    />
                  );
                } else if (data.type === "select") {
                  return (
                    <SelectBox
                      id={`servSel_${index}`}
                      label={data.sellabel}
                      optional={data.optionalCheck}
                      name={data.name}
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
          ))}
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
        <div className="btnContainer d-flex justify-content-end"></div>
      </form>
    );
  }
}

export default DependentDetails;
