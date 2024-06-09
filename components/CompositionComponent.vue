<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage('your Message is changed')">Change Message</button>
    <!-- <p>{{ abc }}</p> -->
  </div>
</template>

<script lang="ts">
import { useMessage } from '@/composables/useMessage';
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  props: {
    propA: {
      type: String,
      default: "This is propA"
    },
    initialMessage: {
      type: String,
      default: 'This is default message',
      required: false
    }
  },

  setup(props) {
    const { initialMessage } = toRefs(props);
    const { message, changeMessage, mounted: mountedAPI} = useMessage(initialMessage.value);
    
    return {
      message,
      changeMessage,
      mountedAPI
    };
  },

  
  mounted() {
    this.mountedAPI
    this.message = 'updated now'
    // debugger
  }
});
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
