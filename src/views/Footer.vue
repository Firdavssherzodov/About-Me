<template>
  <footer class="diva">
    <h1 class="text-center py-5" style="color: #240145">Firdavs Sherzodov</h1>
    <section class="div">
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#two">My experience</a>
      <a href="#khizmat">My Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contac">Contact</a>
    </section>
    <div class="div2 py-5">
      <span>
        <a href="https://frontendhtml1234@gmail.com"
          ><i
            class="fa-regular fa-envelope fs-5 py-3"
            style="color: #fff"
          ></i> </a
      ></span>
      <span>
        <a href="https://t.me/Firdavss_571" target="_blank">
          <i
            class="fa-brands fa-telegram fs-5 py-3"
            style="color: #fcfcfc"
          ></i></a
      ></span>
      <span>
        <a href="http://instagarm.com/firdavs_637" target="_blank">
          <i
            class="fa-brands fa-instagram fs-5 py-3"
            style="color: #ffffff"
          ></i> </a
      ></span>
      <span>
        <a href="https://www.facebook.com/home.php">
          <i
            class="fa-brands fa-facebook fs-5 py-3"
            style="color: #ffffff"
          ></i> </a
      ></span>
      <span>
        <a href="https://github.com/Firdavssherzodov" target="_blank">
          <i
            class="fa-brands fa-github fs-5 py-3"
            style="color: #ffffff"
          ></i> </a
      ></span>
    </div>
    <h1 class="text-center pt-4 pb-2" style="color: #240145; font-size: 0.8rem">
      © Creator. All rights reserved.
    </h1>
  </footer>
</template>

<script setup></script>

<style scoped>
.diva {
  width: 100%;
  height: 500px;
  background-color: #fff;
}
h1:hover {
  transition: 1s;
  color: #fff !important;
}

a {
  color: #240145 !important;
}
a:hover {
  transition: 1s;
  color: #fff !important;
}
.div {
  margin: auto;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
}
span {
  width: 17%;
  height: 15%;
  border-radius: 10px;
  background-color: #4e0492;
}
span::selection {
  display: none;
}
span:hover {
  transition: 0.3s;
  margin-top: -1vh;
}
.div2 {
  text-align: center;
  margin: auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 385px) {
  .diva {
    height: 650px;
  }
  h1 {
    padding-bottom: 10px !important;
  }
  .div {
    width: 100%;
    height: auto;
    display: block !important;
    text-align: center;
  }
  a {
    padding-top: 1.5vh;
    display: block !important;
  }
  .div2 {
    width: 60%;
    height: auto !important;
    margin: auto;
  }
  span {
    width: 17%;
    height: 70px;
  }

  p {
    padding: 40px !important;
  }
}
/* Responsive 576px */
@media (max-width: 576px) {
  .diva {
    height: 650px;
  }
  h1 {
    padding-bottom: 10px !important;
  }
  .div {
    width: 100%;
    height: auto;
    display: block !important;
    text-align: center;
  }
  a {
    padding-top: 1.5vh;
    display: block !important;
  }
  .div2 {
    width: 60%;
    height: auto !important;
    margin: auto;
  }
  span {
    width: 18%;
    height: 70px;
  }

  p {
    padding: 40px !important;
  }
}
</style>
