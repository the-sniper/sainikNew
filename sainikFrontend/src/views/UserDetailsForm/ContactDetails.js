import React, { Component } from "react";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";
import InputCheckbox from "../../components/Input/InputCheckbox/InputCheckbox";

class ContactDetails extends Component {
  render() {
    return (
      <form>
        <h3 className="formTitle">Contact details</h3>
        <div>
          <h4 className="formSubTitle">Present address</h4>
          <div className="row text-left">
            <div className="col-6">
              <InputBox
                id="mobileNum"
                label="Mobile number"
                type="number"
                name="mobileNum"
              />
            </div>
            <div className="col-6">
              <InputBox
                id="Tele-phoneNum"
                label="Tele-phone number"
                type="number"
                name="Tele-phoneNum"
              />
            </div>
            <div className="col-6">
              <InputBox
                id="contactEmail"
                label="Email address"
                type="email"
                name="contactEmail"
              />
            </div>
            <div className="col-6">
              <SelectBox id="contState" label="State" name="contState">
                <option>Option</option>
              </SelectBox>
            </div>
            <div className="col-6">
              <SelectBox id="contDistrict" label="District" name="contDistrict">
                <option>Option</option>
              </SelectBox>
            </div>
            <div className="col-6">
              <InputBox
                id="contCity"
                label="city"
                type="text"
                name="contCity"
              />
            </div>
            <div className="col-6">
              <InputBox
                id="contStreetAddress"
                label="Street address"
                type="text"
                name="contStreetAddress"
              />
            </div>
            <div className="col-6">
              <InputBox
                id="contHouseName"
                label="House name/number"
                type="text"
                name="contHouseName"
              />
            </div>
            <div className="col-6">
              <InputBox
                id="contthana"
                label="Thana/Police station"
                type="text"
                name="contthana"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="formSubTitle">Permanent address</h4>
            <InputCheckbox label="Same as present address" />
          </div>
          <div className="row text-left">
            <div className="col-6">
              <SelectBox id="contState" label="State" name="contState">
                <option>Option</option>
              </SelectBox>
            </div>
            <div className="col-6">
              <SelectBox id="contDistrict" label="District" name="contDistrict">
                <option>Option</option>
              </SelectBox>
            </div>
            <div className="col-6">
              <InputBox
                id="contCity"
                label="city"
                type="text"
                name="contCity"
              />
            </div>
            <div className="col-6">
              <InputBox
                id="contStreetAddress"
                label="Street address"
                type="text"
                name="contStreetAddress"
              />
            </div>
            <div className="col-6">
              <InputBox
                id="contHouseName"
                label="House name/number"
                type="text"
                name="contHouseName"
              />
            </div>
            <div className="col-6">
              <InputBox
                id="contthana"
                label="Thana/Police station"
                type="text"
                name="contthana"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactDetails;
