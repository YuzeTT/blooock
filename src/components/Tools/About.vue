<script setup lang="ts">
import package_ from '../../../package.json'

const openUrl = (url:string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div style="text-align: center;">
    <img src="../../assets/images/logo.png" alt="" style="width: 200px;margin: 0 auto;display: flex;">
    <h2 style="color: var(--gray-8);">关于</h2>
  </div>
  <div>
    <n-grid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="12" :y-gap="12">
      <n-grid-item>
        <n-statistic label="当前版本">
          v{{ package_.version }}
        </n-statistic>
      </n-grid-item>
    </n-grid>
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
        <n-card embedded :bordered="false" style="text-align: center; padding: 20px;">
          <img class="developer_avatar" src="../../assets/images/avatars/YuzeTT.jpg" alt="">
          <div style="margin: 5px 0; font-size: 1.2rem; font-weight: bold; color: var(--gray-8)">
            YuzeTT
          </div>
          <div style="color: var(--gray-7);margin: 5px 0 15px 0;">
            核心开发者
          </div>
          <div>
            <n-space justify="center">
              <n-button tertiary circle @click="openUrl('https://github.com/YuzeTT')">
                <template #icon>
                  <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32z" fill="currentColor"></path></svg></n-icon>
                </template>
              </n-button>
              <n-button tertiary circle @click="openUrl('https://space.bilibili.com/102046047')">
                <template #icon>
                  <n-icon><svg t="1659087131560" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1947" width="200" height="200"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="1948"></path></svg></n-icon>
                </template>
              </n-button>
            </n-space>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>
    
  </div>
  <div>
    <h3 style="color: var(--gray-7);">贡献者</h3>
    <!-- <n-grid cols="1 s:2 m:3 l:4 xl:5 2xl:6" responsive="screen" :x-gap="12" :y-gap="12">
      <n-grid-item>
        <n-card class="developer_card" embedded :bordered="false">
          <img class="developer_avatar" src="../../assets/images/avatars/YuzeTT.jpg" alt="">
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
        </n-card>
      </n-grid-item>
      <n-grid-item>
        <div class="developer_card">
          <img class="developer_avatar" src="../../assets/images/avatars/Cha-Shao.png" alt="">
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
    </n-grid> -->
    <n-card embedded :bordered="false">
      <n-space>
        <!-- <img class="developer_avatar" src="../../assets/images/avatars/YuzeTT.jpg" alt=""> -->
        <img @click="openUrl('https://github.com/Cha-Shao')" class="contributor_avatar" src="../../assets/images/avatars/Cha-Shao.png" alt="">
      </n-space>
    </n-card>
  </div>
</template>

<style scoped>
.developer_card {
  /* background-color: var(--blue-sec); */
  /* border: 1px solid var(--gray-4); */
  /* padding: 10px; */
  border-radius: 10px;
  display: flex;
  /* gap: 10px; */
  /* align-items: center; */
}

.developer_avatar {
  width: 80px;
  border-radius: 999px;
}

.contributor_avatar {
  width: 50px;
  border-radius: 999px;
}

.developer_name {
  font-size: 20px;
  color: var(--gray-7);
}
</style>