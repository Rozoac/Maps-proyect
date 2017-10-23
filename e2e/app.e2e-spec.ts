import { ShiptainerPage } from './app.po';

describe('shiptainer App', () => {
  let page: ShiptainerPage;

  beforeEach(() => {
    page = new ShiptainerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
