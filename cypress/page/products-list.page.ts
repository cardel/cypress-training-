class ProductsListPage {
  private cartButton: string;
  private checkoutButton: string;

  constructor() {
      this.cartButton = ".button-container a[title='Add to cart']";
      this.checkoutButton = ".button-container a[title='Proceed to checkout']";
  }

  public addToCart(): void {
      cy.get(this.cartButton).click();
  }

  public checkout(): void {
      cy.get(this.checkoutButton).click();
  }
}

export { ProductsListPage };
