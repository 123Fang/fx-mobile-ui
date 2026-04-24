/* eslint-disable no-undef */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const args = process.argv.slice(2);


const NAME = args[0]; // 组件名
const FILE_PATH = path.join(path.resolve(__dirname), '..', 'packages');

function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}


if (!args.length) {
  console.log('请填写组件名');
  console.log('Usage: button（单个） 或 dropDown（小驼峰式）')
  process.exit(1);
}

// 待验证字符串 --- 小驼峰
function isStrictCamelCase(str) {
  return /^[a-z]+([A-Z][a-z0-9]*)*$/.test(str);
}
// if (/-/.test(NAME)) {
//   console.log('请重新输入小驼峰式的组件名，如 dropDown')
//   process.exit(1);
// }
if (!isStrictCamelCase(NAME)) {
  console.log(`💡 组件名需小驼峰式, 如: timePicker`);
  process.exit(1);
}

const DIRNAME = path.join(FILE_PATH, NAME); // 组件目录
// const INPUT_NAME = NAME;

// 如果存在，给出提示，然后退出
if (fs.existsSync(DIRNAME)) {
  console.log(`${NAME} 组件已经存在，请更换组件名！`);
  process.exit(1);
}

let NORMALIZED_NAME = '';
const nameTokens = NAME.split(/[_|-]([a-z])/).map((token, index) => {
  if (index === 0) {
    return token;
  }
  return token[0].toUpperCase() + token.slice(1);
});
NORMALIZED_NAME = nameTokens.join('');

fs.mkdirSync(DIRNAME, { recursive: true });


const vueComponentContent = `
<template>
  <van-${camelToKebab(NORMALIZED_NAME)} v-bind="$attrs"  ref="innerRef">

    <!-- 透传所有插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" :key="name" />
    </template>

  </van-${camelToKebab(NORMALIZED_NAME)}>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'icsm-${camelToKebab(NORMALIZED_NAME)}',
})
const emit = defineEmits([])
const props = defineProps({})

const innerRef = ref(null)
defineExpose({
  innerRef, /** 暴露 element plus 组件 ref **/
})

// init here
</script>
<style lang="scss" scoped>
.icsm-${camelToKebab(NORMALIZED_NAME)}-container {}
</style>
`
fs.writeFileSync(path.join(DIRNAME, 'index.vue'), vueComponentContent);


const INDEXJSName = NORMALIZED_NAME.slice(0, 1).toUpperCase() + NORMALIZED_NAME.slice(1)
const indexJsContent = `
import icsm${INDEXJSName} from './index.vue'

icsm${INDEXJSName}.install = app => {
  app.component(icsm${INDEXJSName}.name, icsm${INDEXJSName})
} 

export default icsm${INDEXJSName}
`
fs.writeFileSync(path.join(DIRNAME, 'index.js'), indexJsContent);



// 生成组件doc目录和其中的文件
const DIRNAM_DOC = path.join(DIRNAME, 'doc')
if (fs.existsSync(DIRNAM_DOC)) {
  console.log(`${NAME} 组件doc目录已经存在！`);
  process.exit(1);
}
fs.mkdirSync(DIRNAM_DOC, { recursive: true }); // 创建doc目录



const demoContext = `
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

// copy demo



`
fs.writeFileSync(path.join(DIRNAM_DOC, 'demo.vue'), demoContext);

const attrTableContext = `
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
`
fs.writeFileSync(path.join(DIRNAM_DOC, 'Attributes.vue'), attrTableContext);


const docContext = `
<script setup>
import Attributes from './Attributes.vue'
</script>




## Attributes 参数
<Attributes/>
<br/>
`
fs.writeFileSync(path.join(DIRNAM_DOC, 'doc.md'), docContext);

// console.log(`创建组件${NORMALIZED_NAME}成功，模版已生成`)



const iframeDocContext = `
<script setup>
import demo from './demo.vue'
</script>
<demo/>
`
fs.writeFileSync(path.join(DIRNAM_DOC, 'iframe.md'), iframeDocContext);

// console.log(`创建组件${NORMALIZED_NAME}成功，模版已生成`)



// 生成单元测试
const DIRNAM_TEST = path.join(DIRNAME, '__test__')
if (fs.existsSync(DIRNAM_TEST)) {
  console.log(`${NAME} 测试目录已经存在！`);
  process.exit(1);
}
fs.mkdirSync(DIRNAM_TEST, { recursive: true }); // 创建doc目录
const testContext = `
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ${NAME} from '../index.vue'


// demo
it('should emit click event', () => {
  const wrapper = mount(${NAME});
  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});
`
fs.writeFileSync(path.join(DIRNAM_TEST, `${NAME}.test.jsx`), testContext);
