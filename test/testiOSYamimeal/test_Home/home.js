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
    get acc(){
        return $('-ios class chain,')
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