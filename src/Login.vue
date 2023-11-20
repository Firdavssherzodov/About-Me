<template>
  <div class="diva">
    <div class="div">
      <form class="py-3" @submit.prevent="Login">
        <label for="username" class="text-white py-2">Name</label>
        <br />
        <input type="text" id="username" v-model="username" />
        <br />
        <label for="" class="text-white py-2">Familiya</label>
        <br />
        <input type="text" v-model="password" />
        <br />
        <!-- <Toast /> -->
        <Button class="btn btn-primary my-4" type="submit">login</Button>
      </form>
    </div>
  </div>    
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let username = ref("mor_2314");
let password = ref("83r5^_");
function Login() {
  axios
    .post("https://fakestoreapi.com/auth/login", {
      username: username.value,
      password: password.value,
    })
    .then((res) => {
        console.log(res);
      if (res.status === 200) {
        localStorage.setItem('token',res.data.token);
        router.push('/home');
       
      }else{
        console.log(res.data);
      }
    });
}

// import { useToast } from "primevue/usetoast";
//
// const toast = useToast();

// const showError = () => {
//     toast.add({ severity: 'error', summary: 'Error Message', detail: , life: 3000 });
// };
</script>

<style scoped>
.diva {
  width: 100%;
  height: 900px;
  background-color: #240145;
}
.div {
  width: 30%;
  height: 500px;
  border: 2px solid rgb(0, 101, 135);
  background-color: #4e0492;
  margin: auto;
  border-radius: 1.2rem;
  padding: 10vh;
}
.btn {
  background-color: #240145;
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
    .div{
        width: 100% !important  ;
        height: 400px;
    }
}
@media (max-width: 576px) {
    .div{
        width: 100% !important  ;
        height: 400px;
    }
}
</style>
