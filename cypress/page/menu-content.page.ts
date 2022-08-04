class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string
  private tDressMenu: string

  constructor() {
      this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";
      this.menuContentPageURL = "http://automationpractice.com";
      this.tDressMenu = "#block_top_menu > ul > li > a[title='Dresses']";
  }

  public visitMenuContentPage(): void {
      cy.visit(this.menuContentPageURL)
  }

  public goToTShirtMenu(): void {
      cy.get(this.tShirtMenu).click()
  }

  public goToDressesMenu(): void {
    cy.get(this.tDressMenu).click()
}
}

export { MenuContentPage }
