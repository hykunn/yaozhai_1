//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    userInfo: null,
  },
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setData({
        "userInfo.nickName": app.globalData.userInfo.nickName,
        "userInfo.avatarUrl": app.globalData.userInfo.avatarUrl
      })
    }
  },
  newContent: function () {
    wx.navigateTo({
      url: "/pages/new/new"
    })
  }
})