import { browser, by, element } from 'protractor';

export class MyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('plrs-root h1')).getText();
  }
}
