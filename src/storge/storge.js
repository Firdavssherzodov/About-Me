import { ref } from " vue";

const Message = ref([
  {
    id: "1",
    message: "Salom",
  },
  {
    id: "2",
    message: "salom",
  },
]);



localStorage.setItem("chat",JSON.stringify(Message));

export { Message };
