import {http} from '../utils/http'

class like extends http {
  clickLike(type,art_id,clickType,callback){
    let clickTypes = clickType=='like'?'like':'like/cancel'
    this.request({
      url:clickTypes,
      method:'POST',
      data:{
        art_id,
        type
      },
      success(res){
        callback && callback(res)
      }
    })
  }
  // 获取点赞信息
  getLikeinfo(types,ids,callback){
    this.request({
      url:`classic/${types}/${ids}/favor`,
      success(res){
        callback(res)
      }
    })
  }
}

export {like}