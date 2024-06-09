<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import {messageMixin} from '@/mixins/messageMixin';

export default defineComponent({
    mixins: [messageMixin],
    

    mounted() {
      this.message = 'Updated'
    }
});
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
