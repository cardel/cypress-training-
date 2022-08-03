class ProductsListPage {
  private cartButton: string;
  private checkoutButton: string;
  private cartContent: string;
  private checkoutContent: string;

  constructor() {
      this.cartButton = ".ajax_add_to_cart_button";
      this.checkoutButton = ".button-container";
      this.cartContent = "Add to cart";
      this.checkoutContent = "Proceed to checkout";
  }

  public addToCart(): void {
      cy.get(this.cartButton).contains(this.cartContent).click();
  }

  public checkout(): void {
      cy.get(this.checkoutButton).contains(this.checkoutContent).click();
  }
}

export { ProductsListPage };
