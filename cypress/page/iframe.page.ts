class IframePage {
  private urlPage: string;
  private iframePageTitle: string;
  private cssButton: string;
  private cssUrlPage : string;

  constructor() {
      this.urlPage = "https://www.w3schools.com/html/html_iframe.asp";
      this.cssButton = "#topnav a[title='CSS Tutorial']";
      this.iframePageTitle = "iframe[title='W3Schools HTML Tutorial']";
      this.cssUrlPage = "https://www.w3schools.com/css/";
    }

  visit() {
      cy.visit(this.urlPage);
  }

  getFrameTitle() {
      return cy.iframe(this.iframePageTitle).find("h1");
  }

  goToCssPageInFrame() {
      cy.iframe(this.iframePageTitle).find(this.cssButton).click();
      cy.frameLoaded(this.iframePageTitle, { url: this.cssUrlPage });
  }
}

export { IframePage };
