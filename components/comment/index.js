// components/comment/index.js
Component({
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //热门短评
    hotComment:Array,
    //是否显示
    show:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickCancel(){
      this.triggerEvent("cancel")
    },
    clickComfirm(){
      this.triggerEvent("comfirm")
    },
    clicktagevent(e){
      this.triggerEvent('clicktag',{
        tagClick:e.detail.tagtext,
        nums:e.detail.nums
      })
    },
    // 输入确认事件
    comfirmcontent(e){
      //获取用户输入的信息
      let userinput = e.detail.value;
      //自定义事件
      this.triggerEvent('comfirmcontent',{
        content:userinput
      })
    },
    //输入事件
    commentinputevent(e){
      this.triggerEvent('inputEvent',{
        inputval:e.detail.value
      })
    }
  }
})
