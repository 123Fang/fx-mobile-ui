# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Divider } from 'fx-mobile-ui';

const app = createApp();
app.use(Divider);
```

## 代码演示

### 基础用法

默认渲染一条水平分割线。

```html
<fx-divider />
```

### 展示文本

通过插槽在可以分割线中间插入内容。

```html
<fx-divider>文本</fx-divider>
```

### 内容位置

通过 `content-position` 指定内容所在位置。

```html
<fx-divider content-position="left">文本</fx-divider>
<fx-divider content-position="right">文本</fx-divider>
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```html
<fx-divider dashed>文本</fx-divider>
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

```html
<fx-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  文本
</fx-divider>
```

### 垂直

```html
<fx-divider vertical />
文本
<fx-divider vertical dashed />
文本
<fx-divider vertical :hairline="false" />
文本
<fx-divider vertical :style="{ borderColor: '#1989fa' }" />
```

## API

### Props

| 参数              | 说明                              | 类型      | 默认值   |
| ----------------- | --------------------------------- | --------- | -------- |
| dashed            | 是否使用虚线                      | _boolean_ | `false`  |
| hairline          | 是否使用 0.5px 线                 | _boolean_ | `true`   |
| content-position  | 内容位置，可选值为 `left` `right` | _string_  | `center` |
| vertical `v4.4.0` | 是否使用垂直                      | _boolean_ | `false`  |

### Slots

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { DividerProps, DividerContentPosition } from 'fx-mobile-ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                              | 默认值                    | 描述 |
| --------------------------------- | ------------------------- | ---- |
| --fx-divider-margin              | _var(--fx-padding-md) 0_ | -    |
| --fx-divider-vertical-margin     | _0 var(--fx-padding-xs)_ | -    |
| --fx-divider-text-color          | _var(--fx-text-color-2)_ | -    |
| --fx-divider-font-size           | _var(--fx-font-size-md)_ | -    |
| --fx-divider-line-height         | _24px_                    | -    |
| --fx-divider-border-color        | _var(--fx-border-color)_ | -    |
| --fx-divider-content-padding     | _var(--fx-padding-md)_   | -    |
| --fx-divider-content-left-width  | _10%_                     | -    |
| --fx-divider-content-right-width | _10%_                     | -    |





<br/><br/><br/><br/><br/><br/>
