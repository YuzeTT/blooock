<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import { useMessage } from 'naive-ui'
import { SubdirectoryArrowLeftRound, EditRound } from '@vicons/material'

const message = useMessage()

const tab = ref<number>(0)
const input = ref<string>('')
const inputVal = ref<any>(null)
const showEditModal = ref<boolean>(false)
const showList = ref<boolean[]>([true, true, true, true, false, false, false])

const list = ref([
  { key: 0, name: '百度', url: 'https://www.baidu.com/s?wd=', color: '#2529d8' },
  { key: 1, name: '谷歌', url: 'https://www.google.com/search?q=', color: '#ea4335' },
  { key: 2, name: '必应', url: 'https://www.bing.com/search?q=', color: '#00a1f1' },
  { key: 3, name: 'MC Wiki', url: 'https://minecraft.fandom.com/zh/wiki/Special:%E6%90%9C%E7%B4%A2?query=', color: '#db1f29' },
  { key: 4, name: 'MC百科', url: 'https://search.mcmod.cn/s?key=', color: '#86C155' },
  { key: 5, name: '插件百科', url: 'https://mineplugin.org/index.php?search=', color: '#3385FF' },
  { key: 6, name: 'CurseForge', url: 'https://www.curseforge.com/minecraft/mc-mods/search?search=', color: '#0D0D0D' },
])

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
  if (e.altKey && e.key === '6') {
    tab.value = 5
  }
  if (e.altKey && e.key === '7') {
    tab.value = 6
  }
  if (e.altKey && e.key === 'Enter') {
    showEditModal.value = true
  }
}

const go = () => {
  if (input.value) {
    console.log(
      `%c Go -> ${list.value[tab.value].name} %c ${list.value[tab.value].url+input.value} %c`,
      'background:#3b82f6; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
      'background:#dbeafe; padding: 1px; border-radius: 0 3px 3px 0; color: rgba(15, 23, 42, 0.85)',
      'background:transparent'
    )
    window.open(list.value[tab.value].url+input.value)
  }
  input.value = ''
}

onMounted(() => {
  nextTick(() => {
    if (!showEditModal) {
      inputVal.value.focus()
    }
  })
  // 读取 showList
  showList.value = JSON.parse(localStorage.getItem('show_list') || '[true, true, true, true, false, false, false]')
})

const editLinks = () => {
  showEditModal.value = true
}

const saveList = () => {
  showEditModal.value = false
  localStorage.setItem('show_list', JSON.stringify(showList.value))
  message.success('保存成功')
}
</script>

<template>
  <div>
    <n-space justify="center">
      <template v-for="(item, i) in list" :key="i">
        <div @click="change_tab(item.key)" v-if="showList[item.key]">
          <div class="list_item_keyword">Alt + {{ item.key + 1 }}</div>
          <div class="list_item" :class="item.key==tab?'activated':''" :style="item.key==tab?{backgroundColor: item.color?item.color:'var(--theme-6)'}:''">{{ item.name }}</div>
        </div>
      </template>
      <div>
        <div class="list_item_keyword">Alt + Enter</div>
        <div class="list_item other" @click="editLinks">
          <n-icon>
            <EditRound/>
          </n-icon>
          编辑
        </div>
      </div>
    </n-space>
  </div>
  <div class="input_box">
    <label for="text"></label>
    <input id="text" autocomplete="off" type="text" class="input" @keydown.enter="go" v-model="input" ref="inputVal">
    <n-button strong secondary circle class="input_btn" size="large" @click="go" :disabled="input === ''" aria-label="search">
      <template #icon>
        <n-icon color="var(--gray-7)"><SubdirectoryArrowLeftRound /></n-icon>
      </template>
    </n-button>
  </div>
  <n-drawer v-model:show="showEditModal" :width="200" :placement="'right'">
    <n-drawer-content title="快捷搜索">
      <n-space vertical>
        <n-space v-for="(item, i) in list" :key="i" justify="space-between">
          <div>{{ item.name }}</div>
          <div><n-switch v-model:value="showList[item.key]" /></div>
        </n-space>
      </n-space>
      <template #footer>
        <n-button type="primary" @click="saveList">
          保存
        </n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
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
  transition: box-shadow .2s;
}

.input_box:focus-within {
  box-shadow: 0 6px 20px rgb(93 93 93 / 13%);
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