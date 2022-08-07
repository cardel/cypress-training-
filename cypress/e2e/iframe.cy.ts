import {IframePage} from "../page/index";

describe("Page with iframe", () => {
  let iFramePage: IframePage;

  before(() => {
    iFramePage = new IframePage();
    iFramePage.visit();
  });

  it("Get title", () => {
    iFramePage.getFrameTitle().should("have.text", "HTML Tutorial");
  });

  it("Check Css Title", () => {
    iFramePage.goToCssPageInFrame();
    iFramePage.getFrameTitle().should("have.text", "CSS Tutorial");
  });
});
