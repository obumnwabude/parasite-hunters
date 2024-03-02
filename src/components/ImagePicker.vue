<script setup>
const emit = defineEmits(['hunt']);
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
const image = ref(null);
const isDragging = ref(false);
const isMobile =
  /(android|webos|iphone|ipad|ipod|blackberry|windows phone)/.test(
    navigator.platform
  );
const picker = ref(null);
const pickedImageSrc = ref('');
const toast = useToast();

const pickedImage = (file) => {
  if (!file) return;
  if (!['image/png', 'image/jpg', 'image/jpeg'].some((a) => file.type == a)) {
    toastError('Only .jpeg, .jpg, & .png');
  } else if (file.size > 2000000) {
    toastError('2MB Max, please!');
  } else {
    image.value = file;
    pickedImageSrc.value = URL.createObjectURL(file);
  }
};

const predict = () => {
  if (!image.value) {
    toastError('Please select an image');
  } else {
    emit('hunt', image.value);
  }
};

const toastError = (detail) => {
  toast.add({ severity: 'error', summary: 'Error', detail, life: 5000 });
};

// gotten from https://stackoverflow.com/a/18650828/13644299
const convertBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
</script>

<template>
  <div class="text-center">
    <h2 class="mb-4 text-2xl">Welcome!</h2>
    <p class="mb-4">
      Parasite Hunters uses Microsoft AI to improve Health. We want to make it
      easy for health practitioners to make diagosis. They can easily tell which
      parasite is causing harm with the help of AI.
    </p>
    <p class="mb-4">Pick a parasite image and click hunt for a prediction.</p>
    <div></div>

    <form
      novalidate
      @submit.prevent="predict"
      class="mx-auto flex flex-col p-2 rounded-lg"
    >
      <input
        type="file"
        ref="picker"
        accept=".jpg, .jpeg, .png"
        @change="pickedImage($event.target.files[0])"
      />
      <div
        box
        role="button"
        class="bg-neutral-700 rounded-xl mb-4 flex flex-col p-8 items-center"
        @click="picker.click"
        @dragover.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="pickedImage($event.dataTransfer.files[0])"
      >
        <template v-if="!image">
          <img src="/assets/gallery.svg" alt="" class="w-20 mb-2" />
          <template v-if="!isDragging">
            <p class="mb-2">
              <span>Click to Select</span
              ><span v-if="!isMobile"> or Drag and Drop</span>
            </p>
            <p class="text-xs">
              Supported: .jpeg .jpg & .png<br />Max. File size: 2MB
            </p>
          </template>
          <p v-if="isDragging" primary>Drop Here</p>
        </template>
        <template v-if="image">
          <img :src="pickedImageSrc" alt="" class="mb-4 h-28" />
          <p class="text-xs">
            <span>{{ image.name }}</span
            ><br />
            <span>{{ convertBytes(image.size) }}</span>
          </p>
        </template>
      </div>
      <div class="flex justify-end">
        <Button label="Hunt" severity="success" type="submit" />
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  min-width: 256px;
  max-width: 384px;
}

input[type='file'] {
  height: 0;
  margin-bottom: 0;
  padding: 0;
  width: 0;
}

[box] {
  cursor: pointer;
}
</style>
