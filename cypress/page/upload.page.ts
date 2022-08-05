class UploadPage{
  private selectUploadButton : string;
  private confirmUploadButton : string;
  private dragUploadTextArea : string;
  private confirmationFileByButton: string;
  private confirmationMsgByButton : string;
  private urlPage: string;

  constructor(){
    this.selectUploadButton = "#file-upload";
    this.confirmUploadButton = "#file-submit";
    this.dragUploadTextArea = "#drag-drop-upload";
    this.confirmUploadButton = "#uploaded-files";
    this.confirmationFileByButton = "#uploaded-files";
    this.confirmationMsgByButton = "#content  > div > h3";
    this.urlPage = "https://the-internet.herokuapp.com/upload";
  }

  public visitUploadPage(): void {
    cy.get(this.urlPage);
  }

  public uploadFileFileByButton(file: string): void{
    cy.get(this.selectUploadButton).attachFile(file);
    cy.get(this.confirmUploadButton).click();
  }

  public uploadFileFileByDropTextArea(file: string): void{
    cy.get(this.dragUploadTextArea).attachFile(file);
    cy.get(this.confirmUploadButton).click();    
  }
  
  public verifySubmissionByButton(file: string): void{
    cy.get(this.selectUploadButton).should("have.text","File Uploaded");
    cy.get(this.confirmationFileByButton).should("contain", file);
  }

  public verifySubmissionByTextArea(file: string): void{
    cy.get(this.dragUploadTextArea).should("contain", file);
    
  }

}

export {UploadPage}
