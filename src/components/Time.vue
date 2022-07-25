<script setup lang="ts">
import { ref, onMounted } from 'vue'

const nowTime = ref('')

const formatTime = (data: Date | string) => {
  const date = new Date(data)
  let h: number | string = date.getHours()
  h = h < 10 ? '0' + h : h
  let minute: number | string = date.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  // let second: number | string = date.getSeconds()
  // second = second < 10 ? '0' + second : second
  return h + ':' + minute
};

onMounted(() => {
  setInterval(() => {
    nowTime.value = formatTime(new Date())
  })
});

</script>

<template>
  <div>{{ nowTime }}</div>
</template>

<style scoped>

</style>