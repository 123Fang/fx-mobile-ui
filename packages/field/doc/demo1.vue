<!-- html -->
<template>
  <icsm-cell-group inset>
    
    <icsm-field v-model="value" label="文本" placeholder="请输入用户名" />

    <icsm-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <icsm-button size="small" type="primary">发送验证码</icsm-button>
      </template>
    </icsm-field>

  </icsm-cell-group>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue'

const value = ref('')

// init
</script>
