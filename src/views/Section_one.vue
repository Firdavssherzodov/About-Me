<template>
  <section class="diva" id="about">
    <p
      class="text-center fs-6 fw-bold p1 py-2"
      style="color: #8c8989; font-family: Poppins, sans-serif"
    >
      Ma'lumot
    </p>
    <h1
      class="text-center h11"
      style="color: white; font-family: Poppins, sans-serif"
    >
      Men Haqimda
    </h1>
    <div class="section_about">
      <div class="img_bg"></div>
      <div class="section_one">
        <div class="d1">
          <i
            class="fa-solid fa-medal fs-3 py-5"
            style="color: #ffffff; padding: 30% 40%"
          ></i>
          <p class="text-white t1">Tajriba 10+</p>
        </div>
        <div class="d1">
          <i
            class="fa-solid fa-user-group fs-4 py-5"
            style="color: #ffffff; padding: 30% 40%"
          ></i>
          <p class="text-white t1">Mijozlar 10+</p>
        </div>
        <div class="d1">
          <i
            class="fa-solid fa-list-check fs-3 py-5"
            style="color: #ffffff; padding: 30% 40%"
          ></i>
          <p class="text-white t1">Loyihalar 10+</p>
        </div>
        <p
          class="p1 p-4 fw-bold"
          style="color: #8c8989; font-family: Poppins, sans-serif"
        >
          Men Firdavs Sherzodov hozirda 17 yoshdaman axborot texnologiyalariga
          qiziqishim sababli 2023-yildan boshlab IT sohasiga kirib kelganman va
          web dasturlashni o'rganishni boshlaganman va hozir ham or'ganishni
          davom etirmoqdaman 5+ Real Loyihalar bilan ishlaganman.
        </p>
        <a href="#contac">
        <button
          type="button"
          class="btn btn-light p-3 m-auto"
          style="color: #240145 !important"
        >
        Bog'lanish
        </button>
      </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.diva {
  width: 100%;
  height: 700px;
  background-color: #240145;
}
.h11 {
  font-size: 2rem;
}
.p1 {
  font-family: "Courier", monospace sans-serif !important;
}
.section_one {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-around !important;
  align-items: center !important;
  width: 40%;
  height: auto;
}
.section_about {
  display: flex;
  justify-content: space-evenly;
  width: 87%;
  height: auto;
  margin: auto;
}
.img_bg {
  z-index: 11;
  width: 25%;
  height: 500px;
  border-radius: 20px;
  border: 0.1px solid white;
  background-image: url(../../images/about.home2.jpg);
  background-size: cover;
  /* background-position: center; */
  /* object-fit: cover; */
  transform: rotate(10deg);
}
.img_bg:hover {
  transform: rotate(0deg);
  transition: 1s;
}
.d1 {
  width: 25%;
  height: 150px;
  border: 1px solid;
  border-radius: 25px;
  background-color: #4e0492;
}
.d1:hover {
  background-color: #240145;
  border: 1px solid rgb(0, 101, 135);
  transition: 0.9s;
}
.fa-solid {
  display: inline-block;
}
.t1 {
  padding-left: 25% !important;
  margin-top: -30px;
}
.btn {
  width: 150px;
  height: 50px;
  font-size: 0.73rem;
  padding: 0 !important;
}
/* Responsive 380px  */
@media (max-width: 385px) {
  .diva {
    width: 100% !important;
    height: auto;
  }
  .section_about {
    display: block !important;
    width: 87%;
    height: auto;
    margin: auto;
  }
  .img_bg {
    width: 90% !important;
    height: 300px !important;
    border-radius: 20px;
    border: 0.1px solid white;
    background-image: url(../../images/about.home2.jpg);
    background-position: center;
    background-size: cover;
    transform: rotate(10deg);
    margin: 2.5vh auto;
  }
  .img_bg:active {
    transform: rotate(0deg) !important;
    transition: 1s !important;
  }

  .section_one {
    display: flex !important;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin: 8vh auto;
  }
  .d1 {
    width: 35%;
    display: block;
  }

  .fa-solid {
    font-size: 1.5rem !important;
    padding-bottom: 50px !important;
  }
  .t1 {
    padding: 0 !important;
    font-size: 0.7rem !important;
    display: block;
    text-align: center !important;
  }
  .p1 {
    text-align: center;
    width: 100% !important;
    font-size: 1rem;
    padding: 5px !important;
  }

  .btn {
    width: 100px;
    height: 50px;
    font-size: 0.73rem;
    padding: 0 !important;
    margin: auto 11vh !important;
  }
}
/* Responsive 576px  */
@media (max-width: 576px) {
  .section_about {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    display: block;
    width: 83%;
    height: auto;
    margin: auto;
  }
  .img_bg {
    width: 90%;
    height: 300px !important;
    border-radius: 20px;
    border: 0.1px solid white;
    background-image: url(../../images/about.home2.jpg);
    background-position: center;
    background-size: cover;
    transform: rotate(10deg);
    margin: 2.5vh auto;
  }
  .section_one {
    display: flex !important;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin: 8vh auto;
  }
  .d1 {
    width: 35%;
    display: block;
  }

  .t1 {
    padding: 0;
    display: block !important;
    text-align: center !important;
    font-size: 0.8rem;
  }

  .p1 {
    text-align: center;
    width: 100%;
    font-size: 1rem;
    padding: 15px !important;
  }
  .diva {
    width: 100%;
    height: 1000px;
    background-color: #240145;
  }
  .btn {
    width: 130px;
    display: block;
  }
  .fa-solid {
    font-size: 1.5rem !important;
    padding-bottom: 50px;
  }
}
/* /* Responsive 768px  */
/* @media (max-width: 768px) {
  .section_about {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    display: block;
    width: 83%;
    height: auto;
    margin: auto;
  }
  .img_bg {
    width: 90%;
    height: 250px;
    border-radius: 20px;
    border: 0.1px solid white;
    background-image: url(../../images/about.us.jpg);
    background-position: center;
    background-size: cover;
    transform: rotate(10deg);
    margin: 2.5vh auto;
  }
  .section_one {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin: 8vh auto;
  }
  .d1 {
    width: 30%;
    display: inline-block;
  }

  .t1 {
    font-size: 0.8rem;
    width: 100% !important;
    padding-left: 50px !important;
    position: relative;
    top: -20% !important ;
    margin: auto;
  }
  .p1 {
    width: 100%;
    font-size: 1rem;
    padding: 15px !important;
  }
  .diva {
    width: 100%;
    height: 1000px;
    background-color: #240145;
  }
  .btn {
    width: 130px;
    /* height: 60px;
    font-size: 0.8rem;
    padding: 0 !important;
    margin: auto 15vh !important; */
