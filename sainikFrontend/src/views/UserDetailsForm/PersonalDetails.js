import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";

class PersonalDetails extends Component {
  render() {
    return (
      <form>
        <h3 className="formTitle">Personal details</h3>
        <div className="row text-left">
          <div className="col-6">
            <InputBox
              id="persFirstName"
              label="First name"
              type="text"
              name="persFirstName"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="persLastName"
              label="Last name"
              type="text"
              name="persLastName"
            />
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Select gender</p>
              <input type="radio" id="male" value="male" name="persGender" />
              <label for="male">Male</label>
              <input
                type="radio"
                id="female"
                value="female"
                name="persGender"
              />
              <label for="female">Female</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <InputBox
              id="persDOB"
              label="Date of birth"
              type="date"
              name="persDOB"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servFatherName"
              label="Father's name"
              type="text"
              name="servFatherName"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servMotherName"
              label="Mother's name"
              type="text"
              name="servMotherName"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servIdMark"
              label="Identification mark"
              type="text"
              name="servIdMark"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servAadhar"
              label="Aadhar card number"
              type="number"
              name="servAadhar"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servPAN"
              label="PAN card number"
              type="text"
              name="servPAN"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servECHS"
              label="ECHS card number"
              type="number"
              name="servECHS"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servCSD"
              label="CSD card number"
              type="number"
              name="servCSD"
            />
          </div>
          <div className="col-6">
            <SelectBox id="persReligion" label="Religion" name="persReligion">
              <option>Hinduism</option>
              <option>Islam</option>
              <option>Christianity</option>
              <option>Sikhism</option>
              <option>Budhism</option>
              <option>Jainism</option>
              <option>Others</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <SelectBox id="persCaste" label="Caste" name="persCaste">
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <InputBox
              id="persbirthPlace"
              label="Birth place"
              type="text"
              name="persbirthPlace"
            />
          </div>
          <div className="col-6">
            <SelectBox
              id="persBirthState"
              label="Birth State"
              name="persBirthState"
            >
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <SelectBox
              id="persBirthDistrict"
              label="Birth District"
              name="persBirthDistrict"
            >
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <InputBox
              id="persBirthCity"
              label="Birth city"
              type="text"
              name="persBirthCity"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="persEduInCivil"
              label="Educational qualification in civil"
              type="text"
              name="persEduInCivil"
            />
          </div>
          <div className="col-6">
            <SelectBox
              id="persCivEmpStatus"
              label="Civil employment status"
              name="persCivEmpStatus"
            >
              <option>Employed</option>
              <option>Un-employed</option>
              <option>Retired</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Civil pension status</p>
              <input
                type="radio"
                id="yes"
                value="yes"
                name="civPensionStatus"
              />
              <label for="yes">Yes</label>
              <input type="radio" id="no" value="no" name="civPensionStatus" />
              <label for="no">No</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <InputBox
              id="persCivilPension"
              label="Civil pension amount"
              type="number"
              name="persCivilPension"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="persCivilEmp"
              label="Civil employer"
              type="number"
              name="persCivilEmp"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="perscivIncome"
              label="Civil monthly income"
              type="number"
              name="perscivIncome"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="persDeptInCivil"
              label="Department in civil"
              type="text"
              name="persDeptInCivil"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="persDateOfRetirement"
              label="Date of retirement"
              type="date"
              name="persDateOfRetirement"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="persoffContactNum"
              label="Official contact number"
              type="number"
              name="persoffContactNum"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default PersonalDetails;
