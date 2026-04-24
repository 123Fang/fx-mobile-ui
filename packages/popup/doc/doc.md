
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'

import demo4 from './demo4.vue'

import demo5 from './demo5.vue'

import demo6 from './demo6.vue'



import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Popup 组件
## 
<div class="componetnsBox">基本使用</div>
<preview compName="popup" demoName="demo1"/>
<br/>


## 弹出位置
#### 通过 position 属性设置弹窗的弹出位置，默认为居中弹出，可以设置为 top、bottom、left、right。
##### 当弹窗从顶部或底部弹出时，默认宽度与屏幕宽度保持一致，弹窗高度取决于内容的高度。
##### 当弹窗从左侧或右侧弹出时，默认不设置宽度和高度，弹窗的宽高取决于内容的宽高。
<preview compName="popup" demoName="demo2"/>
<br/>




## 关闭图标
#### 设置 closeable 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 close-icon 属性自定义图标，使用 close-icon-position 属性可以自定义图标位置。
<preview compName="popup" demoName="demo3"/>
<br/>





## 圆角弹窗
#### 设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式。
<preview compName="popup" demoName="demo4"/>
<br/>













## Attributes 参数
<Attributes/>
<br/>
