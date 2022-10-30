<template>
  <div>{{ store.msg }}</div>
</template>

<script setup>
import { userStore } from "./store/user";

const store = userStore()
</script>

<style scoped>

</style>
