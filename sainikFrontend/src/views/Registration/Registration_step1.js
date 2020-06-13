import React, { Component } from "react";
import "./Registration.css";
import InputBox from "../../components/Input/InputBox/InputBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import RadioBox from "../../components/Input/RadioBox/RadioBox";

class Registration_step1 extends Component {
  Reg_Details = [
    {
      inplabel: "Email address",
      type: "email",
      name: "emailAddress",
    },
    {
      inplabel: "Username",
      type: "text",
      name: "username",
    },
    {
      inplabel: "Password",
      type: "password",
      name: "password",
    },
    {
      inplabel: "Confirm Password",
      type: "password",
      name: "cnfPassword",
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
      <div className="regStep">
        <div className="row">
          <div className="col-12">
            <h3 className="regSubTitle">Login Information</h3>
          </div>
        </div>
        {this.Reg_Details.map((data, index) => {
          return (
            <div className="row">
              <div className="col-12">
                {(() => {
                  if (
                    data.type === "text" ||
                    data.type === "date" ||
                    data.type === "password" ||
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default Registration_step1;
