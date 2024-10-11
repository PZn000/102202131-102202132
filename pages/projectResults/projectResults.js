Page({
  data: {
    projects: [] // 存储传递过来的项目
  },

  onLoad: function(options) {
    // 获取跳转时传递的项目数据
    const projects = JSON.parse(decodeURIComponent(options.projects));
    
    this.setData({
      projects: projects
    });
  }
});
