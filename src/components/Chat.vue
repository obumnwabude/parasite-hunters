<script setup>
import Button from 'primevue/button';
</script>

<template>
  <div
    class="rounded-[24px] p-2 border border-neutral-300 dark:border-neutral-600 flex flex-col grow -mb-16"
  >
    <div
      class="rounded-[16px] border border-neutral-300 dark:border-neutral-600 p-4 pb-10 flex flex-col grow"
    >
      <h2 class="text-xl font-bold mb-4">Ask AI</h2>
      <form @submit.prevent class="mt-auto relative">
        <span
          class="block my-4 border-t border-neutral-300 dark:border-t-neutral-600"
        ></span>
        <div
          class="rounded-lg p-1 max-h-20 border-2 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-900 flex items-end"
        >
          <span
            class="self-stretch grow outline-none overflow-auto p-1"
            role="textbox"
            contenteditable
          ></span>
          <Button
            icon="pi pi-arrow-up"
            severity="success"
            type="submit"
            raised
            rounded
            aria-label="Send"
            send-button
            :pt="{ root: { style: { scale: 0.75, 'min-width': '48px' } } }"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
[contenteditable]:empty::before {
  content: 'Type your message here ...';
  color: gray;
}
</style>
