<template>
  <div class="diva" id="two">
    <p
      class="text-center fs-6 fw-bold p1 pt-5 pb-3"
      style="color: #8c8989; font-family: Poppins, sans-serif"
    >
      The skills I have
    </p>
    <h1
      class="text-center pb-5 h11"
      style="color: white; font-size: 2rem; font-family: Poppins, sans-serif"
    >
      My Experience
    </h1>
    <div class="Section row" data-aos="fade-up-right">
      <div class="div1 col-6">
        <h6
          class="text-center py-5 fw-bold"
          style="color: white; font-family: Poppins, sans-serif"
        >
          Frontend Experience
        </h6>
        <div class="text-white d1 xs-py-4 sm-py-3">
          <ul>
            <li>HTML</li>
            <li>SASS</li>
            <li>JavaScript</li>
          </ul>

          <ul>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>TailwindCss</li>
          </ul>
        </div>
      </div>
      <div class="div1 col-6 xs-col-12 sm-col-12">
        <h6
          class="text-center py-5 fw-bold xs-py-4 sm-py-3 hh6"
          style="color: white; font-family: Poppins, sans-serif"
        >
          Frameworks
        </h6>
        <div class="text-white d1 d2">
          <ul>
            <li>Vue 3</li>
            <li>PrimeVue</li>
            <li>FlowbiteVue</li>
          </ul>

          <ul>
            <li>Vuetify</li>
            <li>Element Plus</li>
            <li>Chakra UI Vue</li>
          </ul>
        </div>
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
  width: 100%;
  height: 800px;
  background-color: #240145;
}
.Section {
  width: 75%;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.div1 {
  width: 40%;
  height: auto;
  border-radius: 2rem;
  background-color: #4e0492;
}
.div1:hover {
  background-color: #240145;
  border: 1px solid rgb(0, 101, 135);
}
.d1 {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10%;
}
ul li {
  font-weight: 500;
  padding: 10px;
  padding-bottom: 15px;
  font-family: "Roboto Condensed", sans-serif;
}
ul {
  list-style-type: circle;
}

/* ul:nth-child(2) {
  list-style-type: circle;
} */

/* Responsive 385 */
@media (max-width: 385px) {
  .diva {
    padding-top: 3vh;
  }
  .hh1 {
    font-size: 1rem !important;
  }
  .Section {
    width: 100% !important;
    display: block !important;
  }
  .div1 {
    width: 80%;
    margin: auto;
    margin-bottom: 2vh;
  }
  .d1 {
    padding-bottom: 15%;
  }
  ul li {
    font-weight: 400;
    font-size: 0.9rem;
    padding: 5px;
    padding-bottom: 10px;
  }
  h6 {
    padding: 2rem !important;
  }
}
/* Responsive 576 */
@media (max-width: 576px) {
  .diva {
    padding-top: 5vh;
  }
  .hh1 {
    font-size: 1.1rem !important;
  }
  .Section {
    width: 100% !important;
    display: block !important;
  }
  .div1 {
    width: 80%;
    margin: auto;
    margin-bottom: 2vh;
  }
  .d1 {
    padding-bottom: 13%;
  }
  ul li {
    font-weight: 500;
    font-size: 1.5rem;
    padding: 5px;
    padding-bottom: 10px;
  }
  h6 {
    font-size: 1.2rem;
    padding: 2.5rem !important;
  }
  .d2 ul li {
    padding-bottom: 15px !important;
  }
}
/* Responsive 768 */
@media (max-width: 768px) {
  .diva {
    padding-top: 5vh;
  }
  .hh1 {
    font-size: 1.1rem !important;
  }
  .Section {
    width: 100% !important;
    display: block !important;
  }
  .div1 {
    width: 80%;
    margin: auto;
    margin-bottom: 2vh;
  }
  .d1 {
    padding-bottom: 10%;
  }
  ul li {
    font-weight: 500;
    font-size: 1.1rem;
    padding: 5px;
    padding-bottom: 10px;
  }
  h6 {
    font-size: 1.2rem;
    padding: 2.5rem !important;
  }
  .d2 ul li {
    padding-bottom: 8px !important;
  }
}
/* Responsive 992 */
@media (max-width: 992px) {
  .diva {
    padding-top: 5vh;
  }
  .hh1 {
    font-size: 1.1rem !important;
  }
  .Section {
    width: 100% !important;
    display: block !important;
  }
  .div1 {
    width: 80%;
    margin: auto;
    margin-bottom: 2vh;
  }
  .d1 {
    padding-bottom: 10%;
  }
  ul li {
    font-weight: 500;
    font-size: 1.1rem;
    padding: 5px;
    padding-bottom: 10px;
  }
  h6 {
    font-size: 1.2rem;
    padding: 2.5rem !important;
  }
  .d2 ul li {
    padding-bottom: 8px !important;
  }
}
</style>
