import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";

class PensionDetails extends Component {
  Form_Details = [
    {
      inplabel: "Unit last served",
      type: "text",
      name: "unitLastServed",
    },
    {
      inplabel: "Date of discharge",
      type: "date",
      name: "dateOfDischarge",
    },
    {
      sellabel: "Reason of discharge",
      type: "select",
      selOption: ["On completion of engagement", "Expired", "Medical", "Super Annuation"],
      name: "dischargeReason",
    },
    {
      radLabel: "Whether  death while on service",
      radOpt: ["Yes", "No"],
      type: "radio",
      group: "deathOnService",
    },
    {
      inplabel: "Date of death",
      type: "date",
      name: "dateOfDeath",
    },
    {
      sellabel: "Details of death",
      type: "select",
      selOption: ["A", "B", "C"],
      name: "deathDetails",
    },
    {
      sellabel: "Medical category while discharge",
      type: "select",
      selOption: ["AYE", "BEE", "CEE", "DEE", "S1A1", "S2A2", "S3A3", "S4A4", "SHAPE1", "SHAPE2", "SHAPE3", "SHAPE4"],
      name: "medCat",
    },
    {
      sellabel: "Character while discharge",
      type: "select",
      selOption: ["Exemplary", "Very Good", "Good", "Satisfactory"],
      name: "charDischarge",
    },
    {
      inplabel: "Discharge book number",
      type: "text",
      name: "dischargeBook",
    },
    {
      inplabel: "Gratuity",
      type: "number",
      name: "gratuity",
    },
    {
      inplabel: "Group Insurance",
      type: "text",
      name: "groupInsurance",
    },
    {
      inplabel: "Leave Enhancement",
      type: "text",
      name: "leaveEnhancement",
    },
    {
      radLabel: "Whether pensioner",
      radOpt: ["Yes", "No"],
      type: "radio",
      group: "isPensioner",
    },
    {
      sellabel: "Type of pension",
      type: "select",
      selOption: ["Service Pension", "Disability Pension", "War Injury Pension", "Ex-gratia Pension", "Reservist Pension", "Ordinary Family Pension", "Special Family Pension", "Liberalised Family Pension"	],
      name: "pensionType",
    },
    {
      inplabel: "PPO number",
      type: "number",
      name: "ppoNum",
    },
    {
      inplabel: "Pension amount sanctioned",
      type: "number",
      name: "pensionSanctioned",
    },
    {
      sellabel: "Bank name",
      type: "select",
      selOption: ["A", "B", "C"],
      name: "bankName",
    },
    {
      sellabel: "Branch name",
      type: "select",
      selOption: ["A", "B", "C"],
      name: "branchName",
    },
    {
      inplabel: "IFSC code",
      type: "text",
      name: "ifsc",
    },
    {
      inplabel: "Pension account number",
      type: "number",
      name: "pensionAccNum",
    },
    //If pension type = disability
    {
      sellabel: "Percentage of disability",
      type: "select",
      selOption: ["A", "B", "C"],
      name: "perDisability",
    },
    {
      sellabel: "Disability element",
      type: "select",
      selOption: ["A", "B", "C"],
      name: "disabilityElement",
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
        <h3 className="formTitle">Pension details</h3>
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
                      name={data.name}
                    />
                  );
                } else if (data.type === "select") {
                  return (
                    <SelectBox
                      id={`servSel_${index}`}
                      label={data.sellabel}
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

export default PensionDetails;
