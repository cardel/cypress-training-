class PersonalFormPage{
  private firstName: string;
  private lastName: string;
  private email: string;
  private gender: string;
  private dateOfBirth: string;
  private mobileNumber: string;
  private hobbies: string[];
  private currentAddress: string;
  private state: string;
  private city: string;

  constructor(personalInformation: personalInfo) {
    this.firstName = personalInformation.name;
    this.lastName = personalInformation.lastName;
    this.email = personalInformation.email;
    this.gender = personalInformation.gender;
    this.mobileNumber = personalInformation.mobileNumber;
    this.gender = personalInformation.gender;
    this.dateOfBirth = personalInformation.dateOfBirth;
    this.hobbies = personalInformation.hobbies;
    this.currentAddress = personalInformation.currentAddress;
    this.state = personalInformation.state;
    this.city = personalInformation.city;
  }  

  public fillForm(): void {
    this.getPage();
    cy.get(this.firstName).type(this.firstName);
    cy.get(this.lastName).type(this.lastName);
    cy.get(this.email).type(this.email);
    cy.get(this.gender).find(`input[value = '${this.gender}']`).click({force: true});
    cy.get(this.mobileNumber).type(this.mobileNumber);
    cy.get(this.dateOfBirth).type(`{selectall}${this.dateOfBirth}{enter}`);
    this.hobbies.forEach((hobbie: string) => {
      cy.get("#hobbiesWrapper .custom-control-label").filter(`:contains("${hobbie}")`).click();
    });
    cy.get(this.currentAddress).type(this.currentAddress);   
    //Challenge
    cy.get(this.state).type(`${this.state} {enter}`,{force: true});
    cy.get(this.city).type(`${this.city} {enter}`, {force: true});
  }

  private getPage() : void {
    cy.visit("https://demoqa.com/automation-practice-form");
  }

  public verifySubmission(msg: string): void {
    cy.get("#example-modal-sizes-title-lg").should("have.text", msg);
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
