<template>
  <div>
    <el-card>
      <h2>小程序其它配置</h2>
      <br />
      <br />
      <br />
      <el-form :model="form" label-position="right" label-width="100px" class="demo-ruleForm">
        <!-- 关于链接 -->
        <el-form-item label="关于链接" prop="mini_other_aboutlink">
          <el-input v-model="form.mini_other_aboutlink"></el-input>
        </el-form-item>
        <!-- 群号 -->
        <el-form-item label="群号" prop="mini_other_group">
          <el-input v-model="form.mini_other_group"></el-input>
        </el-form-item>
        <!-- 开源地址 -->
        <el-form-item label="开源地址" prop="mini_other_opensource">
          <el-input v-model="form.mini_other_opensource"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from '@vue/runtime-core'
import { ElMessage } from 'element-plus/lib/components/message'
import { getMiniOtherConfig, putMiniOtherConfig } from './api'

interface configEle {
  name: string
  value: string
}
export default defineComponent({
  setup() {
    const state = reactive({
      tempForm: {} as {
        [k: string]: any
      },
      form: {
        mini_other_aboutlink: '',
        mini_other_group: '',
        mini_other_opensource: ''
      } as {
        [k: string]: string
      }
    })

    const submitForm = () => {
      const configData: any[] = []
      Object.getOwnPropertyNames(state.form).forEach((key) => {
        configData.push({
          id: state.tempForm[key].id,
          name: key,
          value: state.form[key]
        })
      })

      putMiniOtherConfig(configData).then((res) => {
        const { data } = res
        console.log(data)
        if (data.result === true) {
          ElMessage({
            type: 'success',
            message: '保存成功'
          })
        } else {
          ElMessage({
            type: 'error',
            message: '保存失败'
          })
        }
      })
    }

    const loadConfig = () => {
      getMiniOtherConfig().then((res) => {
        const { data } = res
        console.log(data)
        data.forEach((item: configEle) => {
          state.form[item.name] = item.value
          state.tempForm[item.name] = item
        })
      })
    }
    onMounted(() => {
      loadConfig()
    })
    return {
      ...toRefs(state),
      submitForm
    }
  }
})
</script>

<style>
</style>