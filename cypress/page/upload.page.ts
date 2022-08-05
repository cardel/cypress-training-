class UploadPage{
  private selectUploadButton : string;
  private confirmUploadButton : string;
  private confirmationFileByButton: string;
  private confirmationMsgByButton : string;
  private urlPage: string;

  constructor(){
    this.selectUploadButton = "#file-upload";
    this.confirmUploadButton = "#file-submit";
    this.confirmationFileByButton = "#uploaded-files";
    this.confirmationMsgByButton = "#content > div > h3";
    this.urlPage = "https://the-internet.herokuapp.com/upload";
  }

  public visitUploadPage(): void {
    cy.visit(this.urlPage);
  }

  public uploadFileFileByButton(file: string): void{
    cy.get(this.selectUploadButton).attachFile(file);
    cy.get(this.confirmUploadButton).click();
  }
  public verifySubmissionByButton(file: string, msg:string): void{
    cy.get(this.confirmationMsgByButton).should("have.text",msg);
    cy.get(this.confirmationFileByButton).should("contain", file);
  }
}

export {UploadPage}
