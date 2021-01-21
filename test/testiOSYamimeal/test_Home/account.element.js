class accountPage{
    get collectionBtn(){
        const selector = '**/XCUIElementTypeStaticText[`value == "收藏"`]'
        
        return $(`-ios class chain:${selector}`);
    }
    get itemTitle(){
        return $('XCUIElementTypeStaticText'); 
    }
    get elements_00(){
        return this.itemTitle.$$('value');
    }
    get getText(){
        return this.elements_00.filter(element =>{
            console.log(element.getText());

        });
    }
    aa (indexx){
        return $$("XCUIElementTypeStaticText")[indexx];
        // return browser.findElements('class name','XCUIElementTypeStaticText')
    } 
    get selectoTitle(){
        return $$('**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther[2]')
    }
    // get collectionItem(item){
    //     const selector = `**/XCUIElementTypeStaticText['value == ${item}']`
        
    //     return $(`-ios predicate string:${selector}`)
        
    // }

    clickCollection(){
        this.collectionBtn.click()
    }

    clickCollectionItem(){
        this.clickCollectionItem.click()
    }
    title_01(index){
        console.log(this.aa(index).getAttribute("value"));
        return this.aa(index).getAttribute("value");
        
        
        
    }
    
}

module.exports = new accountPage()