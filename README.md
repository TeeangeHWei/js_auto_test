# 1.安装appium
1. 进入appium官网：http://appium.io/
2. 点击download appium
3. 按照系统选择版本![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122549343845.jpg)

4. appium界面![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122552926408.jpg)
5. 点击start开启服务
# 配置xcode
2.libimobiledevice

安装命令：

`brew install --HEAD libimobiledevice`
3.ideviceinstaller

ideviceinstaller，负责给iOS设备安装卸载应用或者备份应用，该工具是基于libmobiledevice的，因此首先要完成libmobiledevice的编译安装

安装命令：

`brew install --HEAD ideviceinstaller`
4.ios-deploy

ideviceinstaller不支持iOS10，所以还需要安装ios-deploy，ios-deploy是一个使用命令行安装ipa到连接的设备的工具，原理是根据osx命令行工程调用系统底层函数，获取连接的设备，查询安装/卸载ipa

安装命令：

`brew install ios-deploy`
或 cnpm install -g ios-deploy

5.App Inspector

App Inspector是运行在浏览器端的移动设备 UI 查看器，使用树状态结构查看 UI 布局，并且能自动生成 XPath，方便脚本的编写和生成

安装命令：

`cnpm install app-inspector -g`
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




