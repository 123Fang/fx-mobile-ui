# Card 卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Card } from 'fx-mobile-ui';

const app = createApp();
app.use(Card);
```

## 代码演示

### 基础用法

```html
<fx-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
/>
```

### 营销信息

通过 `origin-price` 设置商品原价，通过 `tag` 设置商品左上角标签。

```html
<fx-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  origin-price="10.00"
/>
```

### 自定义内容

`Card` 组件提供了多个插槽，可以灵活地自定义内容。

```html
<fx-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
>
  <template #tags>
    <fx-tag plain type="primary">标签</fx-tag>
    <fx-tag plain type="primary">标签</fx-tag>
  </template>
  <template #footer>
    <fx-button size="mini">按钮</fx-button>
    <fx-button size="mini">按钮</fx-button>
  </template>
</fx-card>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| thumb | 左侧图片 URL | _string_ | - |
| title | 标题 | _string_ | - |
| desc | 描述 | _string_ | - |
| tag | 图片角标 | _string_ | - |
| num | 商品数量 | _number \| string_ | - |
| price | 商品价格 | _number \| string_ | - |
| origin-price | 商品划线原价 | _number \| string_ | - |
| centered | 内容是否垂直居中 | _boolean_ | `false` |
| currency | 货币符号 | _string_ | `¥` |
| thumb-link | 点击左侧图片后跳转的链接地址 | _string_ | - |
| lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | _boolean_ | `false` |

### Events

| 事件名      | 说明                 | 回调参数            |
| ----------- | -------------------- | ------------------- |
| click       | 点击时触发           | _event: MouseEvent_ |
| click-thumb | 点击自定义图片时触发 | _event: MouseEvent_ |

### Slots

| 名称         | 说明                   |
| ------------ | ---------------------- |
| title        | 自定义标题             |
| desc         | 自定义描述             |
| num          | 自定义数量             |
| price        | 自定义价格             |
| origin-price | 自定义商品原价         |
| price-top    | 自定义价格上方区域     |
| bottom       | 自定义价格下方区域     |
| thumb        | 自定义图片             |
| tag          | 自定义图片角标         |
| tags         | 自定义描述下方标签区域 |
| footer       | 自定义右下角内容       |

### 类型定义

组件导出以下类型定义：

```ts
import type { CardProps } from 'fx-mobile-ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --fx-card-padding | _var(--fx-padding-xs) var(--fx-padding-md)_ | - |
| --fx-card-font-size | _var(--fx-font-size-sm)_ | - |
| --fx-card-text-color | _var(--fx-text-color)_ | - |
| --fx-card-background | _var(--fx-background)_ | - |
| --fx-card-thumb-size | _88px_ | - |
| --fx-card-thumb-radius | _var(--fx-radius-lg)_ | - |
| --fx-card-title-line-height | _16px_ | - |
| --fx-card-desc-color | _var(--fx-text-color-2)_ | - |
| --fx-card-desc-line-height | _var(--fx-line-height-md)_ | - |
| --fx-card-price-color | _var(--fx-text-color)_ | - |
| --fx-card-origin-price-color | _var(--fx-text-color-2)_ | - |
| --fx-card-num-color | _var(--fx-text-color-2)_ | - |
| --fx-card-origin-price-font-size | _var(--fx-font-size-xs)_ | - |
| --fx-card-price-font-size | _var(--fx-font-size-sm)_ | - |
| --fx-card-price-integer-font-size | _var(--fx-font-size-lg)_ | - |
| --fx-card-price-font | _var(--fx-price-font)_ | - |





<br/><br/><br/><br/><br/><br/>
