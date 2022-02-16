class HomePage {
  get logo() {
    return $(".Header");
  }

  get logIn() {
    return $('a[href="/partner-portal"');
  }

  open(path) {
    return browser.url(path);
  }

  waitForPage() {
    this.logo.waitForDisplayed({ timeout: 5000 });
  }

  clickLogIn() {
    this.logIn.click();
  }
}

module.exports = new HomePage();
