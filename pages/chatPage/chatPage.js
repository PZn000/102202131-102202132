Page({
  data: {
    chatMessages: [],
    messageInput: '',
    userName: '',
    userAvatar: ''
  },

  onLoad: function(options) {
    // 页面加载时的逻辑
    this.setData({
      userName: options.name,
      userAvatar: options.avatar || '默认头像路径'
    });
    this.loadChatMessages();
  },

  loadChatMessages: function() {
    // 加载聊天消息的逻辑
    // 模拟数据
    this.setData({
      chatMessages: [
        { from: 'other', text: '你好', avatar: '默认对方头像路径' },
        { from: 'me', text: '你好，请问你现在有空吗？', avatar: this.data.userAvatar },
        { from: 'other', text: '有空的，我们需要讨论一下项目的事', avatar: '默认对方头像路径' }
      ]
    });
  },

  // 处理输入
  handleInput: function(e) {
    this.setData({
      messageInput: e.detail.value
    });
  },

  // 发送消息
  sendMessage: function() {
    const message = this.data.messageInput;
    if (message) {
      const newMessage = { from: 'me', text: message, avatar: this.data.userAvatar };
      const updatedMessages = [...this.data.chatMessages, newMessage];
      this.setData({
        chatMessages: updatedMessages,
        messageInput: '' // 清空输入框
      });
    }
  }
});