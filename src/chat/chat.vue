<template>
  <div class="diva">
    <div class="div">
      <div class="d1 d-flex">
        <router-link to="/"
          ><i class="fa-solid fa-arrow-left fs-3 py-4 px-4 text-white"></i>
        </router-link>
        <div class="d-flex">
          <img
            src="https://png.pngitem.com/pimgs/s/537-5371524_cool-panda-profile-hd-png-download.png"
            alt=""
            class="my-3 mx-3 ms-5"
          />
          <h1 class="px-3 py-4 fs-3 text-white">Firdavs</h1>
        </div>
      </div>
      <i
        class="fa-regular fa-paper-plane fs-3"
        style="
          color: #ffffff;
          position: fixed;
          top: 88%;
          left: 72%;
          cursor: pointer;
        "
        @click="send"
      ></i>
      <form class="d2">
        <input
          type="text"
          class="input text-white"
          placeholder="Xabar Yuborish"
          autocomplete="off"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let input = document.querySelector(".input");

function send() {
console.log(input.value);
}

// onMounted(()=>{
//   if (message.value === ' ') {
//   console.log('input clear');
// }if (message.value !== ' ' ){
// document.querySelector('.input').classList.add('fa-bounce');
// }
// })
</script>
<!-- fa-bounce -->

<style scoped>
.diva {
  width: 100%;
  height: 1200px;
  background-color: #240145;
}
.div {
  width: 50%;
  height: 100%;
  background-color: #4e0492;
  overflow: auto;
  margin: auto;
}
.d1 {
  position: fixed;
  width: 50%;
  height: 10%;
  background-color: #240145;
  border: 1.5px solid rgb(0, 101, 135);
}
.d2 {
  position: fixed;
  background-color: aliceblue;
  width: 50%;
  height: 7%;
  top: 93%;
  background-color: #240145;
}
input {
  background-color: #240145;
  border: 1.5px solid rgb(0, 101, 135);
  width: 100%;
  height: 100%;
  padding-left: 3%;
  font-family: Poppins, sans-serif;
}
img {
  border-radius: 50%;
  width: 65px;
  height: 65px;
}

/* Responsive 385px */

@media (max-width: 385px) {
  .div {
    width: 100%;
  }
  .d1 {
    width: 100%;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 0px !important;
    margin-top: 10px !important;
  }
  .d2 {
    width: 100% !important;
    height: 8%;
    top: 92%;
  }
  .fa-paper-plane {
    top: 86% !important;
    left: 87% !important;
  }
}
/* Responsive 576px */
@media (max-width: 576px) {
  .div {
    width: 100%;
  }
  .d1 {
    width: 100%;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 0px !important;
    margin-top: 10px !important;
  }
  .d2 {
    width: 100% !important;
    height: 8%;
    top: 92%;
  }
}
</style>
