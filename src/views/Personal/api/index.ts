import request2 from '@/utils/axios';
import request from '@/utils/request';

// const personalApi={
//  basicInfo:'/api/setting/basicInfo',
//  personalTags:'/api/personal/tags'
// }

// 获取用户信息
export const getUserInfo = ()=>request2.get("user/info")
// 修改用户信息
export const putUserInfo = (data: any)=>request2.put("user/info", data)

class Service{
  
  /**
     * @description Get 获取tags
    */
   static getPersonTags() {
      return request({
        url: '/api/personal/tags',
        method: 'get',
        json: true,
      }).then((res) => {
        if (res.status === 0) {
        return Promise.resolve(res)
        }
        return Promise.reject(res)
      })
    }
  
  
  }
  export default Service
  
  

