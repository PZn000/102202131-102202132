// pages/login/login.js
const app = getApp();
wx.cloud.init({
  env: "pzn-6gge7w8zf9cf192f", // 当前的云开发环境 ID
});
Page({
  data: {
    username: '',
    password: '',
    showRegister: false,
    agree: false,
    errorTip: ''
  },
  onCheckboxChange(e) {
    this.setData({
      agree: e.detail.value.length > 0
    });
  },
  handleInputOnU(e) {
    this.setData({
      username: e.detail.value
    });
  },
  handleInputOnP(e) {
    this.setData({
      password: e.detail.value
    });
  },
  submit() {
    const db = wx.cloud.database();
    const userInfoCollection = db.collection('userInfo');

    if (this.data.showRegister) {
      // 注册逻辑
      if (this.data.password.length === 0 || this.data.username.length === 0) {
        this.showToast('账号密码不能为空');
        return;
      }
      userInfoCollection.where({
        user: this.data.username
      }).get({
        success: res => {
          if (res.data.length > 0) {
            this.showToast('账号已存在');
          } else {
            userInfoCollection.add({
              data: {
                user: this.data.username,
                password: this.data.password
              },
              success: res => {
                this.showToast('注册成功');
              },
              fail: err => {
                console.error(err);
                this.showToast('注册失败');
              }
            });
          }
        }
      });
    } else {
      // 登录逻辑
      userInfoCollection.where({
        user: this.data.username,
        password: this.data.password
      }).get({
        success: res => {
          if (res.data.length > 0) {
            app.globalData.user = res.data[0].user;
            wx.switchTab({
              url: '/pages/homePage/homePage'
            });
          } else {
            this.showToast('账号密码不正确');
          }
        },
        fail: err => {
          console.error(err);
          this.showToast('登录失败');
        }
      });
    }
  },
  showToast(message) {
    wx.showToast({
      title: message,
      icon: 'none',
      duration: 2000,
      mask: true
    });
  },
  toggleRegister() {
    this.setData({
      showRegister: !this.data.showRegister,
    });
  },
  forgotPassword() {
    wx.navigateTo({
      url: '/pages/forgotPassword/forgotPassword'
    });
  }
});