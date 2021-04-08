// components/bookitem/index.js
Component({
  externalClasses:['bookitem'],
  /**
   * 组件的属性列表
   */
  properties: {
    bookDetai:{
      type:Object,
      value:{}
    }
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
    //去书籍的详情页面
    gotoDetail(){
      //获取书籍的id
      let bookid    = this.properties.bookDetai.id;
      //获取数据的title
      let bookTitle = this.properties.bookDetai.title;
      wx.navigateTo({
        url: '/pages/bookdetail/bookdetail?id='+bookid+'&title='+bookTitle,
      })
    }
  }
})
