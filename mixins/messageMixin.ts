import Vue from "vue";

export default Vue.extend({
    data() {
      return {
        message: 'Hello from Mixin!'
      }
    },
    methods: {
      changeMessage() {
        this.message = 'Message changed by Mixin!';
      }
    }
  })
  