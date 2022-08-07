import {UploadPage} from "../page/index";
import {DownloadPage} from "../page/index";

describe("Upload and Download file test", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;
  let file: string;
  let confirmationMsg: string;
  const fileDownload = "sampleFile.jpeg";

  before(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
    file = "example.json";
    confirmationMsg = "File Uploaded!";
  });

  it("I upload the file by button", () => {
    uploadPage.visitUploadPage();
    uploadPage.uploadFileFileByButton(file);
    uploadPage.verifySubmissionByButton(file, confirmationMsg);
  });

  it("Downloading File", () => {
    downloadPage.visitDownloadPage();
    downloadPage.downloadFile();
    downloadPage.verifyFile(fileDownload);
  });
});
