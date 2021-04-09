// app.js
App({
  onLaunch() {
    //判断是否为全面屏
    this.checkFullSucreen()
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    isFullSucreen:false
  },
  /**
     * 判断设备是否为全面屏
     */
    checkFullSucreen: function () {
      const self = this
      wx.getSystemInfo({
          success: function (res) {
              // 根据 屏幕高度 进行判断
              if (res.screenHeight - res.windowHeight - res.statusBarHeight - 32 > 72) {
                  self.globalData.isFullSucreen = true
              }
              // 根据手机型号匹配
              if (res.model.search('iPhone X') != -1) {
                  self.globalData.isFullSucreen = true
              }
          }
      })
  },
})
