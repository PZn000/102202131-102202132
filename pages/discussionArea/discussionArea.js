Page({
  data: {
    discussions: [],
    discussionInput: ''
  },

  onLoad: function(options) {
    // 页面加载时的逻辑
    this.loadDiscussions();
  },

  loadDiscussions: function() {
    // 加载讨论内容的逻辑
    // 模拟数据
    this.setData({
      discussions: ['讨论内容1', '讨论内容2', '讨论内容3']
    });
  },

  // 处理输入
  handleInput: function(e) {
    this.setData({
      discussionInput: e.detail.value
    });
  },

  // 发送讨论
  sendDiscussion: function() {
    const discussion = this.data.discussionInput;
    if (discussion) {
      this.setData({
        discussions: [...this.data.discussions, discussion],
        discussionInput: '' // 清空输入框
      });
    }
  }
});