Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:null,
  },
  input: function (e) {
    let that = this
    //console.log(e.detail.value)
   // let content = e.detail.value
    that.setData({
      content: e.detail.value
    })
    console.log(that.data.content);
  },
  saveClick: function(event){
    let that = this;
    //  console.log(event.detail.value);
    // var content = event.detail.value;
    // console.log(content)
    if(that.data.content!== '') {
      wx.setStorage({
        key:"diaryContent",
        data:that.data.content
      });
    }
   
    // wx.setStorage({
    //   key:'images',
    //   data:that.data.photos
    // })
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000,
      success:function(){

      }
    });
    setTimeout(function(){
      wx.hideLoading();
      wx.navigateBack();
    },2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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