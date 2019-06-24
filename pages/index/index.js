
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    imgUrls: [
      "../../images/index/swiper_1.jpg",

      "../../images/index/swiper_2.jpg",

      "../../images/index/swiper_3.jpg",
    ],
    jpitems: ['', '', '', ''],
    indexItems: [
      {
        typeId: 0,
        name: '景点',
        url: '../../pages/scene/scene',
        imageurl: '../../images/user/order_1_icon.png',
      },
      {
        typeId: 1,
        name: '酒店',
        url: 'bill',
        imageurl: '../../images/user/order_2_icon.png',
      },
      {
        typeId: 2,
        name: '导航',
        url: '../../pages/maplist/maplist',
        imageurl: '../../images/user/order_3_icon.png'
      },
      {
        typeId: 3,
        name: '租车',
        url: '../../pages/rentcar/rentcar',
        imageurl: '../../images/user/order_4_icon.png'
      },
      {
        typeId: 4,
        name: '门票',
        url: '../../pages/tickets/tickets',
        imageurl: '../../images/user/order_1_icon.png',
      },
      {
        typeId: 5,
        name: '特产',
        url: 'bill',
        imageurl: '../../images/user/order_2_icon.png',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})