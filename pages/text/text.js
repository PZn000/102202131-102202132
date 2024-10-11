const db = wx.cloud.database();

Page({
  data: {
    projects: [] // 存储从数据库提取的项目
  },

  onLoad: function() {
    this.loadProjects(); // 加载项目
  },

  loadProjects: function() {
    db.collection('project') // 确保这里的 'projects' 是正确的集合名称
      .get()
      .then(res => {
        console.log('获取的项目:', res.data); // 确认获取到的项目
        this.setData({
          projects: res.data // 设置加载的项目
        });
      })
      .catch(err => {
        console.error('获取项目失败:', err); // 打印错误信息
        wx.showToast({
          title: '获取项目失败',
          icon: 'none'
        });
      });
  }
});
