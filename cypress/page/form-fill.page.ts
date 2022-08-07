class PersonalFormPage{
  private firstName: string;
  private lastName: string;
  private email: string;
  private gender: string;
  private dateOfBirth: string;
  private mobileNumber: string;
  private hobbies: string;
  private currentAddress: string;
  private state: string;
  private city: string;
  private modal: string;
  private submit : string;


  constructor() {
    this.firstName = "#firstName";
    this.lastName = "#lastName";
    this.email = "#userEmail";
    this.gender = "#genterWrapper";
    this.mobileNumber = "#userNumber";
    this.dateOfBirth = "#dateOfBirthInput";
    this.hobbies = "#hobbiesWrapper .custom-control-label";
    this.currentAddress = "#currentAddress";
    this.state =  "#react-select-3-input";
    this.city = "#react-select-4-input";
    this.modal= "#example-modal-sizes-title-lg";
    this.submit = "#submit";
  }  

  public fillForm(personInfo: personalInfo): void {
    cy.get(this.firstName).type(personInfo.name);
    cy.get(this.lastName).type(personInfo.lastName);
    cy.get(this.email).type(personInfo.email);
    cy.get(this.gender).find(`input[value = '${personInfo.gender}']`).click({force: true});
    cy.get(this.mobileNumber).type(personInfo.mobileNumber);
    cy.get(this.dateOfBirth).type(`{selectall}${personInfo.dateOfBirth}{enter}`);
    personInfo.hobbies.forEach((hobbie: string) => {
      cy.get(this.hobbies).filter(`:contains("${hobbie}")`).click();
    });
    cy.get(this.currentAddress).type(personInfo.currentAddress);   
    //Challenge
    cy.get(this.state).type(`${personInfo.state} {enter}`,{force: true});
    cy.get(this.city).type(`${personInfo.city} {enter}`, {force: true});
    //Click on submit
    cy.get(this.submit).click({force: true});
  }

  public visitPage() : void {
    cy.visit("https://demoqa.com/automation-practice-form");
  }

  public verifySubmission(msg: string): void {
    cy.get(this.modal).should("have.text", msg);
  }
}

interface personalInfo {
  name: string,
  lastName: string,
  email: string,
  gender: string,
  dateOfBirth: string,
  mobileNumber: string,
  hobbies: string[],
  currentAddress: string,
  state: string,
  city: string,
}

export {PersonalFormPage};
export {personalInfo};
