<template>
  <!-- First div -->
  <div class="diva">
    <div class="div1">
      <p class="p text-black">Hello</p>
      <h1 class="h1 text-black py-1">Sherzodov Firdavs</h1>
      <p class="p text-black">Web Developer</p>
      <Button label="Info" severity="info" outlined  class='rounded-7'>
        About Me
      </Button>
    </div>
    <!-- Second div -->
    <div class="div2">
      <div class="d1">
        <div class="d2"></div>
      </div>
    </div>
  </div>
</template>

<script setup> 

import 'primevue/resources/themes/lara-light-teal/theme.css'

import Button from 'primevue/button';

</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  color: white !important;
}
 
.diva {
  width: 80%;
  height: 65vh;
  margin-left: 21vh;
  backdrop-filter: blur(5px);
  border-radius:5%;
}
.div1 {
  width: 40%;
  height: 800px;
  height: auto;
  float: left;
  margin-top: 10rem;
  margin-left: 5em;
}
.p {
  font-size: 1.5rem;
 text-shadow: white -10px -10px 30px;
}
.h1 {
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 4em;
}
.div2 {
  width: 50%;
  height: 100%;
  float: right;
}
.d1 {
  width: 500px;
  height: 500px;
  margin-left: 15%;
  margin-top: 5%;
  border-radius: 10% / 50%;
  transform: rotate(-10deg);
  background-color: rgb(255, 255, 255);
  border: 1px solid white;
}
.d2 {
  width: 500px;
  height: 500px;
  border: solid;
  border-radius: 10% / 50%;
  transform: rotate(20deg);
  background-image: url(../../images/about.jpg);
  background-size: 100% 100%;
}
.d1:hover{
    transform: rotate(0deg);
    transition: 1s;
}
.d2:hover {
  transform: rotate(0deg);
  transition: 1s;
  border: 3.8px solid rgb(255, 255, 255);
}

</style>
