// page/component/orders/orders.js
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    orders: [{
        id: 1,
        title: '黑山门票',
        image: '../../images/index/swiper_1.jpg',
        num: 4,
        price: 100
      },
      {
        id: 2,
        title: '车票',
        image: '../../images/index/swiper_3.jpg',
        num: 1,
        price: 30,
      }
    ]
  },

  onReady() {
    this.getTotalPrice();
  },

  onShow: function() {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text: 'center',
      complete() {
        wx.switchTab({
          url: '/pages/user/user'
        })
      }
    })
  }
})