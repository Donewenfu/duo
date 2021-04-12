const pagination = Behavior({
  properties:{
   
  },
  data:{
     //图书的数据
     searchBookData:[],
     //开始记录数
     start:0,
     //记录条数
      count:20,
      //数据的总条数
      total:0
  },
  methods:{
    setLoadmore(bookData){
      if(bookData.length<=0){
        this.setData({
          searchBookData:[]
        })
        return
      }
       //改变开始开始记录数
       this.data.start+=this.data.count
       this.setData({
        searchBookData:this.data.searchBookData.concat(bookData)
       })
    },
    //判断数据是否已经加载完毕
    loadOver(){
      if(this.data.searchBookData.length>=this.data.total){
        return false
      }else{
        return true
      }
    }
  },
  //小程序组件生命周期
  lifetimes:{
   
  }
})

export {pagination}