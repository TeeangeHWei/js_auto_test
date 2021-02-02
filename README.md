# 1.安装appium
1. 进入appium官网：http://appium.io/
2. 点击download appium
3. 按照系统选择版本![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122549343845.jpg)

4. appium界面![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122552926408.jpg)
5. 点击start开启服务
# 配置项目
1. git 项目到本地
2. 进入项目
3. npm install 安装依赖
4. config/wdio.ios.conf.js找到以下方法修改里面的参数，目前只配置了模拟器的，后续真机配置会发出来
```
capabilities: [{
    
        platformName: "iOS",
        deviceName: "iPhone 11 Pro Max",
        bundleId: "com.benmu.mobile.YamiMeal",
        automationName: "XCUITest",
        uuid: "7EDE528B-435C-46C1-91B5-59E54AFDC13B",
        platformVersion: "14.1",
    }],
```
在终端输入`$instruments -s devices`
![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122566221507.jpg)

        1. platformName：手机的操作系统
        2. deviceName:设备名称
        3. bundleId：被测试的应用id
        4. automationName：自动化测试引擎
        5. uuid：模拟器要用到 - 真机则用udid
        6. platformVersion:系统版本
# 执行
可以找到package.json查看执行的路径
例：执行测试用例：npm run Testyamimeal
    执行测试报告：npm run report
![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122568184766.jpg)




