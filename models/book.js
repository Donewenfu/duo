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
    //请求二
    getHotBooktwo(){
        return this.request({
            url:'book/hot_list'
        })
    }
    //请求三
    getHotBookthree(){
        return this.request({
            url:'book/hot_list'
        })
    }
}

export {books}