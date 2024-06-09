import { onMounted, ref } from "vue";

export function useMessage(initialMessage: string) {
  const message = ref(initialMessage);

  function changeMessage(newMessage: string) {
    message.value = newMessage;
  }

  const mounted = onMounted(() => console.log("This is mounted From Composition API"))

  return {
    message,
    changeMessage,
    mounted
  };
}
