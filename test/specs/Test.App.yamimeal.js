const { addFeature } = require('@wdio/allure-reporter').default

describe('case_01',() =>{
    
    it('test_01',function(){
        addFeature('frist test')
        console.log(1 == 1)
    })
})