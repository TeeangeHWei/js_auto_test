const AllureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../testiOSYamimeal/test_Home/home')
const accountPage = require('../testiOSYamimeal/test_Home/account.element')
const getAccountPage = require('../testiOSYamimeal/page_interface/accountPage')
var assert = require('chai').assert;
describe('case_01',() =>{
    it('test_01',function(){
        AllureReporter.addFeature('frist test')
        getAccountPage.inAccount();
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
        
        driver.waitUntil(function () {
            // console.log('为',accountPage.activeincator().isDisplayed())
            return accountPage.activeIsTure() === false
        },6000,'找不到该元素')
    })
}) 