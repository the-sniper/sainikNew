import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";

class PensionDetails extends Component {
  render() {
    return (
      <form>
        <h3 className="formTitle">Pension details</h3>
        <div className="row text-left">
          <div className="col-6">
            <InputBox
              id="pensLastUnit"
              label="Unit last served"
              type="text"
              name="pensLastUnit"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="pensDischargeDate"
              label="Date of discharge"
              type="date"
              name="pensDischargeDate"
            />
          </div>
          <div className="col-6">
            <SelectBox
              id="pensDischargeReason"
              label="Reason of discharge"
              name="pensDischargeReason"
            >
              <option>On completion of engagement</option>
              <option>Expired</option>
              <option>Medical</option>
              <option>Super Annuation</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Weather death while on service</p>
              <input type="radio" id="yes" value="yes" name="deathInService" />
              <label for="yes">Yes</label>
              <input type="radio" id="no" value="no" name="deathInService" />
              <label for="no">No</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <InputBox
              id="pensdod"
              label="Date of death"
              type="date"
              name="pensdod"
            />
          </div>
          <div className="col-6">
            <SelectBox
              id="pensDeathDetails"
              label="Death details"
              name="pensDeathDetails"
            >
              <option>Options</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <SelectBox
              id="pensMedCatg"
              label="Medical category while discharge"
              name="pensMedCatg"
            >
              <option>AYE</option>
              <option>BEE</option>
              <option>CEE</option>
              <option>DEE</option>
              <option>S1A1</option>
              <option>S2A2</option>
              <option>S3A3</option>
              <option>S4A4</option>
              <option>SHAPE1</option>
              <option>SHAPE2</option>
              <option>SHAPE3</option>
              <option>SHAPE4</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <SelectBox
              id="pensDischargeChar"
              label="Character while discharge"
              name="pensDischargeChar"
            >
              <option>Exemplary</option>
              <option>Very Good</option>
              <option>Good</option>
              <option>Satisfactory</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <InputBox
              id="pensDischargeBook"
              label="Discharge book number"
              type="number"
              name="pensDischargeBook"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="pensGratuity"
              label="Gratuity"
              type="number"
              name="pensGratuity"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="pensgroupInsurance"
              label="Group Insurance"
              type="number"
              name="pensgroupInsurance"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="pensleaveEnhancement"
              label="Leave Enhancement"
              type="text"
              name="pensleaveEnhancement"
            />
          </div>
          <div className="col-6">
            <RadioBox>
              <p className="radioLabel">Whether pensioner ?</p>
              <input type="radio" id="yes" value="yes" name="isPensioner" />
              <label for="yes">Yes</label>
              <input type="radio" id="no" value="no" name="isPensioner" />
              <label for="no">No</label>
            </RadioBox>
          </div>
          <div className="col-6">
            <SelectBox
              id="pensionType"
              label="Type of pension"
              name="pensionType"
            >
              <option>Service Pension</option>
              <option>Disability Pension</option>
              <option>War Injury Pension</option>
              <option>Ex gratia Pension</option>
              <option>Reservist Pension</option>
              <option>Ordinary Family Pension</option>
              <option>Special Family Pension</option>
              <option>Liberalised Family Pension</option>
            </SelectBox>
          </div>

          {/* If pension type = disability, show the next 2*/}

          <div className="col-6">
            <SelectBox
              id="perDisability"
              label="Percentage of disability"
              name="perDisability"
            >
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <SelectBox
              id="disabilityElement"
              label="Disability element"
              name="disabilityElement"
            >
              <option>Option</option>
            </SelectBox>
          </div>

          <div className="col-6">
            <InputBox
              id="servPpoNum"
              label="PPO number"
              type="number"
              name="servPpoNum"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="pensionSanctioned"
              label="Pension amount sanctioned"
              type="number"
              name="pensionSanctioned"
            />
          </div>
          <div className="col-6">
            <SelectBox id="servBankName" label="Bank name" name="servBankName">
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <SelectBox
              id="servBranchName"
              label="Branch name"
              name="servBranchName"
            >
              <option>Option</option>
            </SelectBox>
          </div>
          <div className="col-6">
            <InputBox
              id="servIfsc"
              label="IFSC code"
              type="text"
              name="servIfsc"
            />
          </div>
          <div className="col-6">
            <InputBox
              id="servpensionAccNum"
              label="Pension account number"
              type="number"
              name="servpensionAccNum"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default PensionDetails;
