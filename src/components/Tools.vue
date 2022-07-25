<script setup lang="ts">
import { ref, Component, h, onMounted } from 'vue'
import { NIcon } from 'naive-ui'
import { KeyboardDoubleArrowDownRound, InsertLinkRound, InfoOutlined, LocalFireDepartmentRound, QuestionMarkRound } from '@vicons/material';

const inverted = ref<boolean>(false)
const menuValue = ref<string>('1')
const windowWidth = ref<number>(0)

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '快捷链接',
    key: '1',
    icon: renderIcon(InsertLinkRound),
    children: [
      {
        type: 'group',
        label: '模组 | Mod',
        key: 'mod',
        children: [
          {
            label: '热门',
            key: 'hot',
            icon: renderIcon(LocalFireDepartmentRound)
          },
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(QuestionMarkRound),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
    ]
  },
  {
    label: '关于',
    key: '2',
    icon: renderIcon(InfoOutlined)
  },
]

onMounted(() => {
  getWindowResize()
  window.addEventListener('resize', getWindowResize)
})

const getWindowResize = function () {
  windowWidth.value = window.innerWidth
}

</script>

<template>
  <div style="height: 100vh;padding-top: 15px">
    <div class="box">
      <n-layout has-sider>
        <n-layout-sider
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :collapsed="windowWidth < 768"
          :width="200"
          :native-scrollbar="false"
          :inverted="inverted"
          bordered
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            v-model:value="menuValue"
            style="border-radius: 10px;"
          />
        </n-layout-sider>
        <n-layout>
          <n-layout-content content-style="padding: 24px;">
            <div>
              <div style="text-align: center;">
                <img src="../assets/images/logo.png" alt="" style="width: 200px;margin: 0 auto;display: flex;">
                <h2 style="color: var(--gray-8);">Blooock 起始页</h2>
              </div>
              <div>
                <h3 style="color: var(--gray-7);">更新记录</h3>
                <n-timeline>
                  <!-- <n-timeline-item
                    type="success"
                    title="成功"
                    content="哪里成功"
                    time="2018-04-03"
                  /> -->
                  <!-- <n-timeline-item
                    type="warning"
                    title="警告"
                    content="哪里警告"
                    time="2018-04-03"
                  /> -->
                  <n-timeline-item
                    type="info"
                    title="项目启动"
                    content="梦开始的地方"
                    time="2022-07-24"
                  />
                  <!-- <n-timeline-item content="啊" /> -->
                </n-timeline>
              </div>
              <div>
                <h3 style="color: var(--gray-7);">开发人员</h3>
                <n-grid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="12" :y-gap="12">
                  <n-grid-item>
                    <div class="developer_card">
                      <img class="developer_avatar" src="https://avatars.githubusercontent.com/u/61106448?v=4" alt="">
                      <div>
                        <div class="developer_name">YuzeTT</div>
                        <n-space>
                          <n-tag :bordered="false" type="info">
                            创始人
                          </n-tag>
                          <n-tag :bordered="false" type="info">
                            开发
                          </n-tag>
                        </n-space>
                      </div>
                    </div>
                  </n-grid-item>
                  <n-grid-item>
                    <div class="developer_card">
                      <img class="developer_avatar" src="	https://avatars.githubusercontent.com/u/73894257?v=4" alt="">
                      <div>
                        <div class="developer_name">ChaShao</div>
                        <n-space>
                          <n-tag :bordered="false" type="info">
                            CSS样式
                          </n-tag>
                        </n-space>
                      </div>
                    </div>
                  </n-grid-item>
                </n-grid>
              </div>
            </div>
          </n-layout-content>
        </n-layout>
      </n-layout>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin: 15px;
  padding: 5px;
  border-radius: 10px;
  background-color: var(--bg);
}

.developer_card {
  /* background-color: var(--blue-sec); */
  border: 1px solid var(--gray-4);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.developer_avatar {
  width: 60px;
  border-radius: 5px;
}

.developer_name {
  font-size: 20px;
  color: var(--gray-7);
}
</style>