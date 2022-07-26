<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { SubdirectoryArrowLeftRound, EditRound } from '@vicons/material'

const tab = ref<number>(0)
const input = ref<string>('')
const inputVal = ref<any>(null)

const list = ref([
  { name: '百度', url: 'http://www.baidu.com/s?wd=', color: '#2529d8' },
  { name: '谷歌', url: 'www.google.com', color: '#ea4335' },
  { name: '必应', url: 'www.bing.com', color: '#00a1f1' },
  { name: 'MC Wiki', url: 'https://minecraft.fandom.com/zh/wiki/Special:%E6%90%9C%E7%B4%A2?query=', color: '#db1f29' },
])
// const list = [
//   { name: '百度', url: 'http://www.baidu.com/s?wd=' },
//   { name: '谷歌', url: 'www.google.com' },
//   { name: '必应', url: 'www.bing.com' },
//   { name: 'MC Wiki', url: '...' },
//   { name: 'MC百科', url: '...' },
//   { name: '插件百科', url: '...' },
//   { name: 'CurseForge', url: '...' },
// ]

const options = ref([
  { label: 'MC百科', key: 'MC百科', url: 'https://search.mcmod.cn/s?key=' },
  { label: '插件百科', key: '插件百科', url: '...' },
  { label: 'CurseForge', key: 'CurseForge', url: '...' },
])

// const list_other = list.other

// list.forEach((item:any) => {
//   if (!item.show) {
//     // item.url = item.url + input.value
//     // item.label = item.name
//     // item.key = item.name
//     options.value = options + {
//       label: item.name,
//       key: item.name,
//     }
//   }
// })

// {
//   label: '滨海湾金沙，新加坡',
//   key: 'marina bay sands',
//   disabled: true
// },

const change_tab = (index: number) => {
  tab.value = index
}

document.onkeydown = function (e) {
  if (e.altKey && e.key === '1') {
    tab.value = 0
  }
  if (e.altKey && e.key === '2') {
    tab.value = 1
  }
  if (e.altKey && e.key === '3') {
    tab.value = 2
  }
  if (e.altKey && e.key === '4') {
    tab.value = 3
  }
  if (e.altKey && e.key === '5') {
    tab.value = 4
  }
}

const handleSelect = (key: string | number) => {
  console.log(key)
}


const go = () => {
  if (input.value) {
    console.log('go')
    switch(tab.value) {
      case 0:
        window.open(`https://www.baidu.com/s?wd=${input.value}`)
        break
      case 1:
        window.open(`https://www.google.com/search?q=${input.value}`)
        break
      case 2:
        window.open(`https://www.bing.com/search?q=${input.value}`)
        break
      case 3:
        window.open(`https://minecraft.fandom.com/zh/wiki/Special:%E6%90%9C%E7%B4%A2?query=${input.value}`)
        break
      case 4:
        window.open(`https://search.mcmod.cn/s?key=${input.value}`)
        break
    }
  }
  input.value = ''
}

nextTick(() => {
  inputVal.value.focus()
})
</script>

<template>
  <div>
    <n-space justify="center">
      <div v-for="(item, i) in list" :key="i" @click="change_tab(i)">
        <div class="list_item_keyword">Alt + {{ i + 1 }}</div>
        <div class="list_item" :class="i==tab?'activated':''" :style="i==tab?{backgroundColor: item.color}:''">{{ item.name }}</div>
      </div>
      <div>
        <div class="list_item_keyword">Alt + Enter</div>
        <!-- <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <div class="list_item">更多...</div>
        </n-dropdown> -->
        <div class="list_item other">
          <n-icon>
            <EditRound/>
          </n-icon>
          编辑
        </div>
      </div>
    </n-space>
  </div>
  <div class="input_box">
    <input type="text" class="input" @keydown.enter="go" v-model="input" ref="inputVal">
    <n-button strong secondary circle class="input_btn" size="large" @click="go" :disabled="input === ''">
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
  /* background: linear-gradient(to right,#5f87f8,#3860f4); */
  animation: myAnimation .15s linear forwards;
}

.list_item_keyword {
  font-size: 1rem;
  color: var(--gray-5);
  text-align: center;
  margin-bottom: 6px;
}

.other {
  display: flex;
  /* width: 100%; */
  align-items: center;
  gap: 5px;
}

@keyframes myAnimation {
  from {
    /* background: var(--bg); */
    color: var(--gray-8);
  }
  to {
    /* background: var(--theme-6); */
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
  border-radius: 999px;
  padding: 5px;
}

.input {
  width: 100%;
  display: flex;
  height: 40px;
  border: none;
  background-color: transparent;
  outline: none;
  border-radius: 999px;
  padding: 0px 15px;
  font-size: 1.2rem;
}
</style>