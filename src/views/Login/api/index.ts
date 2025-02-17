import request from '@/utils/request';
import request2 from '@/utils/axios'

const loginApi={
  userLogin: '/user/login',
  userRegister:'/user/register',
  sendCaptcha:'/api/auth/email/sendCaptcha',
  forgetPassword:'/api/auth/email/forgot-password',
  resetPassword:`/api/auth/user/reset-password`,
  userInfo:'/api/auth/user/userInfo'
}

class Service{
  /**
   * @description POST 用户登录接口
  */
  static postLogin(data: any) {
    return request2.post(loginApi.userLogin, data)
  }

  /**
   * @descript POST  用户注册
  */
  static postRegister(data: any) {
    return request({
      url: loginApi.userRegister,
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 0) {
        return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

 /**
   * @description   POST 发送验证码 /auth/email/sendCaptcha
  */
   static postCaptcha(data: any) {
    return request({
      url: loginApi.sendCaptcha,
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 0) {
      return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

  /**
   * @description POST 忘记密码接口
  */
   static postForgetPwd(data: any) {
    return request({
      url: loginApi.forgetPassword,
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 0) {
      return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

  /**
   * @description /auth/user/reset-password/{token}
  */
   static postResetPwd(data: any) {
    return request({
      url: loginApi.resetPassword,
      method: 'POST',
      json: true,
      data
    }).then((res) => {
      if (res.status === 0) {
      return Promise.resolve(res)
      }
      return Promise.reject(res)
    })
  }

    /**
     * @description POST 查询用户信息
    */

     static postAuthUserInfo(data: any) {
      return request({
        url: loginApi.userInfo,
        method: 'POST',
        json: true,
        data
      }).then((res) => {
        if (res.status === 0) {
        return Promise.resolve(res)
        }
        return Promise.reject(res)
      })
    }

}
export default Service