/* display: block;
  } */
/* .fa-solid {
    font-size: 1.5rem !important;
    pa
  }
}

/* Responsive 992px  */
@media (max-width: 992px) {
  .section_about {
    display: block;
    width: 83%;
    height: auto;
    margin: auto;
  }
  .img_bg {
    width: 50%;
    height: 45vh !important;
    border-radius: 20px;
    border: 0.1px solid white;
    background-image: url(../../images/about.home2.jpg);
    background-position: center;
    background-size: cover;
    transform: rotate(10deg);
    margin: 2.5vh auto;
  }
  .section_one {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin: 8vh auto;
  }
  .d1 {
    width: 30%;
    display: block;
  }

  .t1 {
    padding: 0 !important;
    font-size: 0.8rem;
    display: block;
    text-align: center !important;
  }
  .p1 {
    text-align: center;
    width: 100%;
    font-size: 1rem;
    padding: 15px !important;
  }
  .diva {
    width: 100%;
    height: 1000px;
    background-color: #240145;
  }
  .btn {
    width: 130px;
    display: block;
  }
  .fa-solid {
    font-size: 1.5rem !important;
    padding-bottom: 50px !important;
  }
}
@media (max-width: 1200px) {
  .fa-solid {
    font-size: 1.5rem !important;
    padding-bottom: 50px !important;
  }
  .t1 {
    padding: 0 !important;
    font-size: 0.8rem;
    display: block;
    text-align: center !important;
  }
}
@media (max-width: 1400px) {
  .fa-solid {
    font-size: 1.5rem !important;
    padding-bottom: 50px !important;
  }
  .t1 {
    padding: 0 !important;
    font-size: 0.8rem;
    display: block;
    text-align: center !important;
  }
}
</style>
