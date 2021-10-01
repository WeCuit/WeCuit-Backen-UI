<template>
  <div>
    <el-row>
      <el-col :span="12">
        <i
          class="ic ic-weixindenglu login-icon"
          :style="{color:bind.wx?'#1db308':'gray'}"
          @click="scanQRCode('WX')"
        ></i>
      </el-col>
      <el-col :span="12">
        <i
          class="ic ic-qqdenglu login-icon"
          :style="{color:bind.qq?'#1277e3':'gray'}"
          @click="scanQRCode('QQ')"
        ></i>
      </el-col>
    </el-row>
    <el-dialog v-model="qrScanVisible" title="请扫描小程序码">
      <template #default>
        <div v-if="qrcode && qrcode.length > 0">
          <img v-if="type==='WX'" height="300" width="300" :src="qrcode" />
          <qrcode-vue v-else :size="300" :value="qrcode"></qrcode-vue>
        </div>
        <h2>{{message}}</h2>
      </template>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="refreshQRCodeAction">刷新</el-button>
          <el-button @click="cancelScan">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue-demi'
import qrcodeVue from 'qrcode.vue'
import { getQRCode, getTokenCheck, getBindMini } from './api'

export default defineComponent({
  components: {
    qrcodeVue
  },
  setup() {
    const state = reactive({
      type: '', // QQ|WX
      bind: {
        wx: false,
        qq: false
      },
      qrcode: '', // 小程序码
      token: '',
      qrScanVisible: false,
      checkTokenIntval: -1,
      message: ''
    })
    const refreshQRCode = (type: string) =>
      getQRCode(type).then((res) => {
        const { data } = res
        state.qrcode = data.img || data.url
        state.token = data.token
        state.message = '请扫描小程序码'
        return Promise.resolve()
      })
    const cancelScan = () => {
      state.qrScanVisible = false
      state.qrcode = ''
      clearInterval(state.checkTokenIntval)
    }

    const doBindAction = () => {
      getBindMini(state.token).then((res) => {
        const { data } = res
        console.log(data)
        state.message = '绑定成功！'
      })
    }

    const checkToken = (token: string) => {
      console.log(encodeURIComponent(token))
      getTokenCheck(token).then((res) => {
        const { data } = res
        /**
         * data.result
         * -2 token不存在
         * -1 token过期
         *  0 等待授权
         *  1 拒绝授权
         *  2 授权成功
         */
        console.log(data)
        if (data.result !== 0 && data.result !== 3) clearInterval(state.checkTokenIntval)
        switch (data.result) {
          case -2:
          case -1:
            refreshQRCode(state.type).then(() => {
              state.checkTokenIntval = setInterval(checkToken, 5000, state.token)
            })
            break
          case 0:
            console.log('等待授权')
            break
          case 1:
            state.token = ''
            state.message = '授权被拒绝'
            break
          case 2:
            state.message = '授权成功！正在绑定...'
            doBindAction()
            break
          case 3:
            state.message = '已扫描，请进行授权操作'
            break

          default:
            break
        }
      })
    }
    const scanQRCode = (type: string) => {
      state.qrScanVisible = true
      state.type = type
      state.message = '正在获取小程序码'
      refreshQRCode(type).then(() => {
        state.checkTokenIntval = setInterval(checkToken, 5000, state.token)
      })
    }
    const refreshQRCodeAction = () => {
      state.message = '正在刷新小程序码'
      clearInterval(state.checkTokenIntval)
      refreshQRCode(state.type).then(() => {
        state.checkTokenIntval = setInterval(checkToken, 5000, state.token)
      })
    }
    return {
      ...toRefs(state),
      scanQRCode,
      cancelScan,
      refreshQRCodeAction
    }
  }
})
</script>

<style>
.login-icon {
  cursor: pointer;
  font-size: xxx-large;
}
</style>