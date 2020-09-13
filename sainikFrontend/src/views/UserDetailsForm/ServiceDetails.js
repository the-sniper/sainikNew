import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import Multiselect from "../../components/Multiselect/Multiselect";

class ServiceDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAirForce: false,
    };
  }

  changeHandler = () => {
    let target = document.getElementsByName("service");
    for (let i = 0; i < target.length; i++) {
      if (target[0].checked === true) {
        this.setState({
          isAirForce: true,
        });
      } else {
        this.setState({
          isAirForce: false,
        });
      }
    }
  };

  render() {
    return (
      <form>
        <h3 className="formTitle">Service details</h3>
        <div className="row text-left">
          <div className="col-6">
            <RadioBox onChange={() => this.changeHandler()}>
              <p className="radioLabel">Select your service</p>
              <input
                type="radio"
                id="airForce"
                value="airForce"
                name="service"
              />
              <label for="airForce">Air Force</label>
              <input type="radio" id="army" value="army" name="service" />
              <label for="army">Army</label>
              <input type="radio" id="navy" value="navy" name="service" />
              <label for="navy">Navy</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <InputBox
              id="servServiceNumber"
              label="Service Number"
              type="number"
              name="servServiceNumber"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servEnrollmentDate"
              label="Enrollment Date"
              type="date"
              name="servEnrollmentDate"
            />
          </div>
          <div className="col-6">
            <SelectBox id="servRank" label="Rank" name="servRank">
              <option>Option</option>
            </SelectBox>
          </div>
          {this.state.isAirForce ? (
            <div className="col-6">
              <RadioBox>
                <p className="radioLabel">Select your group</p>
                <input type="radio" id="x" value="X" name="group" />
                <label for="x">X</label>
                <input type="radio" id="y" value="y" name="group" />
                <label for="y">Y</label>
                <input type="radio" id="z" value="z" name="group" />
                <label for="z">Z</label>
              </RadioBox>
            </div>
          ) : null}
          <div className="col-6">
            <SelectBox id="servTrade" label="Trade" name="servTrade">
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-12">
            <Multiselect label="Operations Attended" />
          </div>
          <div className="col-12">
            <Multiselect label="Decorations" />
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Participated in WW2 ?</p>
              <input type="radio" id="yes" value="yes" name="ww2" />
              <label for="yes">Yes</label>
              <input type="radio" id="no" value="no" name="ww2" />
              <label for="no">No</label>
            </RadioBox>
          </div>
        </div>
      </form>
    );
  }
}

export default ServiceDetails;
