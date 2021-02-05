class commonTools{
    pageWaitForisDisplayed(element,timeouts,msg){
        driver.waitUntil(function(){
            return element.isDisplayed() === true
        },timeouts,msg)
    }

}
module.exports = new commonTools();