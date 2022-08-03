class ShoppingCartPage {
  private cartNav: string;
  private cartContent: string;

  constructor() {
      this.cartNav = ".cart_navigation";
      this.cartContent = "Proceed to checkout";
  }

  public checkoutCart() {
      cy.get(this.cartNav).contains(this.cartContent).click();
  }
}

export { ShoppingCartPage };
