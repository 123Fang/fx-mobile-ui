<template>
  <van-picker-group
    title="预约日期"
    :tabs="['选择日期', '选择时间']"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <van-date-picker v-model="currentDate" :min-date="minDate" :max-date="maxDate" />
    <van-time-picker v-model="currentTime" />
  </van-picker-group>
 
</template>

<script lang="ts">
export default {
  name: 'icsm-picker-group',
  inheritAttrs: false
}
</script>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { showToast } from 'vant';
import 'vant/es/toast/style';

const currentDate = ref(['2022', '06', '01'])
const currentTime = ref(['12', '00'])

const onConfirm = () => {
  showToast(`${currentDate.value.join('/')} ${currentTime.value.join(':')}`)
}

const onCancel = () => {
  showToast('cancel')
}


const minDate =  new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
</script>

<style lang="less" scoped>
</style>