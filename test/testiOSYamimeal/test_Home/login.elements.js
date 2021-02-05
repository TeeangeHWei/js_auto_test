const tools = require('../../../common/tools')
class yamimealLoginPage{
    get googleLoginbtn(){
        const selector = '**/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[3]'
        return $(`-ios class chain:${selector}`);
    }

    clickGoogle(){
        this.googleLoginbtn.click();
    }

    get googleLoginWait(){
        const selector = '**/XCUIElementTypeOther[`label == "Sign in - Google Accounts"`]/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]'
        return $(`-ios class chain:${selector}`);
    }
    get locationWait(){
        const selector = '**/XCUIElementTypeStaticText[`value == "是的，這是我的地址"`]'
        return $(`-ios class chain:${selector}`);
    }
    get avatarIcon(){
        const selector = '**/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeImage'
        return $(`-ios class chain:${selector}`);
    }
    
    clickAccountLogin(){
        const el = this.googleLoginWait
        driver.waitUntil(function(){
            return el.isDisplayed() === true
        },5000);
        el.click();
    }
    clickLocation(){
        const el = this.locationWait
        tools.pageWaitForisDisplayed(el,5000);
        el.click();
    }
    clickAvatar(){
        this.avatarIcon.click();
    }

}

module.exports = new yamimealLoginPage()