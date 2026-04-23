
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'


import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Popup 组件
## 
<div class="componetnsBox">基本使用</div>
<preview compName="popup" demoName="demo1"/>
<br/>

<!-- <div class="componetnsBox">
<h2>基本使用</h2>
<h4>通过 position 属性设置弹窗的弹出位置，默认为居中弹出，可以设置为 top、bottom、left、right。</h4>
<h5>当弹窗从顶部或底部弹出时，默认宽度与屏幕宽度保持一致，弹窗高度取决于内容的高度。</h5>
<h5>当弹窗从顶部或底部弹出时，默认宽度与屏幕宽度保持一致，弹窗高度取决于内容的高度。</h5>
</div> -->

## 基本使用
#### 通过 position 属性设置弹窗的弹出位置，默认为居中弹出，可以设置为 top、bottom、left、right。
##### 当弹窗从顶部或底部弹出时，默认宽度与屏幕宽度保持一致，弹窗高度取决于内容的高度。
##### 当弹窗从左侧或右侧弹出时，默认不设置宽度和高度，弹窗的宽高取决于内容的宽高。
<preview compName="popup" demoName="demo2"/>
<br/>

## Attributes 参数
<Attributes/>
<br/>
