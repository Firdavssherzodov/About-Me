<template>
  <div class="diva">
    <p
      class="text-center fs-6 fw-bold p1 pt-3"
      style="color: #8c8989; font-family: Poppins, sans-serif"
    >
      Men taklif qiladigan
    </p>
    <h1
      class="text-center pb-5 h11"
      style="color: white; font-size: 2rem; font-family: Poppins, sans-serif"
    >
      Xizmatlar
    </h1>

    <div class="section">
      <div class="div">
        <div class="d1">
            <h4 class="py-4 text-center fs-4"  style="color: #240145; font-family: Poppins, sans-serif;">Frontend</h4>
            <ul class="text-white py-4 px-5">

            <li class="py-2">Chiroyli dizayn</li>
            <li class="py-2">Har qanday qurilmalarga moslashuvchan</li>
            <li class="py-2">Foydalanuvchilarni jalb qiladigan</li>
            <li class="py-2">Foydalanish uchun qulay</li>
            <li class="py-2">Mukammal turdagi dizaynlar</li>
            </ul>
        </div>
      </div>
      <div class="div">
        <div class="d1">
            <h4 class="py-4 text-center fs-4"  style="color:#240145; font-family: Poppins, sans-serif">Backend</h4>
<ul class="text-white py-4 px-5">
    <li class="py-2">Foydalanish uchun qulay</li>
    <li  class="py-2">Ma'lumotlarni kiritish muammosiz</li>
    <li  class="py-2">Saytni boshqarish qiyinchiliklarsiz</li>
    <li class="py-2">Moslashuvchan ma'lumotlar</li>
    <li class="py-2">Ma'lumotlar bazasi bilan qulay ishlash</li>
</ul>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.diva {
  margin-top: -15vh;
  width: 100%;
  height: 800px;
  background-color: #240145;
}
.section {
  height: 500px;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div {
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    background-color: #4e0492;
    width: 45%;
    height:70%;
    border: 1px solid white;
}
.div:hover {
    transition: 0.5s;
  background-color: #240145;
  border: 1px solid rgb(0, 101, 135);
}

.d1{
    width: 100%;
    height: 25%;
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    background-color: white;
}
ul{
    list-style-type: circle;
}

/* Responsive 385px */
@media (max-width: 385px) {
  .diva {
    height: 1000px !important; 
    width: 100% !important;
    margin-top: -5% !important;
  }
  .div{
    width: 80%;
    height: 42% !important;
    margin:3vh auto ;
  }
  ul li{
padding: 3px !important;
  }
  .section{
    width: 100%;
    height: 100%;
    display: block;
  }
  .d1{
    width: 100%;
    height: 20% ;
  }

}
/* Responsive 576px */
@media (max-width: 576px) {
  .diva {
    height:  1100px;
    margin-top: -3vh !important;
  }
  .div{
    width: 80%;
    height: 33% !important;
    margin:3vh auto ;
  }
  .section{
    width: 100%;
    height: 100%;
    display: block;
  }
  .d1{
    width: 100%;
    height: 20% !important;
  }
}

/* Responsive 768px */
@media (max-width: 768px) {
  .diva {
    margin-top: -1vh !important;
  }
  .div{
    width: 80%;
    height: 45%;
    margin:3vh auto ;
  }
  .section{
    width: 100%;
    height: 100%;
    display: block;
  }
  .d1{
    width: 100%;
    height: 25%;
  }
}

@media (max-width: 992px) {
  .diva {
    height: 1200px !important;
    margin-top: -0.1px !important;
  }
  .div{
    width: 80%;
    height: 30% !important;
    margin:3vh auto ;
  }
  .section{
    width: 100%;
    height: 100%;
    display: block;
  }
  .d1{
    width: 100%;
    height: 25% !important;
  }
}
</style>
