import { defineStore } from 'pinia';
import { useToast } from 'primevue/usetoast';

export const useApiStore = defineStore('api', () => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const predictionKey = import.meta.env.VITE_PREDICTION_KEY;
  const toast = useToast();

  const predict = async (image) => {
    return new Promise(async (resolve, _) => {
      try {
        const response = await fetch(imageUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/octet-stream',
            'Prediction-Key': predictionKey
          },
          body: image
        });
        if (response.status != 200) throw 'Server Error';
        resolve(await response.json());
      } catch (error) {
        const detail =
          error['message'] == 'Failed to fetch' ? 'Network Error' : `${error}`;
        toast.add({ severity: 'error', summary: 'Error', detail, life: 5000 });
        resolve(null);
      }
    });
  };

  return { predict };
});
