import request from '@/utils/axios'

// 获取小程序首页配置
export const getMiniIndexConfig = ()=>request.get("/mini/index-slide")
// 更新小程序首页配置
export const updateMiniIndexConfig = (data: any)=>request.patch("/mini/index-slide", data)

// 获取小程序其它配置
export const getMiniOtherConfig = ()=>request.get("/mini/config/other")
// 提交小程序配置
export const putMiniOtherConfig = (data: any)=>request.put("/mini/config/other", data)