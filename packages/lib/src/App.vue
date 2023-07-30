<script setup lang="ts">
import { Lib } from './components'
</script>

<template>
  <section :class="$style['main-section']">
    <Lib msg="Vite + Vue3" />
  </section>
</template>

<style module lang="scss">
.main-section {
  box-sizing: border-box;
  height: calc(100vh - 2rem);
  margin: 1rem;
  border: 2px dashed #ccc;
}
</style>
