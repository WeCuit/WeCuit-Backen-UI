import request from '@/utils/axios'

export const doLogout = ()=>request.get('/user/logout')

export default {doLogout}