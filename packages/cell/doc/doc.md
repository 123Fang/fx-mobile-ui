
<script setup>
import demo1 from './demo1.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Cell 组件
## 
<div class="componetnsBox">基本使用</div>
<preview compName="cell" demoName="demo1"/>
<br/>






## API

### CellGroup Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| title  | 分组标题               | _string_  | `-`     |
| inset  | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| border | 是否显示外边框         | _boolean_ | `true`  |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _number \| string_ | - |
| size | 单元格大小，可选值为 `large` `normal` | _string_ | - |
| icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `icsm-icon` |
| tag | 根节点对应的 HTML 标签名 | _string_ | `div` |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，等同于 Vue Router 的 [to 属性](https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to) | _string \| object_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `null` |
| is-link | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| title-style | 左侧标题额外样式 | _string \| Array \| object_ | - |
| title-class | 左侧标题额外类名 | _string \| Array \| object_ | - |
| value-class | 右侧内容额外类名 | _string \| Array \| object_ | - |
| label-class | 描述信息额外类名 | _string \| Array \| object_ | - |

### Cell Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单元格时触发 | _event: MouseEvent_ |

### CellGroup Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |

### Cell Slots

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| title      | 自定义左侧标题               |
| value      | 自定义右侧内容               |
| label      | 自定义标题下方的描述信息     |
| icon       | 自定义左侧图标               |
| right-icon | 自定义右侧图标               |
| extra      | 自定义单元格最右侧的额外内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  CellSize,
  CellProps,
  CellGroupProps,
  CellArrowDirection,
} from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| -- icsm-cell-font-size | _var(--icsm-font-size-md)_ | - |
| --icsm-cell-line-height | _24px_ | - |
| --icsm-cell-vertical-padding | _10px_ | - |
| --icsm-cell-horizontal-padding | _var(--icsm-padding-md)_ | - |
| --icsm-cell-text-color | _var(--icsm-text-color)_ | - |
| --icsm-cell-background | _var(--icsm-background-2)_ | - |
| --icsm-cell-border-color | _var(--icsm-border-color)_ | - |
| --icsm-cell-active-color | _var(--icsm-active-color)_ | - |
| --icsm-cell-required-color | _var(--icsm-danger-color)_ | - |
| --icsm-cell-label-color | _var(--icsm-text-color-2)_ | - |
| --icsm-cell-label-font-size | _var(--icsm-font-size-sm)_ | - |
| --icsm-cell-label-line-height | _var(--icsm-line-height-sm)_ | - |
| --icsm-cell-label-margin-top | _var(--icsm-padding-base)_ | - |
| --icsm-cell-value-color | _var(--icsm-text-color-2)_ | - |
| --icsm-cell-value-font-size | _inherit_ | - |
| --icsm-cell-icon-size | _16px_ | - |
| --icsm-cell-right-icon-color | _var(--icsm-gray-6)_ | - |
| --icsm-cell-large-vertical-padding | _var(--icsm-padding-sm)_ | - |
| --icsm-cell-large-title-font-size | _var(--icsm-font-size-lg)_ | - |
| --icsm-cell-large-label-font-size | _var(--icsm-font-size-md)_ | - |
| --icsm-cell-large-value-font-size | _inherit_ | - |
| --icsm-cell-group-background | _var(--icsm-background-2)_ | - |
| --icsm-cell-group-title-color | _var(--icsm-text-color-2)_ | - |
| --icsm-cell-group-title-padding | _var(--icsm-padding-md) var(--icsm-padding-md) var(--icsm-padding-xs)_ | - |
| --icsm-cell-group-title-font-size | _var(--icsm-font-size-md)_ | - |
| --icsm-cell-group-title-line-height | _16px_ | - |
| --icsm-cell-group-inset-padding | _0 var(--icsm-padding-md)_ | - |
| --icsm-cell-group-inset-radius | _var(--icsm-radius-lg)_ | - |
| --icsm-cell-group-inset-title-padding | _var(--icsm-padding-md) var(--icsm-padding-md) var(--icsm-padding-xs) var(--icsm-padding-xl)_ | - |

<br/>
<br/>
<br/>

