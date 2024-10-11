const app = getApp()
const db = wx.cloud.database(); // 获取数据库引用
Page({
  data: {
    projectName: '',
    projectType: '',
    majorsRequired: '',
    timeSchedule: '',
    contactInfo: '',
    memberRequirements: '',
    projectIntroduction: ''
  },

  // 输入处理函数
  inputProjectName: function(e) {
    this.setData({ projectName: e.detail.value });
  },
  inputProjectType: function(e) {
    this.setData({ projectType: e.detail.value });
  },
  inputMajorsRequired: function(e) {
    this.setData({ majorsRequired: e.detail.value });
  },
  inputTimeSchedule: function(e) {
    this.setData({ timeSchedule: e.detail.value });
  },
  inputContactInfo: function(e) {
    this.setData({ contactInfo: e.detail.value });
  },
  inputMemberRequirements: function(e) {
    this.setData({ memberRequirements: e.detail.value });
  },
  inputProjectIntroduction: function(e) {
    this.setData({ projectIntroduction: e.detail.value });
  },


  // 提交项目
  submitProject: function() {
   
    if (this.validateInput()) {
      let projectData = {
        user : app.globalData.user,
        projectName: this.data.projectName,
        projectType: this.data.projectType,
        majorsRequired: this.data.majorsRequired,
        timeSchedule: this.data.timeSchedule,
        contactInfo: this.data.contactInfo,
        memberRequirements: this.data.memberRequirements,
        projectIntroduction: this.data.projectIntroduction,
        participator : []
      };
      db.collection('project').add({
        data: projectData,
        success: function(res) {

          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          });
          wx.navigateBack(); // 返回上一页
        },
        fail: function(error) {
          wx.showToast({
            title: '提交失败，请重试',
            icon: 'none',
            duration: 2000
          });
        }
      });
    }
  },
  // 输入验证
  validateInput: function() {
    let { projectName, projectType, majorsRequired, timeSchedule, contactInfo, memberRequirements, projectIntroduction, publisher } = this.data;
    let isValid = true;

    if (!projectName.trim()) {
      wx.showToast({
        title: '请输入项目名称',
        icon: 'none',
      });
      isValid = false;
    }
    if (!projectType.trim()) {
      wx.showToast({
        title: '请输入项目类型',
        icon: 'none',
      });
      isValid = false;
    }
    if (!majorsRequired.trim()) {
      wx.showToast({
        title: '请输入所需专业',
        icon: 'none',
      });
      isValid = false;
    }
    if (!timeSchedule.trim()) {
      wx.showToast({
        title: '请输入时间安排',
        icon: 'none',
      });
      isValid = false;
    }
    if (!contactInfo.trim()) {
      wx.showToast({
        title: '请输入联系方式',
        icon: 'none',
      });
      isValid = false;
    }
    if (!memberRequirements.trim()) {
      wx.showToast({
        title: '请输入成员要求',
        icon: 'none',
      });
      isValid = false;
    }
    if (!projectIntroduction.trim()) {
      wx.showToast({
        title: '请输入项目简介',
        icon: 'none',
      });
      isValid = false;
    }
    return isValid;
  },
});
