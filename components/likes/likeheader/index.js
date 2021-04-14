// components/likes/likeheader/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    booknum:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    userinfo:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getuser(){
      var that = this;
      wx.getUserProfile({
        lang:'zh_CN',
        desc:'获取你的基础信息',
        success:function(res){
          console.log(res)
          that.setData({
            userinfo:res.userInfo
          })
        }
      })
    }
  },
  lifetimes:{
    attached(){
      wx.getSetting({
        success:function(res){
          console.log(res)
        }
      })
    }
  }
})
