import { CodingTestPage } from './app.po';

describe('coding-test App', () => {
  let page: CodingTestPage;

  beforeEach(() => {
    page = new CodingTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
