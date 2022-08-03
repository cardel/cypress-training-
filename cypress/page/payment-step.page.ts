class PaymentStepPage {
  private payButton: string;
  private confirmationMessageButton: string;
  private confirmOrderMessage: string;

  constructor() {
      this.payButton =  "a[title='Pay by bank wire'].bankwire";
      this.confirmationMessageButton = "#cart_navigation .button span";
      this.confirmOrderMessage = "#center_column > div > p > strong";
  }

  public payByBank() {
      cy.get(this.payButton).click();
      cy.get(this.confirmationMessageButton).click();
  }

  public getConfirmationMessage() {
      return cy.get(this.confirmOrderMessage);
  }
}

export { PaymentStepPage };
