<script setup lang="ts">
import { ref } from 'vue'
import { SubdirectoryArrowLeftRound } from '@vicons/material'

const tab = ref(0)

const list = [
  { name: '百度', url: 'www.baidu.com' },
  { name: '谷歌', url: 'www.google.com' },
  { name: '必应', url: 'www.bing.com' },
  { name: 'MC Wiki', url: '...' },
  { name: 'ModMC', url: '...' },
]

const change_tab = (index: number) => {
  tab.value = index
}
</script>

<template>
  <!-- <div style="margin: 0 15px;">
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
  </div> -->
  <div>
    <n-space justify="center">
      <div v-for="(item, i) in list" :key="i" class="list_item" @click="change_tab(i)" :class="i==tab?'activated':''">
        {{ item.name }}
      </div>
    </n-space>
  </div>
  <!-- {{ tab }} -->
  <div class="input_box">
    <input type="text" class="input">
    <n-button strong secondary circle class="input_btn" size="large">
      <template #icon>
        <n-icon color="var(--gray-7)"><SubdirectoryArrowLeftRound /></n-icon>
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

.list_item {
  background: #fff;
  padding: 4px 23px;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
  transition: .25s;
  color: var(--gray-8);
}

.list_item:hover {
  background: var(--theme-1);
}

.list_item.activated {
  /* transition: .25s; */
  /* background: var(--theme-6); */
  background: linear-gradient(to right,#5f87f8,#3860f4);
  animation: myAnimation .2s linear forwards;
  /* transition: .5s; */
}
@keyframes myAnimation {
  from {
    background: var(--bg);
    color: var(--gray-8);
  }
  to {
    background: var(--theme-6);
    color: #fff;
  }
}

.input_box{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  background-color: #FFF;
  max-width: 500px;
  /* border: 1px solid #ccc; */
  border-radius: 999px;
  padding: 5px;
}

.input {
  width: 100%;
  /* max-width: 100%; */
  display: flex;
  height: 40px;
  border: none;
  
  outline: none;
  border-radius: 999px;
  padding: 0px 15px;
  font-size: 1.2rem;
}
</style>