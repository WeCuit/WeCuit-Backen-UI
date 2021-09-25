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
          <el-button type="primary" @click="publishArticle">提交</el-button>
          <el-button>返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import RichEditor from '@/components/Editor/richEditor.vue'
import { defineComponent, reactive, toRefs } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { postArticle } from './api'

export default defineComponent({
  components: {
    RichEditor
  },
  setup() {
    const state = reactive({
      form: {
        title: '',
        content: '',
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
    const useRouter1 = useRouter()
    const handleUpdateValue = (html) => {
      state.form.postContent = html
    }
    const publishArticle = () => {
      const postdata = {
        id: state.form.id,
        title: state.form.title,
        content: state.form.postContent,
        type: state.form.type
      }
      postArticle(postdata).then((res) => {
        const { data } = res
        // 跳至编辑页面
        useRouter1.push(`/article/edit?id=${data.id}`)
      })
    }
    return {
      ...toRefs(state),
      publishArticle,
      handleUpdateValue
    }
  }
})
</script>

<style>
</style>