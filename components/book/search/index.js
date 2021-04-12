import {search} from '../../../models/search';
import {pagination} from '../../behaviors/pagination'
//实例化对象
let searchModel = new search()
Component({
  behaviors:[pagination],
  //添加全局样式
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //热门搜索数据
    hotData:Array,
    //接收父组件传值 用户滚动加载
    randomnum:{
      type:String,
      value:'',
      observer:function(){
        this.bottomScoll()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //历史搜索记录
    historyArr:[],
    //搜索成功显示图书界面
    showbook:false,
    //输入框文字
    inputval:'',
    //loding加载
    showLoading:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //取消搜索显示历史搜索
    canceltag(){
      //清空之前搜索的数据
      this.setData({
        showbook:false,
        searchBookData:[],
        start:0
      })
      this.getLocalhistory()
    },
    //触底滚动事件
    bottomScoll(){
      if(this.loadOver()){
        this.searchDatas(this.data.inputval)
      }
      
    },
    //关闭搜索
    closesearch(){
      this.setData({
        showbook:false
      })
      this.triggerEvent('closesearchbox')
    },
    //搜索
    async searchData(e){
      //获取自定义事件传过来的关键字
      let keyword= e.detail.val;
      this.setData({
        showLoading:true,
        searchBookData:[],
        start:0
      })
      this.searchDatas(keyword)
      
    },
    //点击 历史或者热门tag
    tagclick(e){
      console.log('我点击了')
      //获取点击的参数
      let keys = e.detail.tag;
      //请求
      this.searchDatas(keys)
    },
    //搜索请求
    async searchDatas(keys){
      this.setData({
        inputval:keys
      })
      //请求参数
      let params = {
        start:this.data.start,
        count:this.data.count,
        summary:0,
        q:keys
      }
      this.setData({
        showbook:true,
      })
      try {
        //执行搜索请求
        let searchData = await searchModel.getBookSearch(params);
        this.setData({
          total:searchData.total,
          showLoading:false
        })
        this.setLoadmore(searchData.books)
        //搜索的历史存储起来
        searchModel.setUserhistory(keys)
      } catch {
        
      }
    },
    //获取本地数据
    getLocalhistory(){
      let historydata = searchModel.getUserhistory();
      this.setData({
        historyArr:historydata.reverse()
      })
    }
  },
  // 小程序生命周期
  lifetimes:{
    attached(){
      this.getLocalhistory()
    }
  }
})
