const AllureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../testiOSYamimeal/test_Home/home')
const accountPage = require('../testiOSYamimeal/test_Home/account.element')
const getAccountPage = require('../testiOSYamimeal/page_interface/accountPage')
const Gestures = require('../../common/Gestures')
var assert = require('chai').assert;
describe('case_01',() =>{
    it('test_01',function(){
        AllureReporter.addFeature('frist test')
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
        driver.pause(2000)
        // accountPage.waitIndicator(accountPage.activeincator)
        accountPage.waitShop();
        driver.takeScreenshot();
        
        const from = { x: 239, y:673 }
        const to = { x: 245, y:394 }
        Gestures.swipe(from,to);
        driver.pause(1000);
        accountPage.addShopItemCell(1);
        accountPage.addShopItemCell(2);
        accountPage.checkOutClick();
        driver.pause(3000);
        accountPage.waitPayMentPage();
        driver.touchPerform({action:'tap',x:204,y:510});
        driver.takeScreenshot();



        // driver.pause(10000);
        // cell = driver.findElements('xpath',accountPage.shopCategoryCell);
        // const cellElement = $(accountPage.shopCategoryCell);
        // driver.waitUntil(function () {
        //     console.log(accountPage.shopCategoryImageClick(1).isDisplayed())
        //     while (accountPage.shopCategoryImageClick(1).isDisplayed()) {
        //         console.log(cellElement.isDisplayed())
        //         return accountPage.shopCategoryImageClick(1).isDisplayed() === true
                
        //     }
            
        // },1000,'元素不存在');
        // driver.pause(10000);
        // console.log(cell.length);
        // for(i = 0;i<cell.length;i++){
        //     console.log('点击了：',i+1);
        //     console.log('元素在',accountPage.shopCategoryImageClick(i+1))
        //     accountPage.shopCategoryImageClick(i+1).click();
        //     driver.pause(1000);
        // }
    })
})