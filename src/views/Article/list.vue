<template>
  <div>
    <el-card>
      <h2>文章列表</h2>
      <el-table :data="list">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="created" label="发布时间"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <router-link :to="'/article/edit?id=' + scope.row.id">
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </router-link>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteArticleById(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- TODO: 分页 -->
    </el-card>
  </div>
</template>

<script>
import { defineComponent, onActivated, reactive, toRefs } from '@vue/runtime-core'
import { ElMessage } from 'element-plus/lib/components/message'
import { getArticleList, deleteArticle } from './api'

export default defineComponent({
  setup() {
    const state = reactive({
      list: [],
      currentPage: 1,
      totalPages: 1,
      pageLimit: 10
    })

    const loadList = (page = 1, limit = 10) => {
      getArticleList(page, limit).then((res) => {
        const { data } = res
        state.list = data.rows
        state.currentPage = page
        state.totalPages = data.pages
      })
    }
    const deleteArticleById = (id) => {
      deleteArticle(id).then((res) => {
        const { data } = res
        if (data.result) {
          ElMessage({
            message: '删除成功',
            type: 'success'
          })
          loadList(state.currentPage, state.pageLimit)
        }
      })
    }
    onActivated(() => {
      loadList()
    })

    return {
      ...toRefs(state),
      deleteArticleById
    }
  }
})
</script>

<style>
</style>