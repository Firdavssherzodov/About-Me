<template>
  <div class="diva">
    <div class="bigbox">
      <div class="contact">
   <a href="https://t.me/Firdavss_571" target="_blank"><i class="fa-brands fa-telegram fs-5 p-4" style="color: #ffffff"></i></a> 
   <a href="http://instagarm.com/firdavs_637" target="_blank"> <i class="fa-brands fa-instagram fs-5 p-4" style="color: #ffffff"></i></a> 
    <a href=""><i class="fa-brands fa-facebook fs-5 p-4" style="color: #ffffff"></i></a> 
      <a href=""><i class="fa-brands fa-youtube fs-5 p-4" style="color: #ffffff"></i></a> 
      </div>
      <div class="conterner m-auto"></div>
      <p class="py-1">Scroll Down</p>
    </div>
    <div class="information">
      <span class="s1">
    <i class="gg-home fs-6" style="color: #8c8989" @click="Home"></i>
      </span>
      <span class="s2">
        <i class="fa-regular fa-user fs-6" style="color: #8c8989" @click="User"></i>
        
      </span>
      <span class="s3">
        <i class="fa-regular fa-handshake fs-6" style="color: #8c8989" @click="Friendly"></i>
      </span>
      <span class="s4">
        <i class="fa-regular fa-address-card fs-6 " style="color: #8c8989;" @click="Contact"></i>
      </span>
    </div>
  </div>
</template>

<script setup>
function Home() {
  document.querySelector('.s3').style.background ='none';
  document.querySelector('.s4').style.background ='none';
  document.querySelector('.s2').style.background ='none';
  document.querySelector('.s1').style.background ='white';
}
function User() {
  document.querySelector('.s3').style.background ='none';
  document.querySelector('.s4').style.background ='none';
  document.querySelector('.s1').style.background ='none';
  document.querySelector('.s2').style.background ='white';
}
function Friendly() {
  document.querySelector('.s1').style.background ='none';
  document.querySelector('.s2').style.background ='none';
  document.querySelector('.s4').style.background ='none';
  document.querySelector('.s3').style.background ='white';
}
function  Contact() {
  document.querySelector('.s1').style.background ='none';
  document.querySelector('.s2').style.background ='none';
  document.querySelector('.s4').style.background ='White';
  document.querySelector('.s3').style.background ='none';
}
</script>

<style scoped>
.diva {
  width: 100%;
  height: 700px;
  background-color: #240145;
}
.information {

  backdrop-filter: blur(15px) !important;
  display: block;
  margin: auto !important;
  width: 350px;
  height: 70px;
  transition: 2s;
  position: fixed;
  left: 40.5%;
  bottom: 40px;
  border: 0.1px solid ;
  display: flex;
  justify-content: space-around;
  align-items: center !important;
  border-radius: 40px;
  z-index: 33 !important;

}

.s1 {
  background-color: #ffffff;
}
.s1 {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.s2 {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.s3 {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.s4 {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.s1:hover{
  background-color: #1c0135;
}
.s2:hover{
  background-color: #1c0135;
}
.s3:hover{
  background-color: #1c0135;
}
.bigbox {
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center !important;
  justify-content: space-between !important;
}
.conterner {
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  width: 30%;
  height: 55%;
  margin-top: -1px !important;

  background-image: url(../../images/about.us.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.py-1 {
  float: right;
  color: white;
  font-size: 1rem;
  transform: rotate(90deg);
}
.contact {
  width: 80px;
  height: 300px;

  display: block;
}
.py-1,
.contact {
  margin-top: 30vh;
}
@media (max-width: 380px) {
.information {
  width: 100%;
  height: 60px;
  left: 0.1%;
  bottom: 20px;
}
  
  
  .contact,
  .py-1 {
    display: none;
  }
  .diva {
    width: 100%;
    height: 350px !important;
  }
  .bigbox {
    width: 90%;
    height: 100%;
  }
  .conterner {
    width: 50% !important;
    height: 60% !important;
  }
}
@media (max-width: 576px) {
  .information {
  width: 75% !important;
  height: 60px;
  left: 12% !important;
  top: 91vh;
  bottom: 30px;
}
  
  
  .contact,
  .py-1 {
    display: none;
  }
  .diva {
    width: 100%;
    height: 400px !important;
  }
  .bigbox {
    width: 80%;
    height: 100%;
  }
  .conterner {
    width: 100% !important;
    height: 50% !important;
  }
}
@media (max-width: 768px) {
  .information {
  width: 70%;
  height: 60px;
  left: 15%;
  bottom: 40px;
}
  
  .contact,
  .py-1 {
    display: none;
  }
  .diva {
    width: 100%;
    height: 500px;
  }
  .bigbox {
    width: 80%;
    height: 100%;
  }
  .conterner {
    width: 95% !important;
    height: 90% !important;
  }
}
@media (max-width: 992px) {
  .information {
  width: 40%;
  height: 60px;
  left: 30%;
  bottom: 50px;
}
  
  .contact,
  .py-1 {
    display: none;
  }
  .diva {
    width: 100%;
    height: 550px;
  }
  .conterner {
    width: 55%;
    height: 85%;
  }
}
@media screen and (max-width: 1200px) {
  .information {
  width: 35%;
  height: 60px;
  left: 32%;
  bottom: 70px !important;
}
  
  .contact,
  .py-1 {
    display: none;
  }
  .diva {
    width: 100%;
    height: 600px;
  }
  .conterner {
    width: 60%;
    height: 90%;
  }
}
</style>
