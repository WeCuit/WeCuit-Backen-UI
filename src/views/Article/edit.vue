<template>
  <div>
    <el-card>
      <el-form v-model="form">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <RichEditor :model-value="form.content" @update:modelValue="handleUpdateValue"></RichEditor>
        </el-form-item>
        <el-select v-model="form.type" placeholder="文章类型">
          <el-option
            v-for="item in types"
            :key="item.value"
            :value="item.value"
            :label="item.value"
          ></el-option>
        </el-select>
        <el-form-item>
          <el-button type="primary" @click="updateArticle">提交</el-button>
          <el-button>返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import RichEditor from '@/components/Editor/richEditor.vue'
import { defineComponent, onMounted, reactive, toRefs } from '@vue/runtime-core'
import { ElMessage } from 'element-plus/lib/components/message'
import { useRoute } from 'vue-router'
import { putArticle, getArticleDetail } from './api'

export default defineComponent({
  components: {
    RichEditor
  },
  setup() {
    const route = useRoute()
    const state = reactive({
      form: {
        id: null,
        title: '',
        content: 'init text',
        postContent: '',
        type: 'html'
      },
      types: [
        {
          value: 'html'
        },
        {
          value: 'link'
        }
      ]
    })
    onMounted(() => {
      console.log('query', route.query)
      const { id } = route.query
      console.log(id)
      getArticleDetail(id).then((res) => {
        const { data } = res
        console.log(data)
        state.form = data
      })
    })
    // 处理富文本编辑器返回的数据
    const handleUpdateValue = (html) => {
      console.log('update content')
      state.form.postContent = html
    }

    // 更新文章
    const updateArticle = () => {
      const postdata = {
        id: state.form.id,
        title: state.form.title,
        content: state.form.postContent,
        type: state.form.type
      }
      putArticle(postdata).then((res) => {
        const { data } = res
        console.log(data)
        if (data.result === true) {
          ElMessage({
            message: '更新成功',
            type: 'success'
          })
        } else {
          ElMessage({
            message: '更新失败',
            type: 'error'
          })
        }
      })
    }
    return {
      ...toRefs(state),
      updateArticle,
      handleUpdateValue
    }
  }
})
</script>

<style>
</style>