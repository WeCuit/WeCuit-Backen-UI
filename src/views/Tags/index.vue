<template>
  <div>
    <el-card class="card">
      <h2>学院管理</h2>

      <el-col>
        <el-button type="primary" icon="el-icon-plus" size="small" @click="onCreate">新增</el-button>
        <el-button type="success" icon="el-icon-refresh" size="small" @click="onRefresh">刷新</el-button>
      </el-col>
      <el-table :data="list" width="100%">
        <el-table-column prop="name" label="学院名称" width="180"></el-table-column>
        <el-table-column prop="mark" label="学院标记"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-tooltip class="item" effect="dark" content="修改" placement="bottom">
              <el-button
                circle
                plain
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="onEdit(scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="bottom">
              <el-button
                circle
                plain
                type="danger"
                icon="el-icon-minus"
                size="mini"
                @click="onDelete(scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog v-model="edit_display" title="编辑文章标签">
        <TagEdit :college-info="postCollege" @success="onEditSuccess"></TagEdit>
      </el-dialog>
      <el-dialog v-model="add_display" title="添加文章标签">
        <TagNew @success="onCreateSuccess"></TagNew>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watchEffect } from '@vue/runtime-core'
import { ElMessage } from 'element-plus/lib/components/message'
import TagEdit from './tagEdit.vue'
import TagNew from './tagNew.vue'
import { getCollegeList, deleteCollegeItem } from './api'

export default defineComponent({
  components: {
    TagEdit,
    TagNew
  },
  setup() {
    const state = reactive({
      list: [],
      add_display: false,
      edit_display: false,
      postCollege: {}
    })
    const loadCollegeList = () => {
      getCollegeList().then((res) => {
        state.list = res.data.list
      })
    }

    // 新增
    const onCreate = () => {
      state.add_display = true
    }
    const onCreateSuccess = () => {
      console.log('onCreateSuccess')
      state.add_display = false
      loadCollegeList()
    }

    // 编辑
    const onEdit = (row) => {
      state.edit_display = true
      state.postCollege = row
    }
    const onEditSuccess = () => {
      console.log('onEditSuccess')
      state.edit_display = false
      state.postCollege = {}
      loadCollegeList()
    }

    // 删除
    const onDelete = (row) => {
      deleteCollegeItem(row.id).then((res) => {
        if (res.data.result) {
          loadCollegeList()
          ElMessage({
            type: 'success',
            message: '删除成功'
          })
        }
      })
    }

    // 刷新
    const onRefresh = () => {
      loadCollegeList()
    }

    watchEffect(() => {
      console.log('effect')
      loadCollegeList()
    })
    return {
      ...toRefs(state),
      onCreate,
      onCreateSuccess,
      onEditSuccess,
      onEdit,
      onDelete,
      onRefresh
    }
  }
})
</script>

<style scoped>
.card {
  margin: 1rem;
}
</style>