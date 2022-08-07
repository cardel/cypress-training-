import {PersonalFormPage} from "../page/index";
import {personalInfo} from "../page/index";

describe("Register student information form", () => {
  let personalPage: PersonalFormPage;
  const personalInformation = {
    name: "Holmes",
    lastName: "Salazar",
    email: "test@email.com",
    gender: "Male",
    dateOfBirth: "27 Jul 2016",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
    state: "NCR",
    city: "Delhi",
  };
  before( () => {
    personalPage = new PersonalFormPage();
  });

  it("Filling form", () => {
    personalPage.visitPage();
    personalPage.fillForm(personalInformation as personalInfo);
    personalPage.verifySubmission("Thanks for submitting the form");
  });
});

