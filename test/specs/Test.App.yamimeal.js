const AllureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../testiOSYamimeal/test_Home/home')
const accountPage = require('../testiOSYamimeal/test_Home/account.element')
const getAccountPage = require('../testiOSYamimeal/page_interface/accountPage')
const Gestures = require('../../common/Gestures')
// import Gestures from '../../common/Gestures'
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
        try {
            if (accountPage.waitIndicator(accountPage.activeincator)) {
                console.log('元素为',accountPage.waitIndicator(accountPage.activeincator))
            } 
        } catch (e) {
            console.log('跳出')
            // break;
            
        }
        driver.pause(2000)
        const from = { x: 239, y:673 }
        const to = { x: 245, y:394 } 
        Gestures.swipe(from,to);
        
        
        
    })
})