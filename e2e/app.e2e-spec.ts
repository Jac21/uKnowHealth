import { UKnowHealthPage } from './app.po';

describe('u-know-health App', () => {
  let page: UKnowHealthPage;

  beforeEach(() => {
    page = new UKnowHealthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
