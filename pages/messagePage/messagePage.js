Page({
  data: {
    messages: [
      { avatar: "/images/avatar1.png", name: "张三", lastMessage: "你好，什么时候有空？" },
      { avatar: "/images/avatar2.png", name: "李四", lastMessage: "项目进展如何？" },
      { avatar: "/images/avatar3.png", name: "王五", lastMessage: "有个新任务。" },
      { avatar: "/images/avatar4.png", name: "赵六", lastMessage: "会议时间定了吗？" },
      { avatar: "/images/avatar5.png", name: "孙七", lastMessage: "资料准备好了。" },
      { avatar: "/images/avatar6.png", name: "周八", lastMessage: "一起吃个饭？" },
    ]
  },

  onLoad: function(options) {
    // 页面加载时的逻辑
  },

  // 跳转到聊天页面
  goToChatPage: function(e) {
    const index = e.currentTarget.dataset.index;
    const message = this.data.messages[index];
    wx.navigateTo({
      url: `/pages/chatPage/chatPage?name=${message.name}&avatar=${message.avatar}&userId=${index}`
    });
  },
});