// 假设这是你的页面的 JavaScript 部分
wx.cloud.init({
  env: "pzn-6gge7w8zf9cf192f", // 当前的云开发环境 ID
});
const app =getApp()
Page({
  data: {
    project: {
      projectName: '',
      type: '',
      majors: '',
      schedule: '',
      contact: '',
      requirements: '',
      introduction: ''
    }
  },

  onLoad: function(options) {
    // 页面加载时获取云数据库中的项目数据
    this.getProjectData();
  },

  getProjectData: function() {
    // 调用云数据库API获取数据
    const db = wx.cloud.database();

    db.collection('project').where({
      projectName: app.globalData.currentProjectName
    }).get({
      success: res => {
        console.log(res.data[0].projectName)
        this.setData({
          project: {
            projectName: res.data[0].projectName,
            type: res.data[0].projectType,
            majors: res.data[0].majorsRequired,
            schedule: res.data[0].timeSchedule,
            contact: res.data[0].contactInfo,
            requirements: res.data[0].memberRequirements,
            introduction: res.data[0].projectIntroduction
          }
        });
      },
      fail: err => {
        // 数据获取失败的处理
        console.error("获取项目数据失败：", err);
      }
    });
  },

  applyToJoin: function() {
    const db = wx.cloud.database();
    const _ = db.command;
    
    // 假设你想要添加的新元素是这样的
    const newParticipator = app.globalData.user;
    
    // 查询条件，假设我们要根据 projectName 来查询
    const query = {
      projectName: app.globalData.currentProjectName
    };
    console.log(query)
    db.collection("project").where(query).get({
      success: function(res) {
        if (res.data.length > 0) {
          const docId = res.data[0]._id;
          db.collection("project").doc(docId).update({
            data: {
              participator: _.push(newParticipator)
            },
            success: function(updateRes) {
              wx.showToast({
                title: '加入成功',
              })
            },
            fail: function(error) {
              console.error("更新失败", error);
            }
          });
        } else {
          console.log("没有找到匹配的文档");
        }
      },
      fail: function(error) {
        console.error("查询失败", error);
      }
    });
  },

  goToDiscussion: function() {
    // 进入讨论区的逻辑
    console.log('进入讨论区按钮被点击');
  }
});