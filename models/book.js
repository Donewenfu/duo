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
}

export {books}