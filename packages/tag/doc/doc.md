# Tag 标签

### 介绍

用于标记关键词和概括主要内容。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Tag } from 'ctf-ics-mobile-ui';

const app = createApp();
app.use(Tag);
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

```html
<icsm-tag type="primary">标签</icsm-tag>
<icsm-tag type="success">标签</icsm-tag>
<icsm-tag type="danger">标签</icsm-tag>
<icsm-tag type="warning">标签</icsm-tag>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```html
<icsm-tag plain type="primary">标签</icsm-tag>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```html
<icsm-tag round type="primary">标签</icsm-tag>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```html
<icsm-tag mark type="primary">标签</icsm-tag>
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```html
<icsm-tag :show="show" closeable size="medium" type="primary" @close="close">
  标签
</icsm-tag>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(true);
    const close = () => {
      show.value = false;
    };

    return {
      show,
      close,
    };
  },
};
```

### 标签大小

通过 `size` 属性调整标签大小。

```html
<icsm-tag type="primary">标签</icsm-tag>
<icsm-tag type="primary" size="medium">标签</icsm-tag>
<icsm-tag type="primary" size="large">标签</icsm-tag>
```

### 自定义颜色

通过 `color` 和 `text-color` 属性设置标签颜色。

```html
<icsm-tag color="#7232dd">标签</icsm-tag>
<icsm-tag color="#ffe1e1" text-color="#ad0000">标签</icsm-tag>
<icsm-tag color="#7232dd" plain>标签</icsm-tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `danger` `warning` | _string_ | `default` |
| size | 大小, 可选值为 `large` `medium` | _string_ | - |
| color | 标签颜色 | _string_ | - |
| show | 是否展示标签 | _boolean_ | `true` |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `false` |
| mark | 是否为标记样式 | _boolean_ | `false` |
| text-color | 文本颜色，优先级高于 `color` 属性 | _string_ | `white` |
| closeable | 是否为可关闭标签 | _boolean_ | `false` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签显示内容 |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击时触发     | _event: MouseEvent_ |
| close  | 关闭标签时触发 | _event: MouseEvent_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { TagSize, TagType, TagProps } from 'ctf-ics-mobile-ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --icsm-tag-padding | _0 var(--icsm-padding-base)_ | - |
| --icsm-tag-text-color | _var(--icsm-white)_ | - |
| --icsm-tag-font-size | _var(--icsm-font-size-sm)_ | - |
| --icsm-tag-radius | _2px_ | - |
| --icsm-tag-line-height | _16px_ | - |
| --icsm-tag-medium-padding | _2px 6px_ | - |
| --icsm-tag-large-padding | _var(--icsm-padding-base) var(--icsm-padding-xs)_ | - |
| --icsm-tag-large-radius | _var(--icsm-radius-md)_ | - |
| --icsm-tag-large-font-size | _var(--icsm-font-size-md)_ | - |
| --icsm-tag-round-radius | _var(--icsm-radius-max)_ | - |
| --icsm-tag-danger-color | _var(--icsm-danger-color)_ | - |
| --icsm-tag-primary-color | _var(--icsm-primary-color)_ | - |
| --icsm-tag-success-color | _var(--icsm-success-color)_ | - |
| --icsm-tag-warning-color | _var(--icsm-warning-color)_ | - |
| --icsm-tag-default-color | _var(--icsm-gray-6)_ | - |
| --icsm-tag-plain-background | _var(--icsm-background-2)_ | - |


<br/><br/><br/><br/><br/><br/>