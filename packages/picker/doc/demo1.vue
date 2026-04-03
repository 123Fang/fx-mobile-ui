<!-- html -->
<template>
  <icsm-picker
  title="标题"
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
/>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";

 const columns = [
      { text: '杭州', value: 'Hangzhou' },
      { text: '宁波', value: 'Ningbo' },
      { text: '温州', value: 'Wenzhou' },
      { text: '绍兴', value: 'Shaoxing' },
      { text: '湖州', value: 'Huzhou' },
    ];
    const onConfirm = ({ selectedValues }) => {
      // showToast(`当前值: ${selectedValues.join(',')}`);
    };
    const onChange = ({ selectedValues }) => {
      // showToast(`当前值: ${selectedValues.join(',')}`);
    };
    const onCancel = () => {

    };


</script>
