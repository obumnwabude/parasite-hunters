<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { useThemeStore } from '@/stores/theme';
import Toast from 'primevue/toast';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

onMounted(() => {
  // this forces the theme refresh when the app loads
  useThemeStore();
});
</script>

<template>
  <div
    container
    class="flex flex-col min-h-screen bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-neutral-100"
  >
    <Header />

    <main class="p-8 grow flex flex-col">
      <RouterView />

      <Toast />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
[container] {
  padding-top: 64px;
}
</style>
