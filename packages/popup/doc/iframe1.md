
<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'


import demoContainer from '@/components/demo-container.vue'
</script>

<demoContainer title='基本使用'>
 <demo1/>
</demoContainer>


<demoContainer title='弹出位置'>
 <demo2/>
</demoContainer>




<demoContainer title='关闭图标'>
 <demo3/>
</demoContainer>



<demoContainer title='圆角弹窗'>
 <demo4/>
</demoContainer>
