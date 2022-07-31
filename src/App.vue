<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Time from './components/Time.vue';
import Search from './components/Search.vue';
import { KeyboardDoubleArrowDownRound } from '@vicons/material';
import ReloadPrompt from './components/ReloadPrompt.vue';
import package_ from '../package.json';

console.log(
  `%c Blooock %c v${package_.version} %c`,
  'background:#f97316; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
  'background:#ffedd5; padding: 1px; border-radius: 0 3px 3px 0; color: rgba(15, 23, 42, 0.85)',
  'background:transparent'
)
</script>

<template>
  <!-- <Navbar/> -->
  <n-message-provider>
    <ReloadPrompt/>
    <div>
      <div>
        <n-back-top :right="20" />
        <div class="home">
          <div class="time">
            <Time></Time>
          </div>
          <div class="box">
            <div style="padding: 15px;">
              <Search/>
            </div>
          </div>
          <div class="bottom">
            <!-- <div>
              <n-space justify="center">
                <n-icon size="1rem" style="vertical-align: -10%;">
                  <KeyboardDoubleArrowDownRound/>
                </n-icon>
                <div>
                  下滑有惊喜
                </div>
              </n-space>
            </div> -->
            <div class="white_bar"></div>
          </div>
        </div>
        <div style="margin-top: 100vh;"></div>
      </div>
      <div id="tools">
        <router-view/>
      </div>
    </div>
  </n-message-provider>
</template>

<style scoped>
.time {
  font-size: 64px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--gray-8);
  font-weight: bold;
  font-family: "Microsoft Yahei Light","Microsoft Yahei","PingFang SC","Helvetica Neue",Helvetica,Tahoma,Arial,sans-serif;;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin: 20px 0;
  color: var(--gray-6);
  font-size: 1rem;
}

.white_bar {
  height: 5px;
  background: var(--gray-5);
  width: 80px;
  margin: 0 auto;
  border-radius: 999px;
}
</style>
