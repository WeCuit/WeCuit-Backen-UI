import request from '@/utils/request';
import request2 from '@/utils/axios';

const permissionApi={
  queryAuthedRoutes: '/auth/user/routes',
  queryPermissions:'/api/auth/permission/permissions'
}



class Service{
  /**
   * @description GET 查询授权菜单权限
  */
  static getAuthPermission() {
    return request2.get(permissionApi.queryAuthedRoutes)
  }

/**
   * @description POST 查询授权菜单权限
  */
 static postPermissions(data: any) {
  return request({
    url: permissionApi.queryPermissions,
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


