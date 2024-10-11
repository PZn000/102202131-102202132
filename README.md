# 102202131-102202132
### 1. 目录结构

```
项目名称/专业项目交流小程序
│
├──.git/     # Git 版本控制相关文件存放处。
├── coverage/
│   ├── lcov-report/     
│   ├── clover.xml       
│   ├── coverage-final.json      
│   └── lcov.info        
│
├── node_modules/        。
├── public/              # 公共资源存放目录，如静态文件等。
├── src/
│   ├── assets/          # 资源文件存放处，例如图片、字体等。
│   ├── components/      
│   ├── router/          
│   ├── views/            # 页面视图文件存放目录。
│   │   ├── loginRegisterPage.vue        # 登录注册页面组件。
│   │   ├── addProject.vue                # 添加项目页面组件。
│   │   ├── projectResults.vue            # 项目结果页面组件。
│   │   ├── projectDetail.vue            # 项目详情页面组件。
│   │   ├── chatPage.vue                # 聊天页面组件。
│   │   ├── collectionPage.vue          # 收藏页面组件。
│   │   ├── discussionArea.vue          # 讨论区页面组件。
│   │   ├── myPage.vue                  # 我的页面组件。
│   │   ├── otherPage.vue                # 其他页面组件
│   │   └── homePage.vue                # 首页页面组件。
│   ├── App.vue                          
│   └── main.js                          # 应用入口文件，用于启动应用。
│
├── tests/
│   └── unit/                            # 单元测试文件存放目录。
│       ├── loginRegisterPage.spec.js        # 登录注册页面的单元测试文件。
│       ├── addProject.spec.js                # 添加项目页面的单元测试文件。
│       ├── projectResults.spec.js            # 项目结果页面的单元测试文件。
│       ├── projectDetail.spec.js            # 项目详情页面的单元测试文件。
│       ├── chatPage.spec.js                  # 聊天页面的单元测试文件。
│       ├── collectionPage.spec.js            # 收藏页面的单元测试文件。
│       ├── discussionArea.spec.js            # 讨论区页面的单元测试文件。
│       ├── myPage.spec.js                    # 我的页面的单元测试文件。
│       ├── otherPage.spec.js                  # 其他页面的单元测试文件。
│       └── homePage.spec.js                    # 首页页面的单元测试文件。
│
├──.gitignore                                
├── babel.config.js                          # Babel 编译配置文件，用于配置 Babel 如何转换 JavaScript 代码。
├── jest.config.js                            
├── jsconfig.json                            # JavaScript 配置文件，用于为开发工具提供配置信息。
├── package.json                             
├── README.md                                # 项目说明文件，通常包含项目的介绍、安装说明、使用方法等信息。
└── vue.config.js                            
```
```
/database/
│
├── models/                    # 数据模型定义文件存放目录。
│   ├── userModel.js          # 用户信息数据模型文件。
│   ├── projectModel.js        # 项目数据模型文件。
│   ├── chatModel.js            # 聊天数据模型文件。
│   └── collectionModel.js       # 收藏数据模型文件。
│
├── migrations/                
│   ├── initialSetup.js        # 初始数据库设置迁移文件。
│   └── updateSchema.js        # 数据库架构更新迁移文件。
│
├── seeders/                   
│   ├── usersSeeder.js          # 用户种子数据文件。
│   ├── projectsSeeder.js      # 项目种子数据文件。
│   └── chatsSeeder.js          # 聊天种子数据文件。
│
├── config.js                 
│
└── databaseUtils.js            
```

  
### 2. 使用步骤：

- 获取小程序二维码

由于小程序审核未通过，小程序二维码目前只能使用测试版的，且有时间限制，请测试的老师以及同学添加我们的微信  以便能给予开发测试权限且小程序二维码供你们测试，谢谢！！！
由于小程序审核未通过，小程序二维码目前只能使用测试版的，且有时间限制，请测试的老师以及同学添加我们的微信  以便能给予开发测试权限且小程序二维码供你们测试，谢谢！！！  微信号：yabdylm![7U98W{RUHFPPGZ$D6V{7H H](https://github.com/user-attachments/assets/780ff70a-1e4c-4be0-bf81-9ecc63ec145f)

由于小程序审核未通过，小程序二维码目前只能使用测试版的，且有时间限制，请测试的老师以及同学添加我们的微信  以便能给予开发测试权限且小程序二维码供你们测试，谢谢！！！

1. 向开发团队索取小程序的测试版二维码。通常会在小程序开发过程中生成二维码并赋给测试人员，供测试人员进行测试。

- 扫码进入小程序
1. 打开手机微信，使用“扫一扫”功能扫描测试版二维码。
2. 微信会自动识别二维码并打开小程序。

- 功能测试
1. 登录注册功能：
   - 尝试使用不同的用户名、密码组合进行登录和注册操作，检查输入验证和错误提示是否正确。
   - 测试忘记密码功能，验证找回密码的流程是否顺畅。
2. 项目发布功能：
   - 检查是否能够顺利发布项目。
   - 确认发布后的项目是否能在项目列表中正确显示，并且信息完整准确。
3. 项目申请加入功能：
   - 申请加入不同的项目，检查申请信息的填写和提交过程是否简便流畅。
   - 观察申请提交后，系统是否有相应的提示和反馈。
4. 聊天论坛功能：
   - 能否收到不同测试人员在论坛发布的消息。
5. 我的收藏功能：
   - 收藏项目，检查收藏列表的更新是否及时。

- 性能测试
1. 在使用小程序的过程中，注意观察页面加载速度、操作响应时间等性能指标。
   - 打开不同的页面，记录加载时间，判断是否在可接受范围内。
   - 进行频繁的操作，如快速切换页面、发送多条消息等，观察小程序是否出现卡顿或崩溃现象。

- 问题反馈
1. 如果在测试过程中发现问题，及时记录问题的详细情况。
   - 包括操作步骤、出现问题的页面、错误现象、手机型号和微信版本等信息。
2. 将问题反馈给开发团队，可以通过邮件、项目管理工具或直接沟通的方式，以便开发团队及时修复问题。
