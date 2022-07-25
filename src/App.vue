<script setup lang="ts">
// import Navbar from './components/Navbar.vue';
import Search from './components/Search.vue';
</script>

<template>
  <!-- <Navbar/> -->
  <div>
    <div class="logo">
      <img src="./assets/images/home.png" alt="">
    </div>
    <div>
      <Search/>
    </div>
  </div>
</template>

<style scoped>
.logo {
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.logo img {
  width: 150px;
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
</style>
