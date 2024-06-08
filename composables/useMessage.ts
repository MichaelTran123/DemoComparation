import { computed, ref } from "vue";

export function useMessage() {
  const message = ref('Hello from Composition API!');

  function changeMessage() {
    message.value = 'Message changed by Composition API!';
  }

  const abc = computed(() => 'hello');

  return {
    message,
    changeMessage,
    abc
  };
}
