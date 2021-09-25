import request from '@/utils/axios'

export const getTagList = ()=>request.get("/settings/college/list")
export const postTagItem = (data: any)=>request.post("/settings/college/add", data)
export const patchTagItem = (data: any)=>request.patch("/settings/college/edit", data)
export const deleteTagItem = (id: any)=>request.delete(`/settings/college/delete/${  id}`)