import Vue, { defineComponent } from "vue";

export const messageMixin = defineComponent({
    data() {
      return {
        message: 'Hello from Mixin!'
      }
    },
    mounted() {
      console.log('This is mounted from')
    },

    computed: {
      computedString() {
        return 'This computed String'
      }
    },

    methods: {
      changeMessage() {
        this.message = 'Message changed by Mixin!';
      }
    }
  })
  