import { QqqPage } from './app.po';

describe('qqq App', () => {
  let page: QqqPage;

  beforeEach(() => {
    page = new QqqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
