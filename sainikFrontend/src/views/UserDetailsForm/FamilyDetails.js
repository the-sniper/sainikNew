import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";

class FamilyDetails extends Component {
  render() {
    return (
      <form>
        <h3 className="formTitle">Family details</h3>
        <div className="row text-left">
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Marital status</p>
              <input
                type="radio"
                id="Married"
                value="Married"
                name="maritalStatus"
              />
              <label for="Married">Married</label>
              <input
                type="radio"
                id="Single"
                value="Single"
                name="maritalStatus"
              />
              <label for="Single">Single</label>
              <input
                type="radio"
                id="Un-married"
                value="Un-married"
                name="maritalStatus"
              />
              <label for="Un-married">Un-married</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <InputBox
              id="famDOM"
              label="Date of marriage"
              type="date"
              name="famDOM"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="famSpouseName"
              label="Spouse's name"
              type="text"
              name="famSpouseName"
            />
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Spouse's relation</p>
              <input
                type="radio"
                id="Wife"
                value="Wife"
                name="spouseRelation"
              />
              <label for="Wife">Wife</label>
              <input
                type="radio"
                id="Husband"
                value="Husband"
                name="spouseRelation"
              />
              <label for="Husband">Husband</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <InputBox
              id="famSpouseDob"
              label="Spouse's date of birth"
              type="date"
              name="famSpouseDob"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="famSpouseIdMark"
              label="Spouse's identification mark"
              type="text"
              name="famSpouseIdMark"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="famSpouseQual"
              label="Spouse's qualification"
              type="text"
              name="famSpouseQual"
            />
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Spouse's employment status</p>
              <input
                type="radio"
                id="Employed"
                value="Employed"
                name="spouseEmpStatus"
              />
              <label for="Employed">Employed</label>
              <input
                type="radio"
                id="Un-employed"
                value="Un-employed"
                name="spouseEmpStatus"
              />
              <label for="Un-employed">Un-employed</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <InputBox
              id="famSpouseEmpProf"
              label="Spouse's employed profession"
              type="text"
              name="famSpouseEmpProf"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="famSpouseDor"
              label="Spouse's date of retirement"
              type="date"
              name="famSpouseDor"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="famNextOfKin"
              label="Name of next of kin"
              type="text"
              name="famNextOfKin"
            />
          </div>
          <div className="col-6">
            <SelectBox
              id="EsmRelation"
              label="Relation to ESM"
              name="EsmRelation"
            >
              <option>Option</option>
            </SelectBox>
          </div>
        </div>
      </form>
    );
  }
}

export default FamilyDetails;
