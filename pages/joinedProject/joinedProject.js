const app = getApp()
Page({
  data: {
    projects: [],
  },

  onLoad: function() {
    this.loadProjects();
  },

  loadProjects: function() {
    const db = wx.cloud.database();
    const user = app.globalData.user;
    const _ = db.command;
    if (user) {
      db.collection('project').where(
        _.or([ 
          { user: user }, // 'user' 字段值等于 'user'
          { participator: _.eq(user) } // 'participator' 数组字段中包含 'user'
        ])
      ).get().then(res => {
        console.log(res)
        if (res.data.length > 0) {
          this.setData({
            projects: res.data
          });
        } else {
          wx.showToast({
            title: '暂无参与的项目',
            icon: 'none'
          });
        }
      }).catch(err => {
        console.error('加载项目失败', err);
        wx.showToast({
          title: '加载失败',
          icon: 'none'
        });
      });
    }
  },

  goToProjectDetail: function(e) {
    const projectId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `project-detail/project-detail?id=${projectId}`
    });
  }
});