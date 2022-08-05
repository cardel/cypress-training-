import {UploadPage} from "../page/index";

describe("Upload file test", async () => {
  const file = "example.json";
  describe("Uploading file", async () => {
    let uploadPage: UploadPage;
    before(() => {
      uploadPage = new UploadPage();
    });

    it("I upload the file by button", async () => {
      uploadPage.visitUploadPage();
      uploadPage.uploadFileFileByButton(file);
      uploadPage.verifySubmissionByButton(file);
    });

    it("I upload the file by drop textarea", async () => {
      uploadPage.visitUploadPage();
      uploadPage.uploadFileFileByDropTextArea(file);
      uploadPage.verifySubmissionByTextArea(file);
    });
  });
});
