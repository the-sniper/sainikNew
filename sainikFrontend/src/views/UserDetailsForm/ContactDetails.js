import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import TertButton from "../../components/Input/Button/TertButton";
import InputCheckbox from "../../components/Input/InputCheckbox/InputCheckbox";

class ContactDetails extends Component {
  Current_Address_Details = [
    {
      inplabel: "Mobile number",
      type: "number",
      name:"mobile"
    },
    {
      inplabel: "Tele-phone number",
      type: "number",
      name:"tele"
    },
    {
      inplabel: "Email address",
      type: "email",
      name:"email"
    },
    {
      sellabel: "State",
      type: "select",
      selOption: ["A", "B", "C"],
      name:"state"
    },
    {
      sellabel: "District",
      type: "select",
      selOption: ["A", "B", "C"],
      name:"district"
    },
    {
      sellabel: "City",
      type: "select",
      selOption: ["A", "B", "C"],
      name:"city"
    },
    {
      inplabel: "Street address",
      type: "text",
      name:"street_address"
    },
    {
      inplabel: "House name/number",
      type: "text",
      name:"house_num"
    },
    {
      inplabel: "Thana/Police station",
      type: "text",
      name:"thana"
    },
  ];
  Permanent_Address_Details = [
    {
      inplabel: "Mobile number",
      type: "number",
      name:"mobile"
    },
    {
      inplabel: "Tele-phone number",
      type: "number",
      name:"tele"
    },
    {
      inplabel: "Email address",
      type: "email",
      name:"email"
    },
    {
      sellabel: "State",
      type: "select",
      selOption: ["A", "B", "C"],
      name:"state"
    },
    {
      sellabel: "District",
      type: "select",
      selOption: ["A", "B", "C"],
      name:"district"
    },
    {
      sellabel: "City",
      type: "select",
      selOption: ["A", "B", "C"],
      name:"city"
    },
    {
      inplabel: "Street address",
      type: "text",
      name:"street_address"
    },
    {
      inplabel: "House name/number",
      type: "text",
      name:"house_num"
    },
    {
      inplabel: "Thana/Police station",
      type: "text",
      name:"thana"
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
        <h3 className="formTitle">Contact details</h3>
        <div>
          <h4 className="formSubTitle">Present address</h4>
          <div className="row text-left">
            {this.Current_Address_Details.map((data, index) => (
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
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="formSubTitle">Permanent address</h4>
            <InputCheckbox label="Same as present address" />
          </div>
          <div className="row text-left">
            {this.Permanent_Address_Details.map((data, index) => (
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
        </div>
        <div className="btnContainer d-flex justify-content-end">
          {/* <TertButton type="submit" label="Previous" />
          <PrimaryButton type="submit" label="Submit form" /> */}
        </div>
      </form>
    );
  }
}

export default ContactDetails;
