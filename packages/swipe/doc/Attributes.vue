
<template>
  <info-table :options="options"></info-table>
</template>

<script setup>
import { reactive } from "vue";
import infoTable from '@/components/table.vue'

const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "platform", title: "平台", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "--",
        type: "string",
        platform: '--',
        red: "--",
        sel: "--",
        def: "'--'",
      }
    ],
  },
});

const {options} = state


</script>

<style lang="scss" scoped>
</style>
