import request from '@/utils/axios';

// 获取媒体文件列表
export const getMediaList = ()=>request.get('/media/list')
// 删除媒体文件
export const deleteMediaItem = (id:any)=>request.delete('/media/delete',{
    params:{id}
})