import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import PrimaryButton from "../../components/Input/Button/PrimaryButton";
import { Link } from "react-router-dom";

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
      inpLabel: "Trade",
      type: "text",
      name: "trade",
    },
    {
      inplabel: "Operations Attended",
      type: "text",
      name: "opsAttended",
    },
    {
      sellabel: "Decorations",
      type: "select",
      selOption: ["Bharat Ratna",
      "Param Vir Chakra",
      "Ashoka Chakra",
      "Padma Vibhushan",
      "Padma Bhushan",
      "Sarvottam Yudh Seva Medal",
      "Param Vishisht Seva Medal",
      "Maha Vir Chakra",
      "Kirti Chakra",
      "Padma Shri",
      "Sarvottam Jeevan Raksha Padak",
      "Uttam Yudh Seva Medal",
      "Ati Vishisht Seva Medal",
      "Vir Chakra",
      "Shaurya Chakra",
      "President's Police and Fire Services Medal for Gallantry",
      "President's Police Medal for Gallantry",
      "President's Fire Services Medal for Gallantry",
      "President's Correctional Service Medal for Gallantry",
      "President's Home Guards and Civil Defence Medal for Gallantry",
      "Yudh Seva Medal",
      "Sena Medal",
      "Nau Sena Medal",
      "Vayu Sena Medal",
      "Vishisht Seva Medal",
      "Police Medal for Gallantry",
      "Fire Services Medal for Gallantry",
      "Correctional Service Medal for Gallantry",
      "Home Guards and Civil Defence Medal for Gallantry",
      "Uttam Jeevan Raksha Padak",
      "Parakram Padak (Wound Medal)",
      "General Service Medal - 1947",
      "Samanya Seva Medal - 1965",
      "Special Service Medal",
      "Samar Seva Star-1965",
      "Poorvi Star",
      "Paschimi Star",
      "Operation Vijay Star Medal",
      "Siachen Glacier Medal",
      "Raksha Medal – 1965",
      "Sangram Medal",
      "Operation Vijay Medal",
      "Operation Parakram Medal",
      "Sainya Seva Medal",
      "High Altitude Medal",
      "Police (Special Duty) Medal - 1962",
      "Videsh Seva Medal",
      "President's Police and Fire Services Medal for Distinguished Service",
      "President's Police Medal for Distinguished Service",
      "President's Fire Services Medal for Distinguished Service",
      "President's Correctional Service Medal for Distinguished Service",
      "President's Home Guards and Civil Defence for Distinguished Service",
      "Meritorious Service Medal",
      "Long Service and Good Conduct Medal",
      "Police Medal for Meritorious Service",
      "Fire Services Medal for Meritorious Service",
      "Correction Service Medal for Meritorious Service",
      "Home Guards and Civil Defence Medal for Meritorious Service",
      "Jeevan Raksha Padak",
      "Territorial Army Decoration",
      "Territorial Army Medal",
      "Indian Independence Medal-1947",
      "Independence Medal - 1950",
      "50th Anniversary of Independence Medal",
      "25th Independence Anniversary Medal",
      "30 Years Long Service Medal",
      "20 Years Long Service Medal",
      "9 Years Long Service Medal",
      "Commonwealth Awards"],
      name: "decorations",
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
