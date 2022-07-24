<script setup lang="ts">
import { ref } from 'vue'
import { SubdirectoryArrowLeftRound } from '@vicons/material'

const tab = ref('baidu')
</script>

<template>
  <div style="margin: 0 15px;">
    <n-tabs type="segment" v-model:value="tab" animated class="tabs1">
      <n-tab name="baidu">
        百度
      </n-tab>
      <n-tab name="bing">
        必应
      </n-tab>
      <n-tab name="google">
        谷歌
      </n-tab>
      <n-tab name="wiki">
        MC Wiki
      </n-tab>
      <n-tab name="modmc">
        ModMC
      </n-tab>
    </n-tabs>
  </div>
  <div class="input_box">
    <input type="text" class="input">
    <n-button strong secondary circle class="input_btn" size="large">
      <template #icon>
        <n-icon><SubdirectoryArrowLeftRound /></n-icon>
      </template>
    </n-button>
  </div>
</template>

<style scoped>
.tabs1 {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.input_box{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  background-color: #FFF;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 999px;
  padding: 5px;
}

.input {
  /* width: 100%; */
  width: 500px;
  display: flex;
  height: 40px;
  border: none;
  
  outline: none;
  border-radius: 999px;
  padding: 0px 10px;
  font-size: 1.5rem;
}

.input_btn {

}
</style>