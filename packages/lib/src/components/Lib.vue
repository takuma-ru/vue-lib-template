<template>
  <h1 :class="$style['read-the-docs']">Lib test</h1>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style module lang="scss">
.read-the-docs {
  margin: 1rem 0;
  font-size: 2rem;
}
</style>
