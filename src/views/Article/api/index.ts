import request from '@/utils/axios'

// 获取文章列表
export const getArticleList = ()=>request.get('/article/list')
// 获取文章详情
export const getArticleDetail = (id: any)=>request.get(`/article/detail/${  id}`)
// 发布新文章
export const postArticle = (data: any)=>request.post(`/article/publish`, data)
// 编辑文章
export const putArticle = (data: any)=>request.put(`/article/edit/${data.id}`, data)
// 编辑文章
export const deleteArticle = (id: any)=>request.delete(`/article/delete/${id}`)