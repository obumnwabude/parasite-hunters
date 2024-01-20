<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div
    container
    class="flex flex-col min-h-screen bg-neutral-800 text-neutral-100"
  >
    <header
      class="shadow p-4 pl-8 fixed top-0 left-0 right-0 z-10 bg-neutral-800"
    >
      <h1 class="text-xl font-bold">Parasite Hunters</h1>
    </header>

    <main class="p-8">
      <RouterView />
    </main>

    <footer class="p-4 mt-auto text-center">
      <p>
        All Rights Reserved &copy; {{ year }}
        Parasite Hunters
      </p>
    </footer>
  </div>
</template>

<style scoped>
[container] {
  padding-top: 64px;
}

header {
  height: 64px;
}

footer {
  box-shadow: 0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1);
}
</style>
