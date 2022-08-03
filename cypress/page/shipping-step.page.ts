class ShippingStepPage {
  private cartContent: string;
  private cartNav: string;
  private cvg: string;

  constructor() {
      this.cartContent = "Proceed to checkout";
      this.cartNav = ".cart_navigation";
      this.cvg = "#cgv";
  }

  public checkout() {
      cy.get(this.cvg).check();
      cy.get(this.cartNav).contains(this.cartContent).click();
  }
}

export { ShippingStepPage };
