class DownloadPage {
  private urlPage: string;
  private submitDownload: string;

  constructor() {
    this.urlPage = "https://demoqa.com/upload-download";
    this.submitDownload = "#downloadButton";
  }

  public visitDownloadPage(): void {
    cy.visit(this.urlPage);
  }

  public downloadFile():void {
    cy.get(this.submitDownload).click();
  }

  public verifyFile(fileName: string) {
    return cy.readFile(`${Cypress.config("downloadsFolder")}/${fileName}`).should("exist");
  }
}

export {DownloadPage};
