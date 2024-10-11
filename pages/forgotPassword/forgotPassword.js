Page({
  data: {
    username: '',
    captcha: '',
    password: '',
    confirmPassword: ''
  },
  bindUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },
  bindCaptchaInput(e) {
    this.setData({
      captcha: e.detail.value
    });
  },
  bindPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },
  bindConfirmPasswordInput(e) {
    this.setData({
      confirmPassword: e.detail.value
    });
  },
  sendCaptcha() {
    // 发送验证码的逻辑
    console.log('发送验证码');
  },
  submitForm() {
    // 提交表单的逻辑
    if (this.data.password !== this.data.confirmPassword) {
      wx.showToast({
        title: '两次密码输入不一致',
        icon: 'none'
      });
      return;
    }
    // 这里可以添加找回密码的请求逻辑
    console.log('提交找回密码请求', this.data);
    wx.showToast({
      title: '密码找回成功',
      icon: 'success'
    });
  }
});