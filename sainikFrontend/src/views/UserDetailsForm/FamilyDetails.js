import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";

class FamilyDetails extends Component {
  Form_Details = [
    {
      radLabel: "Marital status",
      radOpt: ["Married", "Single", "Un-married"],
      type: "radio",
      group: "maritalStatus",
    },
    {
      inplabel: "Date of marriage",
      type: "date",
      name: "marriageDate",
    },
    {
      inplabel: "Spouse's name",
      type: "text",
      name: "spouseName",
    },
    {
      radLabel: "Spouse's relation",
      radOpt: ["Wife", "Husband"],
      type: "radio",
      group: "spouseRelation",
    },
    {
      inplabel: "Spouse's date of birth",
      type: "date",
      name: "spouseDob",
    },
    {
      inplabel: "Spouse's identification mark",
      type: "text",
      name: "spouseIdMark",
    },
    {
      inplabel: "Spouse's qualification",
      type: "text",
      name: "spouseQual",
    },
    {
      radLabel: "Spouse's employment status",
      radOpt: ["Employed", "Un-employed"],
      type: "radio",
      group: "spouseEmpStatus",
    },
    {
      inplabel: "Spouse's employed profession",
      type: "text",
      name: "spouseEmpProf",
    },
    {
      inplabel: "Spouse's date of retirement",
      type: "date",
      name: "spouseDor",
    },
    {
      inplabel: "Name of next of kin",
      type: "text",
      name: "nextOfKin",
    },
    {
      sellabel: "Relation to ESM",
      type: "select",
      selOption: ["A", "B", "C"],
      name: "EsmRelation",
    },
  ];
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
  render() {
    return (
      <form>
        <h3 className="formTitle">Family details</h3>
        <div className="row text-left">
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
                      name={`${data.name}${index}`}
                    />
                  );
                } else if (data.type === "select") {
                  return (
                    <SelectBox
                      id={`servSel_${index}`}
                      label={data.sellabel}
                      optional={data.optionalCheck}
                      name={`${data.name}${index}`}
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
        <div className="btnContainer d-flex justify-content-end">
          {/* <TertButton type="submit" label="Previous" />
          <PrimaryButton type="submit" label="Next" /> */}
        </div>
      </form>
    );
  }
}

export default FamilyDetails;
