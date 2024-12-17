<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="p-4 mt-auto text-center bg-neutral-100 dark:bg-neutral-800">
    <p>
      All Rights Reserved &copy; {{ year }}
      Parasite Hunters
    </p>
  </footer>
</template>
