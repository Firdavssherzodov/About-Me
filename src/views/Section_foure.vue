<template>
  <section class="diva" id="portfolio">
    <p
      class="text-center fs-6 fw-bold p1 py-4"
      style="color: #8c8989; font-family: Poppins, sans-serif"
    >
      My Recent Works
    </p>
    <h1
      class="text-center pb-5 h11"
      style="color: white; font-size: 2rem; font-family: Poppins, sans-serif"
    >
      Portfolio
    </h1>

    <div class="section">
      <!-- 1 -->
      <div class="div">
        <img src="../../images/site2.png" alt="" />
        <a href="https://shoping-com.netlify.app/">
          <button
            type="button"
            class="btn btn-light p-3 my-3 mx-3"
            style="color: #240145"
          >
            View
          </button>
        </a>
      </div>
      <!-- 2 -->

      <div class="div">
        <img src="../../images/site1.png" alt="" />
        <a href="https://turon-it-academy.netlify.app/" target="_blank">
          <button
            type="button"
            class="btn btn-light p-3 my-3 mx-3"
            style="color: #240145"
          >
            View
          </button>
        </a>
      </div>
      <!-- 3 -->
      <div class="div">
        <img src="../../images/site3.png" alt="" />
        <a href="https://samvettex-uz.netlify.app/">
        <button
          type="button"
          class="btn btn-light p-3 my-3 mx-3"
          style="color: #240145"
        >
          View
        </button>
      </a>
      </div>
      <!-- 4 -->
      <div class="div">
        <img src="../../images/site4.png" alt="" />
        <button
          type="button"
          class="btn btn-light p-3 my-3 mx-3"
          style="color: #240145"
        >
          View
        </button>
      </div>
      <!-- 5 -->
      <div class="div">
        <img src="../../images/site5.png" alt="" />
        <button
          type="button"
          class="btn btn-light p-3 my-3 mx-3"
          style="color: #240145"
        >
          View
        </button>
      </div>
      <!-- 6 -->
      <div class="div">
        <img src="../../images/site6.jpg" alt="" />
        <a href="https://firdavs-571.netlify.app/">
          <button
            type="button"
            class="btn btn-light p-3 my-3 mx-3"
            style="color: #240145"
          >
            View
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.diva {
  width: 100%;
  height: 1000px;
  background-color: #240145;
}
.section {
  width: 70%;
  height: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.div img {
  width: 95%;
  height: 75%;
  display: block;
  margin: auto;
  padding: 10px;
  border-radius: 1.2rem;
}
.div {
  width: 30%;
  height: 62%;
  border-radius: 1rem;
  background-color: #4e0492;
  margin: 1vh;
}
.div:hover {
  transition: 0.5s;
  background-color: #240145;
  border: 1px solid rgb(0, 101, 135);
}
/* Responsive 385px */
@media (max-width: 385px) {
  .diva {
    margin-top: -26vh;
    height: auto;
  }
  .section {
    width: 100%;
    display: block;
  }
  .div {
    width: 80%;
    margin: 2vh auto;
  }
  .btn {
    font-size: 0.7rem;
    padding: 0 !important;
    width: 70px;
    height: 40px;
  }
}
/* Responive 576px */
@media (max-width: 576px) {
  .diva {
    margin-top: -30vh;
    height: auto;
  }
  .section {
    width: 100%;
    display: block;
  }
  .div {
    width: 80%;
    margin: 2vh auto;
  }
  .btn {
    font-size: 0.7rem;
    padding: 0 !important;
    width: 70px;
    height: 40px;
  }
}
/* Responsive 768px */
@media (max-width: 768px) {
  .diva {
    margin-top: -30vh;
    height: auto;
    padding-bottom: 11vh;
  }
  .section {
    width: 100%;
    display: block;
  }
  .div {
    width: 80%;
    margin: 2vh auto;
  }
}
</style>
