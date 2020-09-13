import React, { Component } from "react";
import RadioBox from "../../components/Input/RadioBox/RadioBox";
import SelectBox from "../../components/Input/SelectBox/SelectBox";
import InputBox from "../../components/Input/InputBox/InputBox";

class PensionDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPensioner: false,
      isDisabilityPension: false,
      isExpiredDischarge: false,
    };
  }

  checkPensionType = () => {
    let targetPension = document.getElementById("pensionType");

    if (
      targetPension.options[targetPension.selectedIndex].value ===
      "disabilityPension"
    ) {
      this.setState({
        isDisabilityPension: true,
      });
    } else {
      this.setState({
        isDisabilityPension: false,
      });
    }
  };
  checkDischargeType = () => {
    let targetDischarge = document.getElementById("pensDischargeReason");
    if (
      targetDischarge.options[targetDischarge.selectedIndex].value === "expired"
    ) {
      this.setState({
        isExpiredDischarge: true,
      });
    } else {
      this.setState({
        isExpiredDischarge: false,
      });
    }
  };
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
              changeHandler={this.checkDischargeType}
            >
              <option value="engagementCompletion">
                On completion of engagement
              </option>
              <option value="expired">Expired</option>
              <option value="medical">Medical</option>
              <option value="superAnnuation">Super Annuation</option>
            </SelectBox>
          </div>
          {this.state.isExpiredDischarge ? (
            <>
              <div className="col-6">
                <RadioBox>
                  <p className="radioLabel">Weather death while on service</p>
                  <input
                    type="radio"
                    id="yes"
                    value="yes"
                    name="deathInService"
                  />
                  <label for="yes">Yes</label>
                  <input
                    type="radio"
                    id="no"
                    value="no"
                    name="deathInService"
                  />
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
            </>
          ) : null}

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
              <input
                type="radio"
                id="pensionYes"
                value="yes"
                name="isPensioner"
                onClick={() => this.setState({ isPensioner: true })}
              />
              <label for="pensionYes">Yes</label>
              <input
                type="radio"
                id="pensionNo"
                value="no"
                name="isPensioner"
                onClick={() => this.setState({ isPensioner: false })}
              />
              <label for="pensionNo">No</label>
            </RadioBox>
          </div>

          {this.state.isPensioner ? (
            <>
              <div className="col-6">
                <SelectBox
                  id="pensionType"
                  label="Type of pension"
                  name="pensionType"
                  changeHandler={this.checkPensionType}
                >
                  <option value="servicePension">Service Pension</option>
                  <option value="disabilityPension">Disability Pension</option>
                  <option value="warInjuryPension">War Injury Pension</option>
                  <option value="exGratiaPension">Ex gratia Pension</option>
                  <option value="reservistPension">Reservist Pension</option>
                  <option value="ordinaryFamilyPension">
                    Ordinary Family Pension
                  </option>
                  <option value="specialFamilyPension">
                    Special Family Pension
                  </option>
                  <option value="liberalisedFamilyPension">
                    Liberalised Family Pension
                  </option>
                </SelectBox>
              </div>

              {/* If pension type = disability, show the next 2*/}
              {this.state.isDisabilityPension ? (
                <>
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
                </>
              ) : null}

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
                <SelectBox
                  id="servBankName"
                  label="Bank name"
                  name="servBankName"
                >
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
            </>
          ) : null}
        </div>
      </form>
    );
  }
}

export default PensionDetails;
