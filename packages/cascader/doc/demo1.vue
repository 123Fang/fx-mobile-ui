<!-- html -->
<template>
  <icsm-field
    v-model="fieldValue"
    is-link
    readonly
    label="地区"
    placeholder="请选择所在地区"
    @click="show = true"
  />
  <icsm-popup v-model:show="show" round position="bottom">
    <icsm-cascader
      v-model="cascaderValue"
      title="请选择所在地区"
      :options="options"
      @close="show = false"
      @finish="onFinish"
    />
  </icsm-popup>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from 'vue'

const show = ref(false)
const fieldValue = ref('')
const cascaderValue = ref('')
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }]
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }]
  }
]
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show.value = false
  fieldValue.value = selectedOptions.map(option => option.text).join('/')
}

// init
</script>
