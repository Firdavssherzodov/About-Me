<template>
  <header class="diva">
    <div class="div">
      <h1 class="fs-3 text-center text-white">Ro'yxatan o'ting</h1>
      <form class="py-3" @submit.prevent="Login">
        <label for="username" class="text-white py-2">Foydalanuvchi nomi</label>
        <br />
        <input type="text" id="username" v-model="username" />
        <br />
        <label for="password" class="text-white py-3">Paroli</label>
        <br />
        <input type="text" id="password" v-model="password" autocomplete="off"/>
        <br />
        <br />
        <Button class="btn btn-primary my-4 px-5" type="submit"
          >k i r i s h
        </Button>
      </form>
    </div>
  </header>

        <Toast class="text-danger"/>
      

</template>

<script setup>
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let username = ref("mor_2314");
let password = ref("83r5^_");
function Login() {
  axios.post("https://fakestoreapi.com/auth/login", {
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        router.push("/home");
      } else {
      showError()
      }
    });
}



const toast = useToast();

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail:"username or password is incorrect", life: 3000 });
};
</script>

<style scoped>
.diva {
  width: 100%;
  height: 930px;
  background-color: #240145;
  border: 1px solid #240145;
}
.div {
  width: 30%;
  height: 500px;
  border: 2px solid rgb(0, 101, 135);
  background-color: #4e0492;
  margin: 20vh auto;
  border-radius: 1.2rem;
  padding: 10vh;
}

.btn {
  background-color: #240145;
  width: 100%;
}
.btn:hover {
  transition: 1s;
  background-color: rgb(0, 68, 255);
}
input {
  background-color: #240145;
  border: 1.2px solid rgb(0, 101, 135);
  border-radius: 0.5rem;
  width: 100%;
  height: 40px;
  color: #fff;
}
@media (max-width: 385px) {
  .div {
    width: 100%;
    height: 400px !important;
    padding: 5vh;
    margin: 15vh auto;
  }
}
@media (max-width: 576px) {
  .div {
    width: 100% !important;
    height: 500px;
    margin: 15vh auto;
  }
}
@media (max-width: 768px) {
  .div {
    width: 70%;
    height: 500px;
    margin: 15vh auto;
  }
}
</style>
