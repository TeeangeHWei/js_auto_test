const AllureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../testiOSYamimeal/test_Home/home')
const loginPage = require('../testiOSYamimeal/test_Home/login.elements')
const accountPage = require('../testiOSYamimeal/test_Home/account.element')
const getAccountPage = require('../testiOSYamimeal/page_interface/accountPage')
const Gestures = require('../../common/Gestures')
var assert = require('chai').assert;
describe('case_01',function(){
    it('登录case',function(){
        AllureReporter.addFeature('google登录测试')
        loginPage.clickGoogle();
        driver.takeScreenshot();
        driver.pause(1000);
        driver.acceptAlert();
        driver.takeScreenshot();
        driver.pause(4000);
        loginPage.clickAccountLogin();
        driver.takeScreenshot();
        driver.pause(10000);
        loginPage.clickLocation();
        driver.takeScreenshot();
        HomePage.alertBindPhone();
        driver.takeScreenshot();
        loginPage.clickAvatar();
        driver.takeScreenshot();
    });
    it('对比结账金额',function(){
        //第一次运行是判断是否绑定手机的弹窗
        AllureReporter.addFeature('frist test')
        driver.pause(4000);
        HomePage.alertbindPhone();
        getAccountPage.inAccount();

        driver.pause(1000)
        try {
            accountPage.waitIndicator(accountPage.activeincator)
            
        } catch (error) {
            console.log(error)
        }

        var setTime = 6000
        driver.pause(setTime);

        var ss = new Array();
        var titleData = new Array();
        //以下只获取下标
        ss = driver.findElements('class name','XCUIElementTypeStaticText')
        for(var i = 0;i<ss.length;i++){
            if (titleData[3] === 'broc storebroc storebroc storebroc storebroc sbroc storebroc st') {
                console.log(titleData[i],'包含')
                break
            } else {
                accountPage.title_01(i);
                titleData.push(accountPage.title_01(i))
            }
        }
        
        accountPage.clickTitle(titleData[3]);
        driver.pause(6000)
        //等待商店页面
        accountPage.waitShop();
        driver.takeScreenshot();
        //滚动页面到指定位置
        const from = { x: 239, y:673 }
        const to = { x: 245, y:394 }
        Gestures.swipe(from,to,1000);

        driver.pause(1000);
        //点击添加商品
        accountPage.addShopItemCell(1);
        accountPage.addShopItemCell(2);
        // 点击结账
        accountPage.checkOutClick();

        driver.pause(5000);
        accountPage.waitPayMentPage();
        driver.touchAction({action:'tap',x:204,y:510});
        driver.pause(5000);

        const fromForPay = {x:183,y:754}
        const toForPay = {x:189,y:113}
        Gestures.swipe(fromForPay,toForPay,1000);

        driver.takeScreenshot();
        driver.pause(4000);
        var payDataIndex = new Array();
        var payData = new Array();
        var newPayData = new Array();
        const payData_04 = $$(accountPage.payMentData_02)
        Array.prototype.insert = function(index, value){
            this.splice(index,0, value);
        }
        for (let i = 0; i < 20; i++) {
            if (accountPage.payForDetail(i).indexOf("$") != -1) {
                payData.push(accountPage.payForDetail(i).replace('$ ',''))
            }
        }
        console.log(payData);
        //重新排序(暂时没找到更便捷方法存储)
        newPayData.insert(0,payData[0])
        newPayData.insert(1,payData[2])
        newPayData.insert(2,payData[5])
        newPayData.insert(3,payData[6])
        newPayData.insert(4,payData[4])
        newPayData.insert(5,payData[7])
        newPayData.insert(6,payData[8])
        newPayData.insert(7,payData[0])
        newPayData.insert(8,payData[3])
        newPayData.insert(9,payData[1])

        console.log(newPayData);
        
        assert.equal(newPayData[9],'210.22');

    })
})