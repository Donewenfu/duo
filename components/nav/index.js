// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //标题
    title:{
      type:String,
      value:''
    },
    //左边是否禁用
    isLeft:{
      type:Boolean,
      value:false,
      observer(){

      }
    },
    //右边是否禁用
    isRight:{
      type:Boolean,
      value:false,
      observer(){

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //左边禁用
    leftdis:'./image/triangle.dis@left.png',
    //左边启用
    lefton:'./image/triangle@left.png',
    //右边禁用
    rightdis:'./image/triangle.dis@right.png',
    //右边启用
    righton:'./image/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击左边
    leftclick(){
      if(this.properties.isLeft){
        this.triggerEvent('left',{

        })
      }
      //组件自定义事件
      
    },
    //点击右边
    rightclick(){
      if(this.properties.isRight){
        this.triggerEvent('right',{

        })      
      }
      
    }
  }
})
