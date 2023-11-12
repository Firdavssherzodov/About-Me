<template>
  <div class="diva">
    <p class="text-center fs-6 fw-bold p1" style="color: #8c8989">Ma'lumot</p>
    <h1 class="text-center h11" style="color: white">Men Haqimda</h1>
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
            class="fa-solid fa-user-group fs-4"
            style="color: #ffffff; padding: 30% 40%"
          ></i>
          <p class="text-white t1">Mijozlar 10+</p>
        </div>
        <div class="d1">
          <i
            class="fa-solid fa-list-check fs-3"
            style="color: #ffffff; padding: 30% 40%"
          ></i>
          <p class="text-white t1">Loyihalar 10+</p>
        </div>
        <p class="p1 p-4 fw-bold" style="color: #8c8989">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim velit
          quod iste sapiente, dolorem adipisci? Cum error deserunt voluptatum
          quas adipisci hic veritatis vero numquam debitis, aliquid, non
          reiciendis molestias!
        </p>
        <button
          type="button"
          class="btn btn-light p-3 m-auto"
          style="color: #240145"
        >
          Bog'lanish
        </button>
      </div>
    </div>
  </div>
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
  width: 25%;
  height: 500px;
  border-radius: 20px;
  border: 0.1px solid white;
  background-image: url(../../images/about.us.jpg);
  background-position: center;
  object-fit: cover;
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
@media (max-width: 405px) {
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
    background-image: url(../../images/about.us.jpg);
    background-position: center;
    background-size: cover;
    transform: rotate(10deg);
    margin: 2.5vh auto;
  }
  .img_bg:active{
  transform: rotate(0deg) !important;
  transition: 1s !important;
}

  .section_one {
    display: flex !important;
    justify-content: space-around !important;
    flex-wrap: wrap !important;
    /* border: solid; */
    /* display: inline-block !important; */
    width: 100%;
    height: auto;
    /* margin-top: -px !important; */
  }
  .d1 {
    width: 45% !important;
    margin: 8px;
    /* display: block !important; */
    /* margin: 3vh auto !important; */
  }
  .t1 {
    font-size: 0.8rem;
    position: relative;
    left: -10%;
    padding-top: 10%;
    /* margin: auto !important; */
  }
  .p1 {
    width: 100%;
    font-size: 1rem;
    padding: 5px !important;
  }
  .diva {
    width: 100%;
    height: 1400px !important;
    background-color: #240145;
  }
  .btn {
    width: 100px;
    height: 45px;
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
    margin: 5vh auto;
  }
  .d1 {
    width: 30%;
    display: inline-block;
  }

  .t1 {
    font-size: 0.8rem;
    width: 100% !important;
    padding-left: 20px !important;
    position: relative;
    top: -10% !important ;
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

    display: block;
  }
  .fa-solid {
    font-size: 1.5rem !important;
  }
}
/* /* Responsive 768px  */
@media (max-width: 768px) {
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
    display: block;
  }
  .fa-solid {
    font-size: 1.5rem !important;
  }
}

/* Responsive 992px  */
@media (max-width: 992px) {
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
    width: 50%;
    height: 350px;
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
    padding-left: 60px !important;
    position: relative;
    top: -30% !important ;
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

    display: block;
  }
  .fa-solid {
    font-size: 1.5rem !important;
  }
}
</style>
