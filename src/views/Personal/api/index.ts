import request2 from '@/utils/axios';

// const personalApi={
//  basicInfo:'/api/setting/basicInfo',
//  personalTags:'/api/personal/tags'
// }

// 获取用户信息
export const getUserInfo = ()=>request2.get("user/admin/info")
// 修改用户信息
export const putUserInfo = (data: any)=>request2.put("user/admin/info", data)



