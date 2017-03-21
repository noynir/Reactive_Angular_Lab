import { ReactiveAngularLabPage } from './app.po';

describe('reactive-angular-lab App', () => {
  let page: ReactiveAngularLabPage;

  beforeEach(() => {
    page = new ReactiveAngularLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
