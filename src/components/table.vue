<template>
    <div class="fx-table-container">
      <!-- 调试信息：显示字段数和数据数（上线前可删除） -->
      <div class="debug-tag">
        字段数：{{ options.fileds?.length || 0 }} | 数据数：{{ options.datas?.length || 0 }}
      </div>
  
      <table class="fx-table" :class="{ 'has-border': options.border }">
        <!-- 表头：循环 fields 生成 -->
        <thead>
          <tr>
            <th
              v-for="(col, index) in options.fileds"
              :key="index"
              :align="col.align || 'left'"
              :style="{ width: col.width }"
              class="table-header-cell"
            >
              {{ col.title }}
            </th>
          </tr>
        </thead>
  
        <!-- 表体：循环 datas 生成行，再循环 fields 生成列 -->
        <tbody>
          <tr v-for="(row, rowIndex) in options.datas" :key="rowIndex">
            <td
              v-for="(col, colIndex) in options.fileds"
              :key="colIndex"
              :align="col.align || 'left'"
              class="table-data-cell"
            >
              <!-- 显示当前单元格的值（确保 row 有 col.field 对应的属性） -->
              {{ row[col.field] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  // 定义 props：接收父组件传递的 options
  const props = defineProps({
    options: {
      type: Object,
      required: true,
      // 默认值：确保 fields 和 datas 是数组（即使父组件没传）
      default: () => ({
        fileds: [], // 列配置：必须有 field（对应 datas 的属性名）、title、align、width（可选）
        datas: [],   // 表体数据：必须包含 fields 中 field 对应的属性
        border: true, // 是否显示边框（可选）
      }),
    },
  });
  </script>
  
  <style lang="scss" scoped>
  // 容器：横向滚动（小屏幕友好）
  .fx-table-container {
    width: 100%;
    overflow-x: auto;
    background: #fff; // 背景色（可选）
    border-radius: 8px; // 圆角（可选）
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); // 阴影（可选）
    margin-bottom: 120px;
  }
  
  // 表格基础样式
  .fx-table {
    width: 100%;
    // border-collapse: collapse; // 合并边框（必须）
    font-size: 14px;
    color: #333;
  
    // 有边框样式（根据 options.border 控制）
    &.has-border {
      th, td {
        border: 1px solid #eee; // 浅灰色边框
        padding: 12px 16px; // 内边距（确保内容有空间）
      }
      th {
        background-color: #fafafa; // 表头背景色
        font-weight: 500; // 表头字体加粗
      }
    }
  
    // 表头单元格
    .table-header-cell {
      padding: 12px 16px;
      text-align: left;
      background-color: #f8f9fa; // 浅灰色背景
      font-weight: 500; // 加粗
    }
  
    // 表体单元格
    .table-data-cell {
      padding: 12px 16px;
      text-align: left;
      word-break: break-all; // 长文本换行（避免溢出）
    }
  }
  
  // 调试标签（上线前删除）
  .debug-tag {
    padding: 8px 16px;
    background: #f0f2f5;
    font-size: 12px;
    color: #666;
    border-bottom: 1px solid #eee;
  }
  </style>