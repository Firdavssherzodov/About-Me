<template>
  <div class="diva">
    <div class="bigbox">
      <div class="contact">
        <i class="fa-brands fa-telegram fs-5 p-4" style="color: #ffffff"></i>
        <i class="fa-brands fa-instagram fs-5 p-4" style="color: #ffffff"></i>
        <i class="fa-brands fa-facebook fs-5 p-4" style="color: #ffffff"></i>
        <i class="fa-brands fa-youtube fs-5  p-4" style="color: #ffffff"></i>
        
      </div>
      <div class="conterner m-auto"></div>
      <p class="py-1">Scroll Down</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.diva {
  width: 100%;
  height: 800px;
  background-color: #240145;
}
.bigbox {
 
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center !important;
  justify-content: space-between     !important;
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
@media screen and (max-width:380px) {
    .contact,.py-1{
        display: none;
    }
    .diva{
        width: 100%;
        height: 400px;
    }
    .conterner{
        width:100% !important;
        height: 60% !important;
    }
}
@media screen and (max-width:576px) {
    .contact,.py-1{
        display: none;
    }
    .diva{
        width: 100%;
        height: 450px;
    }
    .conterner{
        width:100% !important;
        height: 80% !important;
    } 
}
@media screen and (max-width:768px) {
    .contact,.py-1{
        display: none;
    }
    .diva{
        width: 100%;
        height: 500px;
    }
    .conterner{
        width:95% !important;
        height: 90% !important; 
    } 
}
@media screen and (max-width:992px) {
    .contact,.py-1{
        display: none;
    }
    .diva{
        width: 100%;
        height: 550px;
    }
    .conterner{
        width:55%;
        height: 85%;
    } 
}
@media screen and (max-width:1200px) {
    .contact,.py-1{
        display: none;
    }
    .diva{
        width: 100%;
        height: 600px;
    }
    .conterner{
        width:60%;
        height: 90%;
    } 
}


</style>
