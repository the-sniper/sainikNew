import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";

class PersonalDetails extends Component {
  Form_Details = [
    {
      inplabel: "First name",
      type: "text",
      name: "firstName",
    },
    {
      inplabel: "Last name",
      type: "text",
      name: "lastName",
    },
    {
      radLabel: "Select gender",
      radOpt: ["Male", "Female"],
      type: "radio",
      group: "gender",
    },
    {
      inplabel: "Date of birth",
      type: "date",
      name: "dob",
    },
    {
      inplabel: "Father's name",
      type: "text",
      name: "fatherName",
    },
    {
      inplabel: "Mother's name",
      type: "text",
      name: "motherName",
    },
    {
      inplabel: "Identification mark",
      type: "text",
      name: "idMark",
    },
    {
      inplabel: "Aadhar card number",
      type: "number",
      name: "aadhar",
    },
    {
      inplabel: "PAN card number",
      type: "text",
      name: "pan",
    },
    {
      inplabel: "ECHS card number",
      type: "number",
      name: "echs",
    },
    {
      inplabel: "CSD card number",
      type: "number",
      name: "csd",
    },
    {
      sellabel: "Religion",
      type: "select",
      selOption: ["Hinduism", "Islam", "Christianity", "Sikhism", "Budhism", "Jainism", "Others"],
      optionalCheck: "(Optional)",
      name: "relegion",
    },
    {
      sellabel: "Caste",
      type: "select",
      selOption: ["A", "B", "C"],
      optionalCheck: "(Optional)",
      name: "caste",
    },
    {
      inplabel: "Birth place",
      type: "text",
      name: "birthPlace",
    },
    {
      sellabel: "Birth state",
      type: "select",
      selOption: ["A", "B", "C"],
      name: "birthState",
    },
    {
      inplabel: "Birth city",
      type: "text",
      name: "birthCity",
    },
    {
      inplabel: "Educational qualification in civil",
      type: "text",
      name: "EduInCivil",
    },
    {
      inplabel: "Equivalent test passed in civil",
      type: "text",
      name: "EquiInCivil",
    },
    {
      radLabel: "Civil employment status",
      radOpt: ["Employed", "Un-employed", "Retired"],
      type: "radio",
      group: "civEmpStatus",
    },
    {
      radLabel: "Civil pension status",
      radOpt: ["Yes", "No"],
      type: "radio",
      group: "civPensionStatus",
    },
    {
      inplabel: "Civil pension amount",
      type: "number",
      name: "civilPension",
    },
    {
      inplabel: "Civil employer",
      type: "text",
      name: "civilEmp",
    },
    {
      inplabel: "Civil monthly income",
      type: "number",
      name: "civIncome",
    },
    {
      inplabel: "Department in civil",
      type: "text",
      name: "deptInCivil",
    },
    {
      inplabel: "Date of retirement",
      type: "date",
      name: "dateOfRetirement",
    },
    {
      inplabel: "Official contact number",
      type: "number",
      name: "offContactNum",
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
        <h3 className="formTitle">Personal details</h3>
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
                      name={data.name}
                      minLength={data.minLength}
                      maxLength={data.maxLength}
                      changeHandler = {this.limitChar}

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
        <div className="btnContainer d-flex justify-content-end">
          {/* <TertButton type="submit" label="Previous" />
          <PrimaryButton type="submit" label="Next" /> */}
        </div>
      </form>
    );
  }
}

export default PersonalDetails;
