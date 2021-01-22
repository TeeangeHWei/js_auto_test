class accountPage{
    get collectionBtn(){
        const selector = '**/XCUIElementTypeStaticText[`value == "收藏"`]'
        
        return $(`-ios class chain:${selector}`);
    }
    collectionTitle(ele){
        const selector = `value == "${ele}"`
        return $(`-ios predicate string:${selector}`);
    }
    aa (indexx){
        return $$("XCUIElementTypeStaticText")[indexx];
        // return browser.findElements('class name','XCUIElementTypeStaticText')
    }
    get activeincator(){
        // const selector = '**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]'
        return $('//XCUIElementTypeApplication[@name="Yamimeal"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]');
    } 

    clickCollection(){
        this.collectionBtn.click()
    }
    clickTitle(ele){
        this.collectionTitle(ele).click()
    }

    clickCollectionItem(){
        this.clickCollectionItem.click()
    }
    activeIsTure(){
        this.activeincator.isDisplayed()
    }
    title_01(index){
        console.log(this.aa(index).getAttribute("value"));
        return this.aa(index).getAttribute("value");
        
        
        
    }
    
}

module.exports = new accountPage()