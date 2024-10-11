Page({
  data: {
    tabBar: {
      list: [
        {
          pagePath: 'pages/homePage/homePage',
          text: '主页'
        },
        {
          pagePath: 'pages/messagePage/messagePage',
          text: '消息'
        },
        {
          pagePath: 'pages/myPage/myPage',
          text: '我的'
        }
      ],
      activeIndex: 0
    }
  },
  onLoad() {
    // 获取当前页面路径
    const pages = getCurrentPages();
    const currentPagePath = pages[pages.length - 1].route;
    // 根据页面路径设置激活的菜单索引
    this.data.tabBar.list.forEach((item, index) => {
      if (item.pagePath === currentPagePath) {
        this.setData({
          'tabBar.activeIndex': index
        });
      }
    });
  },
  switchTab(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({
      'tabBar.activeIndex': index
    });
    wx.switchTab({
      url: this.data.tabBar.list[index].pagePath
    });
  }
});