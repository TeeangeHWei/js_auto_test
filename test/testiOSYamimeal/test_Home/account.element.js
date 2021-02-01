class accountPage{
    shopCategoryCell = '//XCUIElementTypeApplication[@name="Yamimeal"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeTable/XCUIElementTypeOther//XCUIElementTypeImage'
    payMentData_02 = '//XCUIElementTypeApplication[@name="Yamimeal"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeScrollView/XCUIElementTypeOther[6]//XCUIElementTypeOther/XCUIElementTypeStaticText'

    get collectionBtn(){
        const selector = '**/XCUIElementTypeStaticText[`value == "收藏"`]'
        
        return $(`-ios class chain:${selector}`);
    }
    get scrollTouch(){
        const selector = '**/XCUIElementTypeStaticText[`value == "测1"`][2]'
        return $(`-ios class chain:${selector}`);
    }
    collectionTitle(ele){
        const selector = `value == "${ele}"`
        return $(`-ios predicate string:${selector}`);
    }
    shopItemCell(index){
        const selector = '**/XCUIElementTypeStaticText[`value == ""`]'+`[${index}]`
        return $(`-ios class chain:${selector}`);

    }

    aa (indexx){
        return $$("XCUIElementTypeStaticText")[indexx];
        // return browser.findElements('class name','XCUIElementTypeStaticText')
    }
    payForLoca(index){
        return $$(this.payMentData_02)[index]
    }
    payForPage(index){
        return $$("XCUIElementTypeStaticText")[index];
    }
    get shopWaitItem(){
        const selector = '**/XCUIElementTypeStaticText[`value == "10/20"`][1]'
        return $(`-ios class chain:${selector}`);
    }
    get payMentWaitEle(){
        const selector = '**/XCUIElementTypeStaticText[`value == "預計送達時間"`]'
        return $(`-ios class chain:${selector}`); 
    }
    get activeincator(){
        
        return $('//XCUIElementTypeApplication[@name="Yamimeal"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]');
    } 
    get shopDetailPage(){
        const selector = '**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeTable/XCUIElementTypeOther'
        return $$(`-ios class chain:${selector}`);
    }
    get checkOut(){
        const selector = '**/XCUIElementTypeStaticText[`value == "去結賬"`]'
        return $(`-ios class chain:${selector}`);
    }
    shopCategoryImageClick(index){
        const selector = `**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeTable/XCUIElementTypeOther/XCUIElementTypeImage[${index}]`
        return $(`-ios class chain:${selector}`);
    }
    addShopItemCell(index){
        this.shopItemCell(index).click();
    }

    clickCollection(){
        this.collectionBtn.click()
    }
    clickTitle(ele){
        this.collectionTitle(ele).click()
    }
    moveToElement(element){
        element.waitForDisplayer();
        element.moveTo();
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
    payForData(index){
        console.log(this.payForPage(index).getAttribute("value"));
        return this.payForPage(index).getAttribute("value")
    }
    waitIndicator (element){
       return driver.waitUntil(function () {
           console.log('等待菊花',element.isDisplayed())
            return element.isDisplayed() === true
        },2000,'元素不存在')
    }
    eleList(){
        console.log(this.shopDetailPage())
    }
    checkOutClick(){
        return this.checkOut.click()
    }
    waitShop(){
        const value = this.shopWaitItem;
        return driver.waitUntil(function () {
            return value.getValue() === '10/20'
            
        },7000,'111111')
    }
    waitPayMentPage(){
        const el = this.payMentWaitEle;
        return driver.waitUntil(function(){
            return el.getValue() === '預計送達時間'

        },5000);
    }
    payForDetail(count){
        console.log(this.payForLoca(count).getAttribute("value"))
        return this.payForLoca(count).getAttribute("value");
    }

    
    
}

module.exports = new accountPage()