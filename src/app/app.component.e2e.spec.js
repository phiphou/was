describe('App', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual("Angular 2 App | ng2-webpack");
  });

  it('should go to about', function() {
    element(by.id('aboutLink')).click();
    expect(browser.getCurrentUrl()).toEqual('http://127.0.0.1:8080/about');
    //browser.sleep(2000);
    // element(by.css('.about_title')).getText().then(function(texts) {
    //       console.log(texts);
    //     });

  });

  it('About page should have a "Non-Trivial AngularJS Made Easy"', function() {
    element(by.id('aboutLink')).click();
    var foo = element(by.css('.about_title'));
    // foo.getText().then(function(texts) {
    //   console.log(texts);
    // });
    expect(foo.getText()).toEqual('Non-Trivial AngularJS Made Easy');
  });

});
