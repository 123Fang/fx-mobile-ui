# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Loading } from 'vant';

const app = createApp();
app.use(Loading);
```

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner`。

```html
<icsm-loading />

<icsm-loading type="spinner" />
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```html
<icsm-loading color="#1989fa" />

<icsm-loading type="spinner" color="#1989fa" />
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认单位为 `px`。

```html
<icsm-loading size="24" />

<icsm-loading type="spinner" size="24px" />
```

### 加载文案

可以使用默认插槽在图标的右侧插入加载文案。

```html
<icsm-loading size="24px">加载中...</icsm-loading>
```

### 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```html
<icsm-loading size="24px" vertical>加载中...</icsm-loading>
```

### 自定义文案颜色

通过 `color` 或者 `text-color` 属性设置加载文案的颜色。

```html
<!-- 可修改文案和加载图标的颜色 -->
<icsm-loading color="#0094ff" />

<!-- 只修改文案颜色 -->
<icsm-loading text-color="#0094ff" />
```

### 自定义图标

通过 `icon` 插槽可以自定义加载图标。

```html
<icsm-loading vertical>
  <template #icon>
    <icsm-icon name="star-o" size="30" />
  </template>
  加载中...
</icsm-loading>
```

## API

### Props

| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| color      | 颜色                          | _string_           | `#c9c9c9`  |
| type       | 类型，可选值为 `spinner`      | _string_           | `circular` |
| size       | 加载图标大小，默认单位为 `px` | _number \| string_ | `30px`     |
| text-size  | 文字大小，默认单位为 `px`     | _number \| string_ | `14px`     |
| text-color | 文字颜色                      | _string_           | `#c9c9c9`  |
| vertical   | 是否垂直排列图标和文字内容    | _boolean_          | `false`    |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 加载文案       |
| icon    | 自定义加载图标 |

### 类型定义

组件导出以下类型定义：

```ts
import type { LoadingType, LoadingProps } from 'ctf-ics-mobile-ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                           | 默认值                    | 描述 |
| ------------------------------ | ------------------------- | ---- |
| --icsm-loading-text-color       | _var(--icsm-text-color-2)_ | -    |
| --icsm-loading-text-font-size   | _var(--icsm-font-size-md)_ | -    |
| --icsm-loading-spinner-color    | _var(--icsm-gray-5)_       | -    |
| --icsm-loading-spinner-size     | _30px_                    | -    |
| --icsm-loading-spinner-duration | _0.8s_                    | -    |


<br/><br/><br/>