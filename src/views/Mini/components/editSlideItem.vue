<template>
  <div>
    <el-form :model="item" label-width="80px">
      <el-form-item label="文本">
        <el-input v-model="item.text"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <img :src="item.path" class="slide-img" />
        <ImageSelector @handle-img-data="handleSelectedImgData($event)" />
      </el-form-item>
    </el-form>

    <div class="dialog-footer">
      <!-- <el-button @click="outerVisible = false">取 消</el-button> -->
      <el-button type="primary" @click="add">{{actionType === 'edit'?'修 改':'添 加'}}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from '@vue/runtime-core'
import ImageSelector from './selectImage.vue'

export default defineComponent({
  components: { ImageSelector },
  props: {
    actionType: {
      type: String,
      default: '',
      required: false
    },
    editData: {
      type: Object,
      default: () => ({
        path: '',
        text: ''
      })
    }
  },
  emits: ['handleSlideItem'],
  setup(props) {
    const state = reactive({
      outerVisible: false,
      item: {
        path: '',
        text: ''
      } as {
        [k: string]: string
      }
    })
    const { editData } = toRefs(props)

    onMounted(() => {
      state.item = editData.value
    })

    watch(editData, (newValue) => {
      state.item = newValue
    })
    return {
      ...toRefs(state)
    }
  },
  methods: {
    handleSelectedImgData(e: any) {
      this.item.path = e.path
    },
    add() {
      this.outerVisible = false
      this.$emit('handleSlideItem', this.item)
    }
  }
})
</script>

<style scoped>
.slide-img {
  height: 100px;
}
</style>