<template>
  <div class="container">
    <div>Home View</div>
    <div>
      count : {{ store.counter }}
      <button class="button" @click="increase">Click</button>
      <button class="button" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';

const store = useStore();

const increase = () => {
  store.$patch({
    counter: store.counter + 1,
  });
};
const reset = () => {
  store.$reset();
};
</script>

<style scoped>
.container {
  padding: 15px;
}
.button {
  padding: 8px;
  margin: 0 4px;
}
</style>
