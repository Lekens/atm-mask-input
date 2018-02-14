import { AtmMaskInputPage } from './app.po';

describe('atm-mask-input App', () => {
  let page: AtmMaskInputPage;

  beforeEach(() => {
    page = new AtmMaskInputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
