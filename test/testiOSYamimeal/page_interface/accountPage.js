const HomePage = require('../test_Home/home')
const accountPage = require('../test_Home/account.element')

class getAccountPage{
    inAccount(){
        HomePage.accountClick();
        // driver.setImplicitTimeout(10000);
        driver.pause(5000);
        accountPage.clickCollection();
    }
}
module.exports = new getAccountPage()