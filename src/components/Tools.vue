<script setup lang="ts">
import { ref, Component, h, onMounted } from 'vue'
import { NIcon } from 'naive-ui'
// import { 
//   StyleRound,
//   ViewInArRound,
//   InfoOutlined,
//   LocalFireDepartmentRound,
//   AttachFileRound,
//   AppsRound
// } from '@vicons/material';

import Icon_links from '/src/assets/icons/links.webp'
import Icon_fabric from '/src/assets/icons/fabric.png'
import Icon_forge from '/src/assets/icons/forge.webp'
import Icon_bukkit from '/src/assets/icons/bukkit.webp'
import Icon_vanilla from '/src/assets/icons/vanilla.webp'
import Icon_fire from '/src/assets/icons/fire.webp'

const inverted = ref<boolean>(false)
const menuValue = ref<string>('导航')
const windowWidth = ref<number>(0)

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function renderImage (src: string) {
  return () => h('img', {src: src, style: { width:'20px' }})
}

const menuOptions = [
  {
    label: '导航',
    key: '导航',
    icon: renderImage(Icon_links),
  },
  {
    label: 'Fabirc 模组',
    key: 'Fabirc模组',
    icon: renderImage(Icon_fabric),
    children: [
      {
        label: '热门模组',
        key: 'Fabirc-热门模组',
        icon: renderImage(Icon_fire),
      },
    ]
  },
  {
    label: 'Forge 模组',
    key: 'Forge模组',
    icon: renderImage(Icon_forge),
    // children: [
    //   {
    //     label: '热门模组',
    //     key: 'Forge-热门模组',
    //     icon: renderImage('src/assets/icons/fire.webp'),
    //   },
    //   {
    //     label: '热门模组',
    //     key: '热门模组',
    //     icon: renderIcon(LocalFireDepartmentRound)
    //   },
    // ]
  },
  {
    // type: 'group',
    label: 'Bukkit 插件',
    key: '插件',
    icon: renderImage(Icon_bukkit),
    // children: [
    //   {
    //     label: '热门插件',
    //     key: '热门插件',
    //     icon: renderImage('src/assets/icons/fire.webp'),
    //   },
    // ]
  },
  {
    // type: 'group',
    label: '原版',
    key: '原版',
    icon: renderImage(Icon_vanilla),
    children: [
      {
        label: '热门网站',
        key: '热门网站',
        icon: renderImage(Icon_fire),
      },
    ]
  },
  // {
  //   label: '饮品',
  //   key: 'beverage',
  //   icon: renderIcon(QuestionMarkRound),
  //   children: [
  //     {
  //       label: '威士忌',
  //       key: 'whisky'
  //     }
  //   ]
  // },
  {
    label: '关于',
    key: '关于',
    icon: renderImage(Icon_fire),
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
            <transition name="fade" appear mode="out-in">
              <!-- 导航 -->
              <div v-if="menuValue === '导航'" class="animate__animated animate__fadeIn animate__faster">
                <div style="text-align: center;">
                  <img src="../assets/images/logo.png" alt="" style="width: 200px;margin: 0 auto;display: flex;">
                  <div style="display: flex;justify-content: center;align-items: center;gap: 10px;">
                    <h2 style="color: var(--gray-8);">导航</h2>
                    <n-tag :bordered="false" type="warning">
                      BETA
                    </n-tag>
                  </div>
                </div>
                <div>
                  <h3 style="color: var(--gray-7);">从身份开始</h3>
                  <n-grid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="12" :y-gap="12">
                    <n-grid-item>
                      <n-card
                        embedded
                        :bordered="false"
                      >
                        <div 
                          style="
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            font-size: 18px;
                            color: var(--gray-8);
                            margin-bottom: 20px;
                          "
                        >
                          <img :src="Icon_fabric" alt="" class="card_icon">
                          <div>我是 Fabric 玩家</div>
                        </div>
                        <!-- <n-tag :bordered="false">
                          在写了...
                        </n-tag> -->
                        <n-space>
                          <n-button strong secondary type="info">Fabric 模组</n-button>
                          <n-button strong secondary>原版工具</n-button>
                        </n-space>
                      </n-card>
                    </n-grid-item>
                    <n-grid-item style="opacity: .5;">
                      <n-card
                        embedded
                        :bordered="false"
                      >
                        <div 
                          style="
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            font-size: 18px;
                            color: var(--gray-8);
                            margin-bottom: 20px;
                          "
                        >
                          <img :src="Icon_forge" alt="" class="card_icon">
                          <div>我是 Forge 玩家</div>
                        </div>
                        <n-tag :bordered="false">
                          未开放
                        </n-tag>
                        <!-- <n-space>
                          <n-button strong secondary type="info">Forge 模组</n-button>
                          <n-button strong secondary>原版工具</n-button>
                        </n-space> -->
                      </n-card>
                    </n-grid-item>
                    <n-grid-item style="opacity: .5;">
                      <n-card
                        embedded
                        :bordered="false"
                      >
                        <div 
                          style="
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            font-size: 18px;
                            color: var(--gray-8);
                            margin-bottom: 20px;
                          "
                        >
                          <img :src="Icon_bukkit" alt="" class="card_icon">
                          <div>我是 服主</div>
                        </div>
                        <n-tag :bordered="false">
                          未开放
                        </n-tag>
                        <!-- <n-space>
                          <n-button strong secondary type="info">服务端插件</n-button>
                          <n-button strong secondary>开服教程</n-button>
                        </n-space> -->
                      </n-card>
                    </n-grid-item>
                  </n-grid>
                </div>
              </div>
              <!-- 关于 -->
              <div v-else-if="menuValue === '关于'" class="animate__animated animate__fadeIn animate__faster">
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
                        <img class="developer_avatar" src="../assets/images/avatars/YuzeTT.jpg" alt="">
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
                        <img class="developer_avatar" src="../assets/images/avatars/Cha-Shao.png" alt="">
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
            </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.card_icon {
  width: 25px;
}
</style>