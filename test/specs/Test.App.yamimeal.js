const AllureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../testiOSYamimeal/test_Home/home')
const accountPage = require('../testiOSYamimeal/test_Home/account.element')
var assert = require('chai').assert;
describe('case_01',() =>{
    
    it('test_01',function(){
        AllureReporter.addFeature('frist test')
        HomePage.accountClick();
        // driver.setImplicitTimeout(10000);
        driver.pause(5000);
        accountPage.clickCollection();
        // driver.pause(10000);
        driver.setTimeout({'pageLoad':10000})
        var ss = new Array();
        ss = driver.findElements('class name','XCUIElementTypeStaticText')
        console.log('这是一个元素集合',ss,'这是元素中第3个元素',ss[2])
        for(var i = 0;i<ss.length;i++){
            accountPage.title_01(i);
        }
        
        
    })
}) 