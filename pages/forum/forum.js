const app = getApp()
Page({
  data: {
    content: '',
    forumPosts: []
  },

  onLoad: function() {
    this.loadForumPosts();
  },

  loadForumPosts: function() {
    const db = wx.cloud.database();
    db.collection('forum').get().then(res => {
      this.setData({
        forumPosts: res.data.reverse() // 将帖子按时间倒序排列
      });
    }).catch(err => {
      console.error('加载帖子失败', err);
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      });
    });
  },

  handleInput: function(e) {
    this.setData({
      content: e.detail.value
    });
  },

  postMessage: function() {
    if (!this.data.content.trim()) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      });
      return;
    }
    
    const db = wx.cloud.database();
    const content = this.data.content;
    const author = app.globalData.user; // 使用全局变量中的用户名

    db.collection('forum').add({
      data: {
        author,
        content,
        time: new Date().toLocaleString()
      }
    }).then(res => {
      console.log('帖子发布成功', res);
      this.loadForumPosts(); // 重新加载帖子列表
      this.setData({
        content: '' // 清空输入框
      });
      wx.showToast({
        title: '发帖成功',
        icon: 'success'
      });
    }).catch(err => {
      console.error('发帖失败', err);
      wx.showToast({
        title: '发帖失败',
        icon: 'none'
      });
    });
  }
});