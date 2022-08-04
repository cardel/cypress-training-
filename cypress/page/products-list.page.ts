class ProductsListPage {
  private cartButton: string;
  private checkoutButton: string;
  private htmlallElments: string;

  constructor() {
      this.cartButton = ".button-container a[title='Add to cart']";
      this.checkoutButton = ".button-container a[title='Proceed to checkout']";
      this.htmlallElments = ".product-container";
  }

  public proceedToCheckout(): void {
      cy.get(this.checkoutButton).click();
  }

  public addTShirtToCart(product:string): void {
    this.findProductByName(product).find(this.cartButton).click();
  }

  private findProductByName (product:string) {
    return cy.get(this.htmlallElments).filter(`:contains(${product})`);
  }
}

export { ProductsListPage };
