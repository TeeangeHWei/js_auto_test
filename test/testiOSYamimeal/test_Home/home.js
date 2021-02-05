class HomePage{
    get Home(){
        return $('~首頁')
    }
    get order(){
        return $('~訂單')
    }
    get shoppingCar(){
        return $('~購物車')
    }
    get message(){
        return $('~消息')
    }
    get account(){
        return $('~帳戶')
    }
    get closeBindPhoneAlert(){
        const selector = '**/XCUIElementTypeStaticText[`value == ""`]'
        return $(`-ios class chain:${selector}`);
    }
    get alertBindPhoneEle(){
        const selector = '**/XCUIElementTypeStaticText[`value == "你的賬戶需要更新"`]'
        return $(`-ios class chain:${selector}`);
    }

    alertbindPhone(){
        const el = this.alertBindPhoneEle;
        driver.waitUntil(function(){
            console.log(el.isDisplayed());
            return el.getValue() === '你的賬戶需要更新'
        },7000);
        this.closeBindPhoneAlert.click();
    }

    homeClick(){
        this.Home.click()
    }
    orderClick(){
        this.order.click()
    }
    messageClick(){
        this.message.click()
    }
    accountClick(){
        this.account.click()
    }

}
module.exports = new HomePage()