<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue';
import MessageMixin from '@/mixins/messageMixin';

export default defineComponent({
    mixins: [MessageMixin] as any,
    

    mounted() {
      const test = this as any
      console.log(test.message)
    }
});
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
