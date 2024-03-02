<script setup>
import ImagePicker from '@/components/ImagePicker.vue';
import { useApiStore } from '@/stores/api';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';

const api = useApiStore();
const isHunting = ref(false);
const list = ref(null);
const toast = useToast();
const hunt = async (image) => {
  isHunting.value = true;
  const result = await api.predict(image);
  if (result) {
    if ('predictions' in result) {
      predictions.value = result.predictions;
      setTimeout(
        () =>
          document
            .querySelector('[list]')
            ?.scrollIntoView({ behavior: 'smooth' }),
        500
      );
    } else {
      toast.add({
        severity: 'error',
        summary: 'error',
        detail: `Couldn't find predictions in response`,
        life: 5000
      });
      predictions.value = [];
    }
  } else {
    predictions.value = [];
  }
  isHunting.value = false;
};
const predictions = ref([]);
</script>

<template>
  <div loader v-if="isHunting">
    <p class="text-bold text-lg text-center mb-12">Hunting ...</p>
    <div></div>
  </div>

  <div
    :class="
      'mb-20 md:flex ' + (predictions.length == 0 ? 'justify-center' : '')
    "
    v-else
  >
    <div class="mb-16 md:mb-0 md:mr-12 basis-1/2 relative">
      <div class="p-2 sticky top-0">
        <ImagePicker @hunt="hunt" />
      </div>
    </div>
    <div class="max-w-sm mx-auto md:mx-0" list>
      <h2
        class="font-bold text-center text-xl mb-4"
        v-if="predictions.length > 0"
      >
        Predictions
      </h2>
      <div v-for="p of predictions" class="mb-4 p-2 rounded-md border">
        <div class="flex justify-between p-4 bg-neutral-700 rounded-md">
          <p>{{ p.tagName }}</p>
          <p class="font-bold text-lg">
            {{ parseFloat((p.probability * 100).toFixed(2)) }}%
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
[loader] {
  margin: 96px auto 64px auto;
}

[loader] div {
  background-image: url('/assets/spinner.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 144px;
  width: 144px;
}
</style>
