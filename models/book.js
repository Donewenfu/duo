import {http} from '../utils/http-p';

class books extends http{
    constructor(){
        super()
    }
    //请求获取热门书籍
    getHotBook(){
        return this.request({
            url:'book/hot_list'
        })
    }
    //请求数据详情
    getBookdetai(id){
        return this.request({
            url:`book/${id}/detail`
        })
    }
    //获取短评数据
    getComment(id){
        return this.request({
            url:`book/${id}/short_comment`
        })
    }
    //获取点赞信息
    getLikeinfo(id){
        return this.request({
            url:`book/${id}/favor`
        })
    }
    //新增短评
    addComment(id,con){
        return this.request({
            url:`book/add/short_comment`,
            data:{
                book_id:id,
                content:con 
            },
            method:"POST",
            ishowLoding:false
        })
    }
    //获取热搜关键字
    getHotkey(){
        return this.request({
            url:'book/hot_keyword',
            ishowLoding:false
        })
    }
}

export {books}