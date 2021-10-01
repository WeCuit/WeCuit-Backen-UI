import request from '@/utils/axios'

export const getQRCode = (type: string) => request.get(`/auth/mini/qrcode/${  type}`)

export const getTokenCheck = (token: string) => request.get(`/auth/mini/login/check`, {
    params: {
        token
    }
})

export const getMiniLogin = (token: string)=>request.get('/auth/mini/login', {
    params: {token}
})
