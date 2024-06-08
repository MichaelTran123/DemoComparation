<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
    <p>{{ abc }}</p>
  </div>
</template>

<script lang="ts">
import { useMessage } from '@/composables/useMessage';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const { message, changeMessage, abc } = useMessage();
    return {
      message,
      changeMessage,
      abc
    };
  },
});
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
