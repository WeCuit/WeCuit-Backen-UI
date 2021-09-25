<template>
  <div>
    <h2>文件列表</h2>
    <el-row>
      <el-col v-for="item in list" :key="item.id" :span="8" class="item">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="item.path" class="image" />
          <el-row justify="center" align="middle">
            123456&nbsp;
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteMedia(item.id)"></el-button>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <!-- TODO: 分页 -->
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
import { ElMessage } from 'element-plus/lib/components/message'
import { getMediaList, deleteMediaItem } from './api'

export default defineComponent({
  data() {
    return {
      list: []
    }
  },
  mounted() {
    console.log('mounted media/list.vue')
    this.loadMediaList()
  },
  activated() {
    console.log('activated media/list.vue')
    this.loadMediaList()
  },
  methods: {
    loadMediaList() {
      getMediaList().then((res) => {
        console.log('media list', res)
        this.list = res.data.list
      })
    },
    deleteMedia(id) {
      deleteMediaItem(id).then((res) => {
        const { data } = res
        if (data.result) {
          ElMessage({
            message: '删除成功',
            type: 'success'
          })
          this.loadMediaList()
        } else {
          ElMessage({
            message: '删除失败(文件可能不存在)',
            type: 'error'
          })
        }
      })
    }
  }
})
</script>

<style>
.item {
  margin: 1rem;
}
.image {
  display: block;
  width: 100%;
}
</style>