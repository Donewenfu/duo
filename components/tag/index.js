// components/tag/index.js
Component({
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    content:String
  },
  externalClasses:['tagclass'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clicktag(){
      //自定义标签点击事件
      this.triggerEvent('clicktag',{
        tagtext:this.properties.content,
        nums:this.properties.nums
      })
    }
  }
})
