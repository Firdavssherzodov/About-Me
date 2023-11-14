<template>
  <div class="diva">
    <p
      class="text-center fs-6 fw-bold p1 py-4"
      style="color: #8c8989; font-family: Poppins, sans-serif"
    >
      Aloqa uchun
    </p>
    <h1
      class="text-center pb-5 h11"
      style="color: white; font-size: 1.9rem; font-family: Poppins, sans-serif"
    >
      Men Bilan Bog'laning
    </h1>
    <div class="div">
      <!-- div1 -->
      <div class="div1">
      <a href="https://frontendhtml1234@gmail.com">
        <div class="d1">
          <i
            class="fa-regular fa-envelope fs-3 py-3"
            style="color: #fff; margin: auto"
          ></i>
          <h6 class="text-center text-white py-1">Email</h6>
          <p class="text-center text-white p-1">frontendhtml1234@gmail.com</p>
          <p class="text-center text-white py-1 pb-3">Xabar Yuborish</p>
        </div>
      </a>
        <a href="https://t.me/Firdavss_571">
          <div class="d1">
            <i
              class="fa-brands fa-telegram fs-2 py-3"
              style="color: #fcfcfc"
            ></i>
            <h6 class="text-center text-white py-1">Telgram</h6>
            <p class="text-center text-white p-1">Firdavs sherzodov</p>
            <p class="text-center text-white py-1 pb-3">Xabar Yuborish</p>
          </div>
        </a>
        <a href="http://instagarm.com/firdavs_637">
          <div class="d1">
            <i
              class="fa-brands fa-instagram fs-2 py-3"
              style="color: #ffffff"
            ></i>
            <h6 class="text-center text-white py-1">Instagram</h6>
            <p class="text-center text-white p-1">Firdavs sherzodov</p>
            <p class="text-center text-white py-2 pb-3">Xabar Yuborish</p>
          </div>
        </a>
      </div>
      <!-- div2 -->
      <div id="div2">
        <form >
        <input type="text" placeholder="Ismingizni" class="px-5 fs-8 py-4" />
        <br />
        <input type="email" placeholder="Elektron Pochta" class="px-5 fs-8 py-4" />
        <br />

        <input type="text" placeholder="Xabar" class="px-5 fs-8 Xabar py-5" />
        <br />

        <button
          type="button"
          class="btn btn-light p-3 my-3 mx-3"
          style="color: #240145"
        >
          Xabar Yuborish
        </button>
      </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.diva {
  margin-top: -10vh;
  width: 100%;
  height: 800px;
  background-color: #240145;
}
.div1 {
  width: 33%;
  height: 100%;
}
#div2 {
  width: 60%;
  height: 80%;
}
.d1 {
  margin: 2vh;
  width: 90%;
  height: 30%;
  background-color: #4e0492;
  border-radius: 40px;
  text-align: center;
}
.d1:hover {
  background-color: #240145;
  border: 1.2px solid rgb(0, 101, 135);
}
.div {
  margin: auto;
  width: 77% !important;
  height: 70%;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-evenly;
}
input{
  width: 90%;
  height: 15%;
  margin: 2vh;
  background-color: #4e0492;
  border: 2px solid rgb(0, 101, 135) !important;
  border-radius: 10px;
  border: none;
  color: #fff !important;
}
.Xabar {
  height: 35%;
}
/* Responsive 385px */
@media (max-width: 385px) {
  .diva {
    width: 100% !important;
    height: auto;
  }
  input {
    width: 90%;
    height: 50px;
    padding: 5px !important;
  }
  .Xabar{
    height: 100px;
  }
  .div {
    width: 90% !important;
    height: auto;
    display: block;
    font-size: 0.9rem;
  }
  .div1 {
    width: 100%;
  }
  .d1 {
    width: 90%;
  }
  #div2 {
    margin: auto;
    width: 90% !important;
  }
}
/* Resposive 576px */
@media (max-width: 576px) {
  .diva {
    width: 100% !important;
    height: auto;
  }
  input {
    width: 90%;
    height: 50px;
    padding: 5px !important;
  }
  .Xabar{
    height: 100px;
  }
  .div {
    width: 90% !important;
    height: auto;
    display: block;
    font-size: 0.9rem;
  }
  .div1 {
    width: 100%;
  }
  .d1 {
    width: 90%;
  }
  #div2 {
    margin: auto;
    width: 90% !important;
  }
}
/* Resposive 768px */
@media (max-width: 768px) {
  .diva {
    width: 100% !important;
    height: auto;
  }
  input {
    width: 90%;
    height: 60px;
    padding: 5px !important;
  }
  .Xabar{
    height: 120px;
  }
  .div {
    width: 90% !important;
    height: auto;
    display: block;
    font-size: 0.9rem;
  }
  .div1 {
    width: 100%;
  }
  .d1 {
    width: 90%;
  }
  #div2 {
    margin: auto;
    width: 95% !important;
  }
}
</style>
