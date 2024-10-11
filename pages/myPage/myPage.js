wx.cloud.init({
  env: "pzn-6gge7w8zf9cf192f", // 当前的云开发环境 ID
});
const app = getApp()
Page({
  data: {
    userInfo: {
      studentId: '',
      name: '',
      major: '',
      phone: '',
      email: '',
      bio: ''
    },
    editMode: false
  },

  onLoad: function() {
    this.loadUserInfo();
  },

  loadUserInfo: function() {
    const db = wx.cloud.database();
    const user =app.globalData.user; // 确保已登录并获取用户信息
    if (user) {
      db.collection('personInfo').where({
        user: user
      }).get().then(res => {
        if (res.data.length > 0) {
          this.setData({
            userInfo: res.data[0],
            editMode: false
          });
        } else {
          this.setData({
            editMode: true
          });
        }
      }).catch(err => {
        console.error('加载用户信息失败', err);
      });
    }
  },

  goToSettings: function() {
    this.setData({
      editMode: true
    });
  },

  saveUserInfo: function(e) {
    const { studentId, name, major, phone, email, bio } = e.detail.value;
    const db = wx.cloud.database();
    db.collection('personInfo').add({
      data: {
        studentId,
        name,
        major,
        phone,
        email,
        bio,
        user: app.globalData.user // 确保保存用户字段
      }
    }).then(() => {
      wx.showToast({
        title: '信息更新成功',
        icon: 'success'
      });
      this.setData({
        userInfo: {
          studentId,
          name,
          major,
          phone,
          email,
          bio
        },
        editMode: false
      });
    }).catch(err => {
      console.error('更新信息失败', err);
    });
  },
  joinedProject() {
    wx.navigateTo({
      url: '/pages/joinedProject/joinedProject' // 确保路径正确
    });
  }
});