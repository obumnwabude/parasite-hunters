<script setup lang="ts">
import ThemeMenu from '@/components/ThemeMenu.vue';
</script>

<template>
  <header
    class="shadow p-4 pl-8 fixed top-0 left-0 right-0 z-10 bg-neutral-100 dark:bg-neutral-800 flex justify-between"
  >
    <h1 class="text-xl font-bold">Parasite Hunters</h1>
    <ThemeMenu />
  </header>
</template>

<style scoped>
header {
  height: 64px;
}
</style>
