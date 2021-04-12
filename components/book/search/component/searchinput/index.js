// components/book/search/component/searchinput/index.js
Component({
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    val:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    //输入的内容
    val:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    canceltext(){
      this.setData({
        val:''
      })
      //取消搜索显示历史和热门
      this.triggerEvent('cancelback')
    },
    
    //取消文字
    coloetext(){
      this.setData({
        val:''
      })
      this.triggerEvent('close')
    },
    //监听输入事件
    searchinput(e){
      let val = e.detail.value;
      this.properties.val = val
    },
    //搜索
    searchcomfirm(e){
      let searchkey = e.detail.value;
      //判断用户是否输入内容
      if(!searchkey.trim()||!searchkey){
        wx.showToast({
          title: '搜索有误请重新输入！',
          icon:'none'
        })
      }else{
        this.triggerEvent('searchinput',{
          val:searchkey
        })
      }
    }
  }
})
