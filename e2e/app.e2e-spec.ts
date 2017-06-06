import { CodeLinkPage } from './app.po';

describe('code-link App', () => {
  let page: CodeLinkPage;

  beforeEach(() => {
    page = new CodeLinkPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
