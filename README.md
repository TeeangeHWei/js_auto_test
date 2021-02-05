###目前版本只适用在macOS环境下执行
# 环境
* node.js -> v14.15.4
* xcode -> V12.2
* 被测对象->yamimeal 旧版APP


# 1.安装appium
1. 进入appium官网：http://appium.io/
2. 点击download appium
3. 按照系统选择版本![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122549343845.jpg)

4. appium界面![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122552926408.jpg)
5. 点击start开启服务

# 2.安装webDriverAgent
1. `git clone https://github.com/facebookarchive/WebDriverAgent`
2. 初始化
    * 在 WebDriverAgent 目录下执行：./Scripts/bootstrap.sh
3. 配置webdriveragent
    * 打开WebDriverAgent 项目.xcodeproj
    * 设置证书(真机需要设置开发者账号，个人账号也可，simulator可以不用)
    * 可以选择模拟器进行调试 Product -> Test
4. 替换appium 下的WebDriverAgent:在应用程序右键appium点击打开包内容
以我的电脑路径为:/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-webdriveragent
之前编译过的webdriveragent 目录文件替换到以上目录的文件里
# 3.安装必备环境
1. libimobiledevice
安装命令：
`brew install --HEAD libimobiledevice`

2. ideviceinstaller，负责给iOS设备安装卸载应用或者备份应用，该工具是基于libmobiledevice的，因此首先要完成libmobiledevice的编译安装
安装命令:
`brew install --HEAD ideviceinstaller`
3. ios-deploy
ideviceinstaller不支持iOS10，所以还需要安装ios-deploy，ios-deploy是一个使用命令行安装ipa到连接的设备的工具，原理是根据osx命令行工程调用系统底层函数，获取连接的设备，查询安装/卸载ipa

安装命令：
4. `brew install ios-deploy`
或 cnpm install -g ios-deploy
# 4.配置项目
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
# 5.执行
可以找到package.json查看执行的路径
例：执行测试用例：npm run Testyamimeal
    执行测试报告：npm run report
![](https://github.com/TeeangeHWei/js_auto_test/blob/master/img/16122568184766.jpg)




