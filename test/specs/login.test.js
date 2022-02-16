const homePage = require("../pageobjects/home.page");
const loginPage = require("../pageobjects/login.page");
require("dotenv").config();

describe("My Login application", () => {
  let url = process.env.URL;

  it("should go to login", () => {
    homePage.open(url);
    homePage.waitForPage();
    expect(homePage.logo).toBeDisplayed();
  });

  it("check for partner login", () => {
    homePage.clickLogIn();
    expect(loginPage.header).toBeDisplayed();
  });
});
