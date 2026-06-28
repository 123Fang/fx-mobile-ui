# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Step, Steps } from 'fx-mobile-ui';

const app = createApp();
app.use(Step);
app.use(Steps);
```

## 代码演示

### 基础用法

`active` 属性表示当前步骤的索引，从 0 起计。

```html
<fx-steps :active="active">
  <fx-step>买家下单</fx-step>
  <fx-step>商家接单</fx-step>
  <fx-step>买家提货</fx-step>
  <fx-step>交易完成</fx-step>
</fx-steps>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(1);
    return { active };
  },
};
```

### 自定义样式

可以通过 `active-icon` 和 `active-color` 属性设置激活状态下的图标和颜色。

```html
<fx-steps :active="active" active-icon="success" active-color="#07c160">
  <fx-step>买家下单</fx-step>
  <fx-step>商家接单</fx-step>
  <fx-step>买家提货</fx-step>
  <fx-step>交易完成</fx-step>
</fx-steps>
```

### 竖向步骤条

可以通过设置 `direction` 属性来改变步骤条的显示方向。

```html
<fx-steps direction="vertical" :active="0">
  <fx-step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
 </fx-step>
  <fx-step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
 </fx-step>
  <fx-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
 </fx-step>
</fx-steps>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 当前步骤对应的索引值 | _number \| string_ | `0` |
| direction | 步骤条方向，可选值为 `vertical` | _string_ | `horizontal` |
| active-icon | 当前步骤对应的底部图标，可选值见 [Icon 组件](#/zh-CN/icon) | _string_ | `checked` |
| inactive-icon | 非当前步骤对应的底部图标，可选值见 [Icon 组件](#/zh-CN/icon) | _string_ | - |
| finish-icon | 已完成步骤对应的底部图标，优先级高于 `inactive-icon`，可选值见 [Icon 组件](#/zh-CN/icon) | _string_ | - |
| active-color | 当前步骤和已完成步骤的颜色 | _string_ | `#1989fa` |
| inactive-color | 未激活步骤的颜色 | _string_ | `#969799` |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `icsm-icon` |

### Step Slots

| 名称          | 说明                                                       |
| ------------- | ---------------------------------------------------------- |
| default       | 步骤内容                                                   |
| active-icon   | 自定义激活状态图标                                         |
| inactive-icon | 自定义未激活状态图标                                       |
| finish-icon   | 自定义已完成步骤对应的底部图标，优先级高于 `inactive-icon` |

### Steps Events

| 事件名     | 说明                       | 回调参数        |
| ---------- | -------------------------- | --------------- |
| click-step | 点击步骤的标题或图标时触发 | _index: number_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { StepsProps, StepsDirection } from 'fx-mobile-ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                  | 默认值                     | 描述 |
| ------------------------------------- | -------------------------- | ---- |
| --fx-step-text-color                 | _var(--fx-text-color-2)_  | -    |
| --fx-step-active-color               | _var(--fx-primary-color)_ | -    |
| --fx-step-process-text-color         | _var(--fx-text-color)_    | -    |
| --fx-step-font-size                  | _var(--fx-font-size-md)_  | -    |
| --fx-step-line-color                 | _var(--fx-border-color)_  | -    |
| --fx-step-finish-line-color          | _var(--fx-primary-color)_ | -    |
| --fx-step-finish-text-color          | _var(--fx-text-color)_    | -    |
| --fx-step-icon-size                  | _12px_                     | -    |
| --fx-step-circle-size                | _5px_                      | -    |
| --fx-step-circle-color               | _var(--fx-gray-6)_        | -    |
| --fx-step-horizontal-title-font-size | _var(--fx-font-size-sm)_  | -    |
| --fx-steps-background                | _var(--fx-background-2)_  | -    |





<br/><br/><br/><br/><br/><br/>
