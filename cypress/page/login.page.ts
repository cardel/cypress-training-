class LoginPage {
  private emailTag: string;
  private passwordTag: string;
  private submit: string;

  constructor() {
      this.emailTag = "#email";
      this.passwordTag = "#passwd";
      this.submit = "#SubmitLogin";
  }

  public login(email: string, password: string) {
      cy.get(this.emailTag).type(email);
      cy.get(this.passwordTag).type(password);
      cy.get(this.submit).click();
  }
}

export { LoginPage }
