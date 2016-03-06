/**
 * Created by Debarshi on 3/5/2016.
 */
describe('angularjs homepage todo list', function () {
    it('should display zipcode', function () {
        browser.get('http://localhost:8080/#/zipcode');
        element(by.model('zipCode')).sendKeys('W1J 9HP');
        element(by.css(".zipcode_button")).click();
        browser.pause();
    });
});