import { MaterialDemoPage } from './app.po';

describe('material-demo App', function() {
  let page: MaterialDemoPage;

  beforeEach(() => {
    page = new MaterialDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
