import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import { Link } from "react-router-dom";
import Multiselect from "../../components/Multiselect/Multiselect";

class ServiceDetails extends Component {
  Form_Details = [
    {
      radLabel: "Select your service",
      radOpt: ["Army", "Airforce", "Navy"],
      type: "radio",
      group: "service",
    },
    {
      inplabel: "Service Number",
      type: "number",
      name: "serviceNum",
    },
    {
      inplabel: "Enrollment Date",
      type: "date",
      name: "enrollDate",
    },
    {
      sellabel: "Rank",
      type: "select",
      selOption: ["Army", "Airforce", "Navy"],
      name: "rank",
    },
    {
      radLabel: "Select your group",
      radOpt: ["X", "Y", "Z"],
      type: "radio",
      group: "group",
    },
    {
      sellabel: "Trade",
      type: "select",
      selOption: ["Army", "Airforce", "Navy"],
      name: "trade",
    },
    {
      type: "multiSelect",
      label: "Operations Attended",
    },
    {
      type: "multiSelect",
      label: "Decorations",
    },
    {
      radLabel: "Participated in world war 2 ?",
      radOpt: ["Yes", "No"],
      type: "radio",
      group: "ww2",
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
              required
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
        <h3 className="formTitle">Service details</h3>
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

                else if (data.type === "multiSelect") {
                  return (
                    <Multiselect label={data.label}/>
                  );
                }
              })()}
            </div>
          ))}
        </div>
        <div className="btnContainer d-flex justify-content-end">
          {/* <PrimaryButton type="submit" label="Next" /> */}
        </div>
      </form>
    );
  }
}

export default ServiceDetails;
