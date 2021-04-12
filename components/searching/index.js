// components/searching/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 热门搜索数据
    hotDatas:Array,
    //历史搜索数据
    historyData:Array
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
    clicktag(e){
      this.triggerEvent('clicktags',{
        tag:e.detail.tags
      })
    } 
  }
})
