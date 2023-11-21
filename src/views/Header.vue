<template>
  <header class="carda rounded-0 border-0" id="home">
    <p
      class="p text-center pt-5 fw-bold text-white fs-7"
      style="font-family: Poppins, sans-serif"
    >
      Salom Men
    </p>
    <h1 class="h11 text-center mt-2 text-white py-2">Firdavs Sherzodov</h1>
    <p
      class="text-center fs-6 fw-bold p2 py-3"
      style="color: #8c8989; font-family: Poppins, sans-serif"
    >
      Frontend Dasturchisi
    </p>
    <a href="#contac"
      type="button"
      class="btn btn-light p-3 m-auto"
      style="color: #240145"
    >
      Bog'lanish
    </a>
  </header>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.carda {
  width: 100%;
  height: 300px;
  background-color: #240145;
}
.h11 {
  font-family: Poppins, sans-serif;
  font-size: 2.5rem;
}
.btn {
  width: 130px;
  display: block;
}

@media screen and (max-width: 380px) {
  .h11 {
    font-size: 2rem;
  }
  .btn {
    width: 100px;
    height: 40px;
    font-size: 0.73rem;
    padding: 0 !important;
  }
  .p2 {
    font-size: 1.9rem;
    padding-top: 20px;
  }
  .p {
    font-size: 0.9rem;
  }
}
</style>
