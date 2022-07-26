<script setup lang="ts">
// import Navbar from './components/Navbar.vue';
import Time from './components/Time.vue';
import Search from './components/Search.vue';
// import Tools from './components/Tools.vue';
import { KeyboardDoubleArrowDownRound } from '@vicons/material';
</script>

<template>
  <!-- <Navbar/> -->
  <n-message-provider>
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
          <div>
            <n-space justify="center">
              <n-icon size="1rem" style="vertical-align: -10%;">
                <KeyboardDoubleArrowDownRound/>
              </n-icon>
              <div>
                下滑查看更多
              </div>
            </n-space>
          </div>
        </div>
      </div>
      <div style="margin-top: 100vh;"></div>
      <!-- <Tools/> -->
      <router-view/>
    </div>
  </n-message-provider>
</template>

<style scoped>
.time {
  font-size: 64px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--gray-8);
  font-weight: bold;
  font-family: "Microsoft Yahei Light","Microsoft Yahei","PingFang SC","Helvetica Neue",Helvetica,Tahoma,Arial,sans-serif;;
}

/* .mc-input_box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mc-input {
  font-family: Mc;
  outline: none;
  background-color: #000;
  border: #A0A0A0 2px solid;
  color: #FFF;
  font-size: 1.3rem;
  padding: 10px;
  
} */

/* .mc-button {
  font-family: Mc;
  font-size: 1.3rem;
  padding: 8px 55px;
  color: #FFF;
  outline: #000 2px solid;
  background-color: #6F6F6F;
  border-left: #AAAAAA 2px solid;
  border-top: #AAAAAA 2px solid;
  border-right: #585858 2px solid;
  border-bottom: #585858 4px solid;
}

.mc-button:active {
  color: #FFFFA0;
  background-color: #7E88BF;
  border-left: #BEC7FF 2px solid;
  border-top: #BEC7FF 2px solid;
  border-right: #5C669D 2px solid;
  border-bottom: #5C669D 4px solid;
} */

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
  /* left: 0; */
  width: 100%;
  text-align: center;
  margin: 20px 0;
  color: var(--gray-6);
  font-size: 1rem;
}
</style>
