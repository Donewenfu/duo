// components/numberTime/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //期号
    indexNum:{
      type:Number,
      observer(newVal,oldVal){
         let newIndex = newVal<10?'0'+newVal:newVal
         this.setData({
          _index:newIndex
         })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    //月份中文数组
    monthZh:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    //月份
    month:'',
    //年份
    year:null,
    //处理过的序号
    _index:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{
    attached(){
      //获取时间对象
      let tiemData = new Date();
      //获取年份
      let year = tiemData.getFullYear();
      console.log(year)
      //获取月份
      let month = tiemData.getMonth();
      //更新视图层
      this.setData({
        year,
        month:this.data.monthZh[month]
      })
    }
  }
})
